import "./ChatTypingIndicator.css"

const ChatTypingIndicator = () => {
  const messages = [
    { id: 1, text: "Hi! How are you?", side: "right" },
    { id: 2, text: "Tomorrow is going to be great", side: "right" },
    { id: 3, text: "Just a little reminder, it does get better 🤍", side: "right" },
  ];

  return (
    <div className='flex items-center justify-center bg-[#FFF5F7] w-full h-full overflow-hidden'>
      <div className='w-80 mx-auto flex flex-col gap-3 justify-center h-full py-8'>
        {messages.map((msg) => (
          <div key={msg.id} className={`typed-msg flex flex-col ${msg.side === "right" ? "items-end" : "items-start"} gap-0.5`}>
            <div className={`text-[#4B1528] text-[13px] px-4 py-2.5 max-w-[70%] leading-normal ${msg.side === "right"
                ? "bg-[#FFB3D1] rounded-[18px_18px_2px_18px]"
                : "bg-[#FFE4EF] rounded-[18px_18px_18px_2px]"
              }`}>
              {msg.text}
            </div>
          </div>
        ))}

        {/* Typing indicator - left */}
        <div className='flex flex-col items-start gap-0.5 typing-bubble'>
          <div className='bg-[#ffddea] text-[#4B1528] text-sm px-4 py-3 rounded-[18px_18px_18px_2px] flex gap-1 items-center'>
            <span className='typing-dot'></span>
            <span className='typing-dot'></span>
            <span className='typing-dot'></span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ChatTypingIndicator
