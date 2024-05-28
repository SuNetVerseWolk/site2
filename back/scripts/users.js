const
express = require('express'),
getData = require('./getData'),
setData = require('./setData'),
router = express.Router();

const getUsers = e => getData('users');
const setUsers = data => setData('users', data);


router.get('/', (req, res) => {
	const users = getUsers();
	
	res.json(users)
})
router.get('/:id', (req, res) => {
	const
	users = getUsers(),
	user = users.find(user => user.id === +req.params.id);

	if (user) return res.json(user)

	res.status(404).json(false);
})


router.post('/', (req, res) => {
	if (!req.body.type || req.query.key !== process.env.ADMIN_ID) return res.sendStatus(403);

	const user = { ...req.body, id: Date.now() }
	const users = getUsers();

	if (users.findIndex(selfUser => selfUser.name === user.name && selfUser.lastName === user.lastName && selfUser.fatherName === user.fatherName))
		return res.sendStatus(400);

	users.push(user);

	if (setUsers(users)) return res.sendStatus(201);
	res.sendStatus(500);
})
router.post('/book/:id', (req, res) => {
	const users = getUsers();
	const user = users.find(user => user.id === +req.params.id);

	if (!user) return res.sendStatus(404);
	if (!req.body.bookedRooms) return res.sendStatus(400);

	user.bookedRooms = [...user.bookedRooms, ...req.body.bookedRooms];
	
	if (setUsers(users)) return res.sendStatus(201);

	res.sendStatus(500);
});
router.post('/change', (req, res) => {
	const
		userID = +req.query.id,
		userType = req.query.type,
		whatChange = req.body;

	if (userID && userType) {
		const
			users = getData(userType),
			user = users.find(user => user.id === userID);

		if (!user) return res.status(404).json('user not found');

		Object.keys(whatChange).forEach(key => {
			if (key !== 'password' || (key === 'password' && !!whatChange[key]))
				user[key] = whatChange[key]
		});

		if (setData(userType, users))
			return res.status(200).json({ id: userID, type: userType });
	}

	res.status(500).json(false);
})


router.get('/logIn', (req, res) => {
	if (
		req.body.name === process.env.ADMIN_NAME
		&&
		req.body.password === process.env.ADMIN_PASSWORD
	) return res.json({ id: process.env.ADMIN_ID, type: process.env.ADMIN_ID });

	const
		teachers = getData(dataPaths.teachers),
		teacher = teachers.find(teacher => teacher.name === req.body.name);
	let person = undefined;

	if (!!teacher) {
		person = {
			...teacher,
			type: dataPaths.teachers
		}
	} else {
		const student = getData(dataPaths.students).find(student => student.name === req.body.name);

		person = student ? {
			...student,
			type: dataPaths.students
		} : undefined;
	}

	if (!!person) {
		const { id, password, type } = person;

		if (password === req.body.password)
			return res.json({ id, type });

		res.status(403).json(false);
	}
	else res.status(404).json(false);
})
router.post('/signUp', (req, res) => {
	const bodyKeys = Object.keys(req.body);
	
	if (!(
			bodyKeys.includes('name') &&
			bodyKeys.includes('lastName') &&
			bodyKeys.includes('fatherName') &&
			bodyKeys.includes('number') &&
			bodyKeys.includes('password') &&
			bodyKeys.includes('login')
		)) {
		return res.status(400).json(false);
	}
	const user = { ...req.body, id: Date.now(), bookedRooms: [] }
	const users = getUsers();

	if (users.findIndex(selfUser => selfUser.name === user.name && selfUser.lastName === user.lastName && selfUser.fatherName === user.fatherName) != -1)
		return res.sendStatus(403);

	if (setUsers([...users, user])) return res.status(201).json({ id: user.id });
	res.status(500).json(false);
})


router.delete('/:id', (req, res) => {
	const users = getUsers();

	res.sendStatus(setUsers(users.filter(user => user.id != +req.params.id)) ? 200 : 500);
})

module.exports = router;