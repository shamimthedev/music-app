import { Play, SkipBack, SkipForward } from 'lucide-react';
import MusicAnimation from '../assets/musicanim.webp'
import { songsData } from './../songs';
const Home = () => {
    return (
        <>
            <div className="w-full h-screen bg-black">
                <div className="flex">
                    <div className="w-full md:w-1/2 h-full flex flex-col justify-start items-center gap-[30px] pt-5 md:pt-[120px]">
                        <h1 className="text-white text-xl font-semibold">Now Playing</h1>
                        <div className="w-[80%] md:w-[250px] md:h-[300px] rounded-md overflow-hidden relative">
                            <img src={songsData[0].image} alt="" className='object-cover' />
                            <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
                                <img src={MusicAnimation} alt="" className='w-[50%]' /></div>
                        </div>
                        <div>
                            <div className="text-white text-xl font-bold text-center">{songsData[0].name}</div>
                            <div className="text-lg text-center text-gray-400">{songsData[0].singer}</div>
                        </div>
                        <div className="w-full grid place-items-center">
                            <input type="range" className='appearance-none w-1/2 h-1.5 rounded-md bg-gray-600' id='range' />
                        </div>
                        <div className="flex items-center justify-center gap-5 text-white">
                            <SkipBack size={25} className='transition-colors duration-300 cursor-pointer hover:text-gray-600'/>
                            <div className="w-[50px] h-[50px] rounded-full bg-white text-black flex items-center justify-center transition-colors duration-300 cursor-pointer hover:bg-gray-600 hover:text-white">
                                <Play size={20} />
                            </div>
                            <SkipForward size={25} className='transition-colors duration-300 cursor-pointer hover:text-gray-600'/>
                        </div>
                    </div>
                    <div className="w-1/2 h-full bg-slate-600 hidden md:block"></div>
                </div>

            </div>
        </>
    )
}

export default Home