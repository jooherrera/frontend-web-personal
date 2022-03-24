import { useContext } from 'react'
import { appContext } from '../../context/context'

export const SoftSkill = () => {
  const { state } = useContext(appContext)
  return (
    <div className="Skill my-5">
      <h3 className="Skill__Title">Soft skills</h3>
      <div className="Skill__InfoContainer">
        <ul>
          {state?.info.resume.content.sectionSoftSkills.items.map((item: string, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const HardSkill = () => {
  const { state } = useContext(appContext)
  return (
    <div className="Skill my-5">
      <h3 className="Skill__Title">Hard skills</h3>
      <div className="Skill__InfoContainer">
        <ul>
          {state?.info.resume.content.sectionHardSkills.items.map((item: string, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
