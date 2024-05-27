import React from 'react'
import Service from './Service'
import styles from 'styles/service.module.css'

const Services = () => {
    const services = [
        {
            image: 'parking-spot.png',
            text: 'Парковка',
        },
        {
            image: 'coffee-cup.png',
            text: 'Кафетерий',
        },
        {
            image: 'wifi.png',
            text: 'Бесплатный Wi-Fi',
        },
        {
            image: 'travel-bag.png',
            text: 'Комната хранения',
        }
    ]

    return (
        <div id='services' className={styles.serviceContainer}>
            <h2>Услуги</h2>

            <div>
                {
                    services.map((service, index) => (
                        <Service image={service.image} text={service.text} />
                    ))
                }
            </div>
        </div>
    )
}

export default Services