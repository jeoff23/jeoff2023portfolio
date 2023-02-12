
import React from 'react'
import AboutMe from "./AboutMe/page"
import Achievements from "./Achievements/page";
import AllWorks from "./AllWorks/page";
import Contact from "./Contact/page";
import Footer from "./Footer/page";
import Header from "./Header/page"
import Skills from "./Skills/page";


type Props = {}

function page({ }: Props) {
  return (
    <div className="bg-midnight min-h-screen bg-background-texture">
      <section id="header"><Header /></section>
      <section id="about"><AboutMe /></section>
      <section id="skills"><Skills /></section>
      <section id="allworks"><AllWorks /></section>
      <section id="achievements"><Achievements /></section>
      <section id="contact"><Contact /></section>
      <Footer />

    </div>
  )
}

export default page
