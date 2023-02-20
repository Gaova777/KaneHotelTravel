import { Link } from 'react-router-dom'
import Logo from "../../Logo/Logo";
import style from './CreateNav.module.css'
import Button from '../Button/Button';

interface InputProps {
  value: string,
  url: string
}

const CreateNav: any = (props: InputProps) =>{
  return(
    <nav className={style.nav}>
      <Logo />

      <Link to={props.url}>
        <Button type="button" value={props.value} />
      </Link>
    </nav>
  )
}

export default CreateNav;