
function TextField() {
    return (
        <div className='w-full max-w-sm md:max-w-lg lg:max-w-xl'>
            <form className='flex flex-col items-center justify-center space-y-6 md:flex-row md:space-y-0 md:space-x-6'>
                <input 
                    className='bg-myBlue rounded-full w-80 py-3 px-5 text-myGray text-sm font-bold text-opacity-25 overflow-hidden focus:text-white focus:outline-none focus:border-2 focus:border-myAquamarine md:w-full' 
                    id='username' 
                    type='text' 
                    placeholder='Email address'/>
                <button className='bg-myAquamarine rounded-full w-80 py-3 px-5 text-myBlue text-sm font-bold hover:bg-transparent hover:border-2 hover:border-myAquamarine hover:text-white md:w-64'>
                    Get notified
                </button>
            </form>
        </div>
    );
}

export default TextField;