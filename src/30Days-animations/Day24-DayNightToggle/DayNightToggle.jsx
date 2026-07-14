import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";
import "./DayNightToggle.css";

const DayNightToggle = () => {
    const [isNight, setIsNight] = useState(false);

    return (
        <div className="w-full h-screen">
            <div className={`dn-scene ${isNight ? "dn-night" : "dn-day"}`}>
            <div className="dn-sky dn-sky-day" />
            <div className="dn-sky dn-sky-night" />
                <div className="dn-stars">
                    {Array.from({ length: 80 }).map((_, i) => (
                        <span
                            key={i}
                            className="dn-star"
                            style={{
                                top: `${Math.random() * 70}%`,
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 4}s`,
                            }}
                        />
                    ))}
                </div>

                {/* clouds */}
                <div className="dn-cloud dn-cloud-1" />
                <div className="dn-cloud dn-cloud-2" />
                <div className="dn-cloud dn-cloud-3" />
                <div className="dn-cloud dn-cloud-4" />
                <div className="dn-cloud dn-cloud-5" />
                <div className="dn-cloud dn-cloud-6" />

                {/* birds */}
                <div className="dn-birds">
                    <span className="dn-bird dn-bird-1" />
                    <span className="dn-bird dn-bird-2" />
                    <span className="dn-bird dn-bird-3" />
                </div>

                {/* sun / moon disc */}
                <div className="dn-disc-wrap">
                    <div className="dn-disc">
                        <div className="dn-layer dn-sun-layer">
                            <div className="dn-sun-rays" />
                        </div>
                        <div className="dn-layer dn-moon-layer">
                            <span className="dn-crater dn-crater-1" />
                            <span className="dn-crater dn-crater-2" />
                            <span className="dn-crater dn-crater-3" />
                        </div>
                    </div>
                </div>

                {/* toggle switch */}
                <button
                    className="dn-switch"
                    onClick={() => setIsNight((n) => !n)}
                    aria-pressed={isNight}
                    aria-label="Toggle day and night"
                >
                    <span className="dn-switch-track">
                        <span className="dn-switch-thumb">
                            {isNight ? <Moon size={14} /> : <Sun size={14} />}
                        </span>
                    </span>
                </button>
            </div>
        </div>
    );
}
export default DayNightToggle;