import "./NewtonsCradle.css";

const ballCount = 5;

const NewtonsCradle = () => {
    return (
        <div className="bg-yellow-200 min-h-screen w-full flex justify-center items-center">
            <div className="bg-transparent rounded-tr-3xl rounded-tl-3xl border-4 px-4 pb-12 border-gray-700 relative">
            <div className="flex justify-center items-center">
                {Array.from({ length: ballCount }).map((_, index) => (
                    <div className="pendulum-container relative w-10 h-50 origin-top z-20 -top-0.5">
                        <div className="bg-gray-600 w-0.5 h-full absolute left-[50%]"></div>
                        <div className="ball"></div>
                    </div>
                ))}
            </div>
            <div className="w-68 z-10 h-5 absolute bg-gray-800 left-[-9%] -bottom-5 rounded-tr-xl rounded-tl-xl"></div>
            </div>
        </div>

    );
}

export default NewtonsCradle;