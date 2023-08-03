/* eslint-disable @next/next/no-img-element */
import herobg from '../../assets/hero.jpg'
const Hero = () => {
    return (
        <div className="w-full h-[90vh] sm:-[90vh] relative" id="home">
            <img 
            src='https://ugc.futurelearn.com/uploads/images/92/51/large_hero_92514130-a56a-4264-870f-345dd6677c4a.jpg'
             alt='Background Image'
             className='w-full h-[90vh] sm:[90vh] object-cover'></img>

            <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)]'/>
            <div className='absolute w-full h-full top-0 flex flex-col justify-center items-start px-[14px] sm:px-[1em] md:px-[3em] lg:px-[5em] text-white'>
                <p className=' text-3xl font-roboto sm:text-5xl font-bold mb-[25px]'>
                    Welcome to Lukenya Med
                </p>
                <p className='text-md font-roboto sm:text-lg mb-[15px]'>
                    Glad to have you back Daktari
                </p>
                <p className='text-sm text-center font-roboto'>
                    Here you can manage your patients, appointments and prescriptions
                </p>
            </div>
        </div>
    )
}

export default Hero;