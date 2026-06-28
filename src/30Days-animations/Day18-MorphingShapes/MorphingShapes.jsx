import "./MorphingShapes.css"

const MorphingShapes = () => {
    return (
        <div className='bg-blue-100 w-full h-full flex justify-center items-center'>
            <div className='morph-bg w-60 h-60 flex justify-center items-center rounded-full'>
                <div className='morph-shape w-50 h-50'></div>
            </div>
        </div>
    )
}

export default MorphingShapes
