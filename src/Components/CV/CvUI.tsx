import headerImg from './header.svg'
import footerImg from './footer.svg'
import fotoPerfil from './FotoDePerfil.png'
import './Cv.css'
import { Contact } from './Contact'
import { SoftSkill, HardSkill } from './Skill'
import { Topic } from './Topic'
import { topics } from './mockTopic'
import { useContext, useEffect, useState } from 'react'
import { appContext } from '../../context/context'

interface IItem {
  items: ISubItem[]
  topic: string
}

interface ISubItem {
  description: string
  title: string
}

export const CvUI = () => {
  const { state } = useContext(appContext)

  return (
    <>
      {state?.success && (
        <div className="container">
          <header className="HeaderCV">
            <img src={headerImg} alt="Header img" className="" />
            <img src={fotoPerfil} alt="Foto de perfil" className="HeaderCV__perfilImg" />
            <h2 className="HeaderCV__Title">{state.info.resume.content.sectionHeader?.title}</h2>
            <h4 className="HeaderCV__SubTitle">{state.info.resume.content.sectionHeader?.subTitle}</h4>
          </header>
          <main className="MainCV">
            <section className="MainCV__About">
              <p>{state.info.resume.content.sectionHeader?.about}</p>
            </section>
            <div className="MainCV__Body">
              <section className="MainCV__Left">
                <Contact />
                <SoftSkill />
                <HardSkill />
              </section>
              <section className="MainCV__Right">
                {state.info.resume.content.mainSection.items.map((item: IItem, idx: number) => (
                  <Topic key={idx} title={item.topic} items={item.items} />
                ))}
              </section>
            </div>
          </main>
          <footer>
            <img src={footerImg} alt="" />
          </footer>
        </div>
      )}
    </>
  )
}
