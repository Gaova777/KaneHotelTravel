import style from './Logo.module.css'
import { Link } from 'react-router-dom'

const Logo: React.FC = () =>{
  return(
    <div className={style.logo}>
      <Link to='/'>
        Kane Travel
      </Link>
    </div>
  )
}

export default Logo