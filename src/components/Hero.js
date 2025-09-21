//header down section name hero section

import '../App.css';
import Shalini1 from '../assets/shalini1.jpeg';
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

function Hero(){
    return(
        <section className='flex bg-secondary flex-col md:flex-row md:pl-20' id='hero'>
            <h1 className='w-full px-10 pt-10 pb-2 md:py-36 text-5xl justify-center bg-secondary font-anton-font'> Hello,<br/> <div className='py-5'>This is <span className='text-red-600'>Shalini</span></div>
            <p className='text-3xl py-2 font-passion-one text-green-950'> Welcome to my software development portfolio! </p>
            <p className='text-3xl py-2 font-passion-one text-green-950'> I am a 2+ years experienced Full Stack developer </p>
            <p className='text-3xl py-2 font-passion-one text-green-950'>Check About me...</p>
            <span className='flex py-3 gap-4'>
                <a className='flex hover:text-red-600' href='https://www.linkedin.com/in/shalini-g-239b7b29b/'><FaLinkedinIn/></a>
                <a className='flex hover:text-red-600' href='https://github.com/shaliniga'><FaGithub/></a>  
            </span>
            </h1>           
            <img className='md:w-1/2 h-1/2 mx-10 rounded-full pb-4 md:py-1' src={Shalini1} alt='shalini profile'/>
        </section>
    );
}



export default Hero;