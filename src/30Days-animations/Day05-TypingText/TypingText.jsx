import React, {useEffect, useState} from 'react'
import "./TypingText.css"

const words = ["Amazing", "Beautiful", "Creative", "Talented", "Loved"];

const TypingText = () => {
	const [index, setIndex] = useState(0);

	 useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

	return (
		<div className="flex items-center justify-center h-screen bg-[#fdf2f8] w-full">
			<div className="flex items-baseline gap-4 text-5xl">
				<span className='text-gray-800'>You are</span>
				<span
					key={words[index]}
					className="typing-text text-[#e10e6d] font-semibold pb-1"
				>
					{words[index]}
				</span>
			</div>
		</div>
	);
}
export default TypingText
