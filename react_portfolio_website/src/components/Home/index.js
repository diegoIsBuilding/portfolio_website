import { Link } from 'react-router-dom';
// import LogoTitle from '../../assets/images/logo-s4.png'
import './index.scss'


const Home = () => {

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br/> I'm Diego
                {/* <img src={LogoTitle} alt='developer' /> */}
                <br/>
                Fullstack Developer
                </h1>
                <h2> Freelance Developer / Python and Javascript Expert </h2>
                <Link to='/contact' className='flat-button'>Contact Me</Link>
            </div>
        </div>
    );
}

export default Home