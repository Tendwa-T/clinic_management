/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
export default function Pharmacy() {
    return (
        <div className="w-full h-[90vh] sm:-[90vh] relative" id="patients">
            <img 
            src='https://media.istockphoto.com/id/1325914527/photo/professional-confident-black-pharmacist-wearing-lab-coat-and-glasses-crosses-arms-and-looks.webp?s=1024x1024&w=is&k=20&c=OujIedrR_k6mnN6riYc38NybuRRN0gcfWHr_ttvBQPQ='
             alt='Background Image'
             className='w-full h-[90vh] sm:[90vh] object-cover'></img>

            <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)]'/>
            <div className='absolute w-full h-full top-0 flex flex-col justify-center items-start px-[14px] sm:px-[1em] md:px-[3em] lg:px-[5em] text-white'>
                <p className=' text-3xl font-roboto sm:text-5xl font-bold mb-[25px]'>
                    Welcome to the Pharmacy
                </p>
                <p className='text-md font-roboto sm:text-lg mb-[15px]'>
                    Prescribe drugs to your patients
                </p>
                <p className='text-sm text-center font-roboto'>
                    
                </p>
            </div>
        </div>
    )
}