/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
export default function Triage() {
    return (
        <div className="w-full h-[90vh] sm:-[90vh] relative" id="patients">
            <img 
            src='https://media.istockphoto.com/id/1211342030/photo/coronavirus-screening-at-medical-centre.webp?s=1024x1024&w=is&k=20&c=hQBiYt1EKK7xwl2SnCOFFvVIqZOrKy2S0nZamLwZvIs='
             alt='Background Image'
             className='w-full h-[90vh] sm:[90vh] object-cover'></img>

            <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)]'/>
            <div className='absolute w-full h-full top-0 flex flex-col justify-center items-start px-[14px] sm:px-[1em] md:px-[3em] lg:px-[5em] text-white'>
                <p className=' text-3xl font-roboto sm:text-5xl font-bold mb-[25px]'>
                    Welcome to the Triage Center
                </p>
                <p className='text-md font-roboto sm:text-lg mb-[15px]'>
                    Get your patients' vitals
                </p>
                <p className='text-sm text-center font-roboto'>
                    
                </p>
            </div>
        </div>
    )
}