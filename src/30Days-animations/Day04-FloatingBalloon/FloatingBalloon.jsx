import "./FloatingBalloon.css";

const FloatingBalloon = () => {
	return (
		<div className="flex items-center justify-center h-full bg-yellow-300 w-full overflow-hidden">
			<div className="relative w-30 h-60 balloon-float">
				<div
					className="h-40 w-37 rounded-[50%_50%_50%_50%/45%_45%_55%_55%] cursor-pointer absolute bottom-0 left-1/2 -translate-x-1/2 origin-bottom bg-blue-700 shadow-[inset_7px_-10px_0_0_rgba(0,0,0,0.10)] 
                after:content-[''] after:absolute after:top-5 after:right-6 
                after:w-8 after:h-3 after:rounded-[100%] after:bg-white/40 
                after:rotate-[-140deg] z-10"
				></div>
				<div className="bg-blue-900 w-4 h-2 rounded-lg -bottom-1.5 absolute left-1/2 -translate-x-1/2 z-10"></div>
				<div className="bg-blue-700 w-4 h-3 -bottom-4 rounded-tl-full rounded-tr-full absolute left-1/2 -translate-x-1/2"></div>
				<div className="bg-gray-200 w-0.5 h-55 absolute top-full left-1/2 -translate-x-1/2 -z-10"></div>
			</div>
		</div>
	);
};

export default FloatingBalloon;
