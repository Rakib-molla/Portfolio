import React from 'react';
import heroImage from '../../assets/images/hero.svg';
import CountUp from 'react-countup';

const PDF_FILE_URL = 'http://localhost:5173/Md_Rakib_Molla_Resume.pdf'

const Hero = () => {

    const downloadResume =(e)=>{
        e.preventDefault();
    }

    return (
        <section>
            <div className="container" >
                <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                    {/* hero left content start */}
                    <div className='w-full md:basis-1/2'>
                        <h5 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[600] text-[16px]' >Hello Welcome</h5>
                        <h1 data-aos='fade-up' data-aos-duration='1500' className='text-headingColor font-[800] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'>I'm Rakib Molla <br /> MERN stack developer </h1>
                        <div
                        data-aos='fade-up'
                        data-aos-duration='1500'
                        data-aos-delay='200'
                        className='flex items-center gap-6 mt-7'>
                            <a href="">
                                <button className='bg-primaryColor text-white font-[500] flex items-center gap-3 hover:bg-smallTextColor ease-id duration-300 py-2 px-4 rounded-[8px]'> <i className='ri-mail-line'> <a target='_blank' href="https://www.fiverr.com/rakib_molla">Hire Me</a> </i></button>
                            </a>
                            <a onClick={()=>downloadResume(e)} className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor' href='Md_Rakib_Molla_Resume.pdf' 
                            
                            > <button>Download Resume</button></a>

                        </div>
                        <p data-aos='fade-left' data-aos-duration='1500' className='flex gap-2 text-headingColor font-[500] leading-7 sm:pl-14 sm:pr-10 mt-10'>

                        <span>
                        <i className="ri-apps-2-line"></i>
                        </span>

                        As a skilled MERN stack developer, Every day I learn something new, I specialize in building dynamic and responsive web applications using the powerful combination of HTML5 , CSS3, Bootstrap, Tailwind CSS, Firebase, MongoDB, Express.js, React.js, and Node.js. With a strong foundation in JavaScript and expertise in the MERN stack, I have the ability to seamlessly integrate front-end and back-end technologies to create robust and scalable solutions.
                        </p>

                        <div className='flex items-center gap-9 mt-10'>
                            <span className='text-smallTextColor text-[15px] font-[600]'>
                                Follow Me:
                            </span>
                            <span>
                                <a target='_blank' className='text-smallTextColor text-[15px] font-[600]' href="https://www.linkedin.com/in/rakib-molla/">
                                    <i className="ri-linkedin-box-fill"></i>
                                </a>
                            </span>
                            <span>
                                <a className='text-smallTextColor text-[15px] font-[600]' target='_blank' href="https://github.com/rakib-molla">
                                <i className="ri-github-fill"></i>
                                </a>
                            </span>
                            <span>
                                <a className='text-smallTextColor text-[15px] font-[600]' target='_blank' href="https://stackoverflow.com/users/11881190/rakib-molla">
                                <i className="ri-stack-line"></i>
                                </a>
                            </span>
                        </div>
                    </div>   {/* hero left content end */}

                    {/* hero image start */}
                    <div className='basis-1/3 mt-10 sm:mt-0'>
                        <figure className='flex items-center justify-center'>
                            <img src={heroImage} alt="" />
                        </figure>
                    </div> {/* hero image end */}

                    {/* hero content right start */}
                    <div className='md:basis-1/5 flex  justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={7} duration={2}/>
                            </h2>
                            <h4 className='text-headingColor font-[600] text-[18px]'>Month of Experience </h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                               <span className='text-green-600'>
                               <CountUp start={0} end={100} duration={2}/>%
                               </span>
                            </h2>
                            <h4 className='text-headingColor font-[600] text-[18px]'> Success Rate </h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={5} duration={2}/>
                            </h2>
                            <h4 className='text-headingColor font-[600] text-[18px]'> Happy Client  </h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={17} duration={2}/>
                            </h2>
                            <h4 className='text-headingColor font-[600] text-[18px]'> Complete Projects </h4>
                        </div>
                    </div>
                    {/* hero content right end */}
                    
                </div>
            </div>
        </section>
    );
};

export default Hero;