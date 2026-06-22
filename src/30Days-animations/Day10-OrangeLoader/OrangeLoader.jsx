import "./OrangeLoader.css"

const OrangeLoader = () => {
   return (
     <div className='flex flex-col items-center justify-center bg-[#f9c4c4] w-full h-full min-h-screen'>
       {/* The Orange Peel (Outer Boundary) */}
       <div className='relative flex justify-center items-center bg-[#f99836] w-38 h-38 rounded-full shadow-md'>

         {/* The Pith (Inner White/Cream Circle) */}
         <div className='relative bg-[#fdefc7] w-34 h-34 rounded-full flex items-center justify-center'>

           {/* Pulp Segment 1 (0 deg) */}
           <div className="orange-pulp absolute inset-0 flex items-center justify-center rotate-0">
             <span className='w-10 h-20 bg-amber-400 [clip-path:polygon(0%_0%,_100%_0%,_50%_100%)] rounded-t-full origin-bottom translate-y-[-24px]'></span>
           </div>

           {/* Pulp Segment 2 (45 deg) */}
           <div className="orange-pulp absolute inset-0 flex items-center justify-center rotate-45">
             <span className='w-10 h-20 bg-amber-400 [clip-path:polygon(0%_0%,_100%_0%,_50%_100%)] rounded-t-full origin-bottom translate-y-[-24px]'></span>
           </div>

           {/* Pulp Segment 3 (90 deg) */}
           <div className="orange-pulp absolute inset-0 flex items-center justify-center rotate-90">
             <span className='w-10 h-20 bg-amber-400 [clip-path:polygon(0%_0%,_100%_0%,_50%_100%)] rounded-t-full origin-bottom translate-y-[-24px]'></span>
           </div>

           {/* Pulp Segment 4 (135 deg) */}
           <div className="orange-pulp absolute inset-0 flex items-center justify-center rotate-135">
             <span className='w-10 h-20 bg-amber-400 [clip-path:polygon(0%_0%,_100%_0%,_50%_100%)] rounded-t-full origin-bottom translate-y-[-24px]'></span>
           </div>

           {/* Pulp Segment 5 (180 deg) */}
           <div className="orange-pulp absolute inset-0 flex items-center justify-center rotate-180">
             <span className='w-10 h-20 bg-amber-400 [clip-path:polygon(0%_0%,_100%_0%,_50%_100%)] rounded-t-full origin-bottom translate-y-[-24px]'></span>
           </div>

           {/* Pulp Segment 6 (225 deg) */}
           <div className="orange-pulp absolute inset-0 flex items-center justify-center rotate-225">
             <span className='w-10 h-20 bg-amber-400 [clip-path:polygon(0%_0%,_100%_0%,_50%_100%)] rounded-t-full origin-bottom translate-y-[-24px]'></span>
           </div>

           {/* Pulp Segment 7 (270 deg) */}
           <div className="orange-pulp absolute inset-0 flex items-center justify-center rotate-270">
             <span className='w-10 h-20 bg-amber-400 [clip-path:polygon(0%_0%,_100%_0%,_50%_100%)] rounded-t-full origin-bottom translate-y-[-24px]'></span>
           </div>

           {/* Pulp Segment 8 (315 deg) */}
           <div className="orange-pulp absolute inset-0 flex items-center justify-center rotate-315">
             <span className='w-10 h-20 bg-amber-400 [clip-path:polygon(0%_0%,_100%_0%,_50%_100%)] rounded-t-full origin-bottom translate-y-[-24px]'></span>
           </div>

           {/* Center Axis Node */}
           <div className='bg-[#fdefc7] absolute w-4 h-4 rounded-full'></div>
         </div>
       </div>
     </div>
  )
}

export default OrangeLoader
