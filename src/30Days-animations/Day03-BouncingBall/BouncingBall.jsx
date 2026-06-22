import "./BouncingBall.css";

const BouncingBall = () => {
	return (
		<div className="flex items-center justify-center h-full bg-purple-300 w-full pt-5">
			<div className="relative w-30 h-90">
				<div
					className="h-30 w-30 rounded-full cursor-pointer absolute bottom-0 left-0 origin-bottom bounce-up bg-pink-700 shadow-[inset_5px_-14px_0_0_rgba(0,0,0,0.10)] 
                after:content-[''] after:absolute after:top-3 after:right-5 after:w-5 after:h-5 after:rounded-full after:bg-white/10 z-10"
				></div>
				<div className="w-26 h-4 bg-black/20 absolute rounded-[100%] -bottom-1 left-1/2 -translate-x-1/2 blur-[0.5px] ball-shadow z-0"></div>
			</div>
		</div>
	);
};

export default BouncingBall;
