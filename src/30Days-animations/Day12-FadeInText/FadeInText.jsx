import "./FadeInText.css"
const FadeInText = () => {
    return (
        <div className="flex items-center justify-center w-full h-screen bg-[#fd9eb1]">
            <div className="text-4xl font-bold text-gray-900 flex gap-2">
                <span className="opacity-0 animate-fadeIn delay-100">Small</span>
                <span className="opacity-0 animate-fadeIn delay-300">animations,</span>
                <span className="opacity-0 animate-fadeIn delay-500">big</span>
                <span className="opacity-0 animate-fadeIn delay-700">impact.</span>
            </div>
        </div>
    );
};

export default FadeInText