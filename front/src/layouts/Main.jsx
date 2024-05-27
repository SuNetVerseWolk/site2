import Section_1 from 'layouts/Section_1'
import React from 'react'
import Room from 'layouts/Room'
import { main } from 'styles/main.module.css'

const Main = () => {
  return (
    <main className={main}>
      <Section_1 />
      <Room />
    </main>
  )
}

export default Main