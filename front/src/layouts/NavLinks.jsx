import React from 'react'
import { useLocation } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const NavLinks = () => {
	const location = useLocation();
	const links = [{
		hash: '#home',
		text: 'Гавная'
	}, {
		hash: '#about',
		text: 'О нас'
	}, {
		hash: '#rooms',
		text: 'Номера'
	}, {
		hash: '#services',
		text: 'Услуги'
	}, {
		hash: '#data',
		text: 'Контакты'
	}]

	return (
		<ul>
			{links.map((link, i, array) => (
				<li>
					<Link key={link.text + Date.now()} to={link.hash} children={link.text}/>
				</li>
			))}
		</ul>
	)
}

export default NavLinks