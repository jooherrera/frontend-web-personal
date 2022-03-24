interface NavbarBtnProps {
  img: string
  text: string
}
export const NavbarBtn = ({ img, text }: NavbarBtnProps) => {
  return (
    <>
      <div className="Navb-icon">
        <img src={img} alt="" width={50} />
        <span>{text}</span>
      </div>
    </>
  )
}
