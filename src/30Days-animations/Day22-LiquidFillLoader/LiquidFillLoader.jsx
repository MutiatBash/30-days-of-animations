import React, { useEffect, useRef, useState } from 'react'
import "./LiquidFillLoader.css"

const LiquidFillLoader = () => {
    const [percent, setPercent] = useState(0)
    const waterRef = useRef(null)
    const loaderRef = useRef(null)

    useEffect(() => {
        const duration = 4000
        let start = performance.now()
        let ascending = true
        let frame

        const animate = (time) => {
            let elapsed = time - start

            if (elapsed >= duration) {
                start = time
                ascending = !ascending
                elapsed = 0
            }

            const t = elapsed / duration

            // ease-out: starts fast, slows toward the end 
            const eased = -(Math.cos(Math.PI * t) - 1) / 2

            const value = ascending ? eased * 100 : 100 - eased * 100

            setPercent(Math.round(value))

            let topBefore, topAfter

            if (value <= 20) {
                const progress = value / 20;
                topBefore = -237 + progress * 30;
                topAfter = -232 + progress * 21;
            }
            else if (value >= 85) {
                const progress = (value - 85) / 15
                topBefore = -206 - progress * 22
                topAfter = -210 - progress * 15
            } else {
                topBefore = -206
                topAfter = -210
            }
            if (value >= 99) {
                topBefore = -300
                topAfter = -300
            }
            const offset = 100 - value
            topBefore = topBefore + offset
            topAfter = topAfter + offset

            loaderRef.current?.style.setProperty('--top-before', `${topBefore}%`)
            loaderRef.current?.style.setProperty('--top-after', `${topAfter}%`)

            frame = requestAnimationFrame(animate)
        }
        frame = requestAnimationFrame(animate)

        return () => cancelAnimationFrame(frame)
    }, [])

    return (
        <div className="flex justify-center items-center w-full h-full bg-[#f6ea7e]">
            <div className="loader" ref={loaderRef}>
                <div
                    className="water"
                    ref={waterRef}
                    style={{ transform: `translateY(${100 - percent}%)` }}

                >
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span></div>
                <p className="loading-text">{percent}%</p>
            </div>
        </div>
    )
}

export default LiquidFillLoader