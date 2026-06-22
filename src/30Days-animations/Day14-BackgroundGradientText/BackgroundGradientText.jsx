import "./BackgroundGradientText.css"
const BackgroundGradientText = () => {
  return (
    <div className="flex flex-col gap-10 py-20 px-20 w-full bg-[#fefefe]">
      {/* Top — full bg gradient banner */}
      <div className="w-full min-h-[40vh] flex items-center justify-center
      bg-[linear-gradient(135deg,#C4B5FD,#F9A8D4,#FCA5A5,#FDBA74)]
      bg-size-[300%_300%] animate-gradient rounded-3xl">
        <h1 className="text-9xl font-bold text-[#fefefe]">
          Bloom.
        </h1>
      </div>

      {/* Bottom — gradient text on light bg */}
      <div className="w-full min-h-[40vh] bg-[#fefefe] flex items-center justify-center">
        <h1
          className="text-9xl font-bold tracking-tight bg-clip-text text-transparent
          bg-[linear-gradient(135deg,#C4B5FD,#F9A8D4,#FCA5A5,#FDBA74)]
          bg-size-[300%_300%] animate-gradient px-4 pb-4 pt-6"
        >
          Bloom.
        </h1>
      </div>
    </div>
  )
}

export default BackgroundGradientText

// linear - gradient(135deg, #FCA5A5, #FDBA74, #FDE68A, #F9A8D4)
// bg-[linear-gradient(135deg,#C4B5FD,#F9A8D4,#BAE6FD,#A5F3D0)]