const ScalingButton = () => {
  return (
		<div>
			<button
				type="button"
				className="bg-amber-500 text-white rounded-4xl text-2xl py-3 px-6 font-medium hover:scale-105 hover:bg-linear-to-t from-orange-400 to-red-400 transition-all duration-350 ease-in-out hover:border-2 hover:border-orange-200 cursor-pointer"
			>
				Hover me
			</button>
		</div>
  );
}

export default ScalingButton
