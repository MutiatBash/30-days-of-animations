import "./LowBatterryWarning.css"

const LowBatterryWarning = () => {
  return (
      <div className='flex justify-center items-center bg-white h-full w-full'>
          <svg width="135" height="96" viewBox="0 0 30 24" fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Almost empty battery, blinking">
              <path d="M3 7a2 2 0 0 1 2 -2h17a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-17a2 2 0 0 1 -2 -2v-10z" />
              <path d="M26 10v4" />
              <rect className="battery-blink" x="5" y="7.5" width="2.5" height="9" fill="#e5484d" stroke="none" />
          </svg>
      </div>
  )
}

export default LowBatterryWarning
