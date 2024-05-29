import Section_1 from 'layouts/Section_1'
import React from 'react'
import Room from 'layouts/Room'
import { main } from 'styles/main.module.css'
import About from './About'
import Services from './Services'

const Main = ({ popupForm }) => {
  return (
    <main className={main}>
      <Section_1 />
      <About />
      <Room popupForm={popupForm} />
      <Services />

    </main>
  )
}

export default Main