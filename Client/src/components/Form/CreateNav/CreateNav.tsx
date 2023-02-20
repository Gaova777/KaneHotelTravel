import { Link } from 'react-router-dom'
import Logo from "../../Logo/Logo";
import style from './CreateNav.module.css'

interface InputProps {
  value: string,
  url: string
}

const CreateNav: any = (props: InputProps) =>{
  return(
    <nav className={style.nav}>
      <Logo />

      <Link to={props.url}>
        <button className={style.button}>{props.value}</button>
      </Link>
    </nav>
  )
}

export default CreateNav;