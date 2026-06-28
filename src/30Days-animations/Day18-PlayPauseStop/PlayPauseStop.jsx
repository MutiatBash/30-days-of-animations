import React from 'react'
import './PlayPauseStop.css'

const PlayPauseStop = () => {
    return (
        <div className='bg-[#190023] w-full h-full flex justify-center items-center overflow-hidden'>
            <div className='morphing-container flex items-center'>
                <div className='relative w-60 h-60 rounded-full bg-[#C2185B] flex justify-center items-center overflow-hidden shrink-0 -[0_0_15px_5px_rgba(194,24,91,0.40)]'>
                    {/* <div className='shine'></div> */}
                    <div className='morph-icon w-35 h-35 bg-white'></div>
                </div>
                {/* <div className='text-reveal absolute shrink-0 top-1/2 -translate-y-1/2 left-64'>
                    <p className='text-white text-5xl font-bold tracking-[4px] leading-none'
                        style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
                        SONARA
                    </p>
                    <p className='text-[#C2185B] text-[10px] tracking-[4px] uppercase mt-1'
                        style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
                        Feel the sound
                    </p>
                </div> */}
            </div>
        </div>
    )
}

export default PlayPauseStop