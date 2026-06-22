import React, { useState } from 'react'
import "./LikeAnimation.css"

const LikeAnimation = () => {
  const [liked, setLiked] = useState(false)
  const [animate, setAnimate] = useState(false);
  const [flash, setFlash] = useState(false);
  const [hearts, setHearts] = useState([]);

  const handleLike = () => {
    const isLiking = !liked;
    setLiked(isLiking);

    if (isLiking) {
      setAnimate("like");
      setTimeout(() => setAnimate(false), 300);
      const newHearts = Array.from({ length: 7 }, (_, i) => ({
        id: Date.now() + i,
        x: (Math.random() - 0.5) * 120,
        y: 30 + Math.random() * 80,
      }));
      setHearts(newHearts);
      setTimeout(() => setHearts([]), 1500);
    } else {
      setAnimate("unlike");
      setTimeout(() => setAnimate(false), 300);
    }
  };

  return (
    <div className='like-btn-animation relative flex items-center justify-center bg-[#FFF5F7] w-full h-full'>

      <button className="like-btn relative" onClick={handleLike}>
        {/* Floating hearts */}
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="floating-heart"
            style={{ "--x": `${heart.x}px`, "--y": `${heart.y}px` }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#ff4da6">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.59C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </span>
        ))}
        <svg
          className={`cursor-pointer ${animate === "like" ? "heart bounce" :
              animate === "unlike" ? "heart unpop" :
                "heart"
            }`}
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill={liked ? "#ff1493" : "none"}
          stroke={liked ? "none" : "#ccc"}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.59C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </button>
    </div>
  )
}

export default LikeAnimation
