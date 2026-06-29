import React, {useRef} from 'react'
import "./EyeFollowingMouse.css"

const SPARKLES = ['✨', '⭐', '💫']
const SPARKLE_SHAPES = ['✦', '✧', '⋆', '✶', '★']
const EyeFollowingMouse = () => {
  const leftEyeRef = useRef(null)
  const leftPupilRef = useRef(null)
  const rightEyeRef = useRef(null)
  const rightPupilRef = useRef(null)
  const wandRef = useRef(null)
  const lastSparkle = useRef(0)

  const moveEye = (eyeRef, pupilRef, e) => {
    const eye = eyeRef.current
    const rect = eye.getBoundingClientRect()

    // center of the eye
    const eyeCenterX = rect.left + rect.width / 2
    const eyeCenterY = rect.top + rect.height / 2

    // angle between eye and cursor
    const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX)

    // how far the pupil moves — this it within the eye
    const distance = 20

    const x = Math.cos(angle) * distance
    const y = Math.sin(angle) * distance

    // apply to pupil
    pupilRef.current.style.transform = `translate(${x}px, ${y}px)`
  }

  // const spawnSparkle = (x, y) => {
  //   const spark = document.createElement('div')
  //   spark.className = 'sparkle'
  //   spark.textContent = SPARKLES[Math.floor(Math.random() * SPARKLES.length)]
  //   spark.style.left = (x + Math.random() * 16 - 8) + 'px'
  //   spark.style.top = (y + Math.random() * 16 - 8) + 'px'
  //   document.body.appendChild(spark)
  //   setTimeout(() => spark.remove(), 600)
  // }

  const spawnSparkle = (x, y) => {
    const now = Date.now()
    if (now - lastSparkle.current < 30) return
    lastSparkle.current = now

    const s = document.createElement('div')
    s.className = 'sparkle'
    s.textContent = SPARKLE_SHAPES[Math.floor(Math.random() * SPARKLE_SHAPES.length)]
    s.style.left = (x + Math.random() * 24 - 12) + 'px'
    s.style.top = (y + Math.random() * 24 - 12) + 'px'
    s.style.fontSize = (10 + Math.random() * 14) + 'px'
    document.body.appendChild(s)
    setTimeout(() => s.remove(), 1000)
  }
  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e

    // move wand
    // wandRef.current.style.left = x + 'px'
    // wandRef.current.style.top = y + 'px'
    // move wand
    wandRef.current.style.left = (x - 14) + 'px'
    wandRef.current.style.top = (y - 14) + 'px'
    wandRef.current.style.display = 'block'

    // sparkle trail
    spawnSparkle(x, y)
    moveEye(leftEyeRef, leftPupilRef, e)
    moveEye(rightEyeRef, rightPupilRef, e)
  }

  const handleMouseLeave = () => {
    wandRef.current.style.display = 'none'
  }

  return (
    <div className='bg-pink-200 flex justify-center items-center w-full h-full gap-3 cursor-none' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {/* wand cursor */}
      <div className='cursor-wand' ref={wandRef}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <line x1="14" y1="14" x2="44" y2="44"
            stroke="#a78bfa" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="14" y1="14" x2="42" y2="42"
            stroke="#a78bfa" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
          <polygon
            points="14,4 16.4,11 24,11 18,15.4 20.4,22.4 14,18 7.6,22.4 10,15.4 4,11 11.6,11"
            fill="#fff75e"
            stroke="#fff75e"
            strokeWidth="0.5"
            transform="rotate(23, 14, 14)"
          />
        </svg>
      </div>

      {/* Left eye */}
      <div className='relative'>
      <div className='relative w-20 h-20 bg-white rounded-[100%] flex justify-center items-center shadow-md z-10' ref={leftEyeRef}>
        {/* Pupil */}
          <div className='w-10 h-10 bg-black rounded-full flex justify-center items-center' ref={leftPupilRef} style={{ transition: 'transform 0.08s ease-out' }}>
          {/* Shine dot */}
          <div className='w-4 h-4 bg-white rounded-full self-start mt-1 ml-1'></div>
          <div className='w-2 h-2 bg-white rounded-full self-end mb-2 mr-1'></div>
        </div>
      </div>
        {/* blush */}
        <div className='absolute -bottom-3.75 left-0 w-10 h-5 bg-pink-300 rounded-[100%] opacity-60 z-0'></div>
      </div>

      {/* nose */}
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className='shrink-0 mt-10'>
        <path
          d="M4 8 Q15 26 26 8"
          stroke="#c4a0c4"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      
      {/* Right eye */}
      <div className='relative'>
      <div className='relative w-20 h-20 bg-white rounded-[100%] flex justify-center items-center shadow-md z-10' ref={rightEyeRef}>
        {/* Pupil */}
        <div className='w-10 h-10 bg-black rounded-full flex justify-center items-center' ref={rightPupilRef} style={{ transition: 'transform 0.08s ease-out' }}>
          {/* Shine dot */}
          <div className='w-4 h-4 bg-white rounded-full self-start mt-1 ml-1'></div>
          <div className='w-2 h-2 bg-white rounded-full self-end mb-2 mr-1'></div>
        </div>
       </div>
        {/* blush */}
        <div className='absolute -bottom-3.75 right-0 w-10 h-5 bg-pink-300 rounded-[100%] opacity-60 z-0'></div>
      </div>
    </div>
  )
}

export default EyeFollowingMouse