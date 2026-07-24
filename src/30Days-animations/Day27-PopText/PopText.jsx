import "./PopText.css"

const PopText = () => {
    return (
        <div className='flex h-full w-full justify-center items-center bg-[#bfe3fa] pop-wrap'> 
            <div className='flex flex-col items-center'>
                <h1 className='fade-text text-4xl sticker font-semibold'>Make it</h1>
                <div className="flex pop-word sticker uppercase">
                    <span className='pop-text inline-block'>p</span>
                    <span className='pop-text inline-block'>o</span>
                    <span className='pop-text inline-block'>p</span>
                </div>
            </div>
        </div>
    )
}

export default PopText
