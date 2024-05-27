import Section_1 from 'layouts/Section_1'
import React from 'react'
import Room from 'layouts/Room'
import { main } from 'styles/main.module.css'
import Section_2 from './Section_2'

const Main = () => {
  return (
    <main className={main}>
      <Section_1 />
      <Section_2 />
      <Room />
    </main>
  )
}

export default Main