/* eslint-disable @next/next/no-img-element */
export default function Users() {
    return (
        <div className="w-full h-[90vh] sm:-[90vh] relative " id="patients">
        <img
            src='https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Background Image'
            className='w-full h-[90vh] sm:[90vh] object-cover'></img>

        <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)]' />
        <div className='absolute w-full h-full top-0 flex flex-col justify-center items-start px-[14px] sm:px-[1em] md:px-[3em] lg:px-[5em] text-white'>
            <p className=' text-3xl font-roboto sm:text-5xl font-bold mb-[25px]'>
                Welcome to The User Lounge
            </p>
            <p className='text-md font-roboto sm:text-lg mb-[15px]'>
                View your workmates
            </p>
            <p className='text-sm text-center font-roboto'>

            </p>
        </div>
    </div>
    )
}