import "./PressButton3D.css"

const PressButton3D = () => {
  return (
    <div className='flex items-center justify-center bg-[#E6F1F9] w-full h-full'>
      <button className='cursor-pointer text-[#042B4F] bg-[#bde0fe] shadow-[0px_10px_0px_#7BBAF1] py-4 px-6 rounded-xl font-semibold tracking-wide active:shadow-[0px_3px_0px_#7BBAF1] transition-all duration-100 ease-in-out active:translate-y-2'>
        Press me
      </button>
      {/* <button class="bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-100 ease-in-out
               shadow-[0_8px_0_#1d4ed8] hover:shadow-[0_10px_0_#1d4ed8] hover:-translate-y-[2px]
               active:shadow-none active:translate-y-[8px]">
        Click Me
      </button> */}
    </div>
  )
}

export default PressButton3D

// 042B4F
// 032B51
// 8cbce6
// 1e88e5