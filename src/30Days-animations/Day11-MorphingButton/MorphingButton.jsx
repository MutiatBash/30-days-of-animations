const MorphingButton = () => {
  return (
    <div>
      <button className='group bg-yellow-400 py-5 px-5 rounded-full flex items-center justify-center cursor-pointer gap-0 hover:shadow-[4px_4px_15px_#f4d06f]'>
        <span className='text-3xl font-bold explore-text max-w-0 overflow-hidden group-hover:max-w-32 group-hover:pl-2 whitespace-nowrap
    transition-all duration-400 cubic-bezier(0.1, 0, 0.1, 1)'>Explore</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0 p-1 rounded-full"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default MorphingButton