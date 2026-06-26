import React from 'react'
import "./ScrollingText.css"

const greetings = [
  { word: "Hello", lang: "English" },
  { word: "Bonjour", lang: "French" },
  { word: "Annyeong", lang: "Korean" },
  { word: "Ẹ n lẹ́", lang: "Yoruba" },
  { word: "Hola", lang: "Spanish" },
  { word: "Ni Hao", lang: "Chinese" },
  { word: "Ciao", lang: "Italian" },
  { word: "Ndewọ", lang: "Igbo" },
  { word: "Namaste", lang: "Hindi" },
  { word: "Aloha", lang: "Hawaiian" },
  { word: "Hallo", lang: "German" },
  { word: "Sannu", lang: "Hausa" },
  { word: "Hello", lang: "English" },
];

const ScrollingText = () => {
  return (
    <div className="flex justify-center items-center bg-[#F6D848] w-full h-full">
      <div className="h-25 overflow-hidden w-2xl">
        <div className="greet">
          {greetings.map((greet) => (
            <p
              key={greet.lang}
              className="text-white text-[80px] font-semibold text-center h-25 leading-25"
            >
              {greet.word}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScrollingText
