import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Loader from 'react-loaders'
import AnimatedLetters from '../Animated_Letters';
// import LogoTitle from '../../assets/images/logo-s.png'
// import Logo from './Logo'
import './index.scss';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','D', 'i', 'e', 'g', 'o']
    const jobArray = ['F', 'u', 'l', 'l', 's', 't', 'a', 'c', 'k', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    
        // Cleanup function to clear the timeout
        return () => clearTimeout(timer);
    }, []);
    
    
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>  
                <br/> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m </span>

                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                index={15}
                />
                {/* <img src={LogoTitle} alt='developer' /> */}
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                index={20}
                />
                </h1>
                <h2> Freelance Developer / Python and Javascript Expert </h2>
                <Link to='/contact' className='flat-button'>Contact Me</Link>
            </div>
        </div>
    );
}

export default Home