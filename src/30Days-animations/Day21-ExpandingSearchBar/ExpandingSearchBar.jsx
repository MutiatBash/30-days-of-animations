import "./ExpandingSearchBar.css"

const ExpandingSearchBar = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center group cursor-pointer'>
                <div className='bg-blue-500 p-2 rounded-full w-fit shadow'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Search">
                        <circle cx="10" cy="10" r="7"></circle>
                        <line x1="21" y1="21" x2="15" y2="15"></line>
                    </svg>
                </div>
                <input
                    type="search"
                    placeholder="Search..."
                    className='outline-none border-b-2 border-blue-500 py-2 px-0 max-w-0 overflow-hidden opacity-0 transition-all ease-in-out duration-500 group-hover:max-w-40 group-hover:px-1 group-hover:ml-2 group-focus-within:ml-2 group-hover:opacity-100 group-focus-within:max-w-40 group-focus-within:px-1 group-focus-within:opacity-100'
                />
            </div>
        </div>
    )
}

export default ExpandingSearchBar
