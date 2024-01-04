import { Link, NavLink } from 'react-router-dom'
// When customizing the portfolio page - change VideoColorSpace, logo images etc
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faUpwork } from '@fortawesome/free-brands-svg-icons'
import './index.scss';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='slobodan' />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/diegoIsBuilding'>
                    <FontAwesomeIcon icon={faGithub} color ='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/diegoxgarcia/'>
                    <FontAwesomeIcon icon={faLinkedin} color ='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.upwork.com/freelancers/~014064430ec8030e3b?viewMode=1&s=1017484851352698997'>
                    <FontAwesomeIcon icon={faUpwork} color ='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar