import React from 'react'
import { Link } from 'react-router-dom'
import Logo from 'images/ui/cloudy.png'


function Home() {
    return (
        <div className='bg-[#29223c] h-screen grid place-content-center'>
            <div className="bg-[#0000004d] h-[600px] rounded-[50px]">
                <div className="flex flex-col items-center justify-center mt-28 text-center space-y-5">
                    <img src={Logo} alt="" width={150} />
                    <h1 className='text-3xl font-semibold text-white'>React Hava Durumu Uygulaması</h1>
                    <p className='text-sm text-gray-400 lg:w-1/2 '>React ile yapılmış bu hava durumu uygulaması react-router-dom,tailwindcss ve openweathermap apisi kullanarak yapılmıştır...</p>
                    <Link to="weathers"
                        className='px-16 py-4 bg-blue-500 rounded-2xl text-white text-sm flex items-center hover:bg-blue-800 duration-500'>
                        Hava Durumuna Git
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home