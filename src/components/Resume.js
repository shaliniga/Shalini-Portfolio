import Resumepic from '../assets/resume 3.jpg'
import Resumepdf from '../assets/resume.pdf'
import '../App.css';

export default function Resume(){
    return(
        <section className='bg-secondary flex flex-col md:flex-row' id='resume'>
              <div className='w-1/2 flex m-auto pb-5'>
                <h1 className='w-full text-center font-anton-font text-4xl pt-5 text-red-600'>Resume
                <p className='text-3xl font-passion-one pt-5 text-green-950 '>You can view my Resume Here...</p>
                <p className='text-3xl font-passion-one pt-8'><a className='text-white bg-head resume-btn' href={Resumepdf} download='Shalini Resume'> Download </a> </p>
                </h1>
              </div>
              <img className=' w-full md:w-1/2 md:m-36 p-4 md:p-0 rounded-3xl' src={Resumepic} alt='resume'/>
        </section>
    );
}