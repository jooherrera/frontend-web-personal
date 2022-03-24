import './WorkCard.css'

interface WorkCardProps {
  link: string
  title: string
  imgPortada: string
  imgLogo: string[]
}

export const WorkCard = ({ link, title, imgPortada, imgLogo }: WorkCardProps) => {
  return (
    <>
      <div className="WorkCard">
        <div className="WorkCard-Img">
          <a href={link} target="_blank">
            <img src={imgPortada} alt="Foto de portada de la app" />
          </a>
        </div>
        <div className="WorkCard-Title">{title}</div>
        <div className="WorkCard-Logos">
          {imgLogo.map((img, idx) => {
            return <img src={img} key={idx} alt="react logo" className="WorkCard-Logo_img" />
          })}

          {/* <img src={TSLogo} alt="ts logo" className="WorkCard-Logo_img" /> */}
        </div>
      </div>
    </>
  )
}
