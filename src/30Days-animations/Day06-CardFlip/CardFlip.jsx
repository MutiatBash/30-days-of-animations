import React, { useState } from "react";
import "./CardFlip.css";

const cards = [
	{
		color: "#C4C0F0",
		shadow: "#8f89d4",
		stroke: "#8f89d4",
		front: "Who was the world's first computer programmer?",
		back: "Ada Lovelace wrote the first published algorithm intended for a machine in the 1840s. She imagined computers could go beyond calculation into creativity — more than a century before modern computers were built.",
		icon: (s) => (
			<svg
				width="22"
				height="22"
				viewBox="0 0 24 24"
				fill="none"
				stroke={s}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<polyline points="16 18 22 12 16 6" />
				<polyline points="8 6 2 12 8 18" />
			</svg>
		),
	},
	{
		color: "#FFBCB5",
		shadow: "#e8857a",
		stroke: "#e8857a",
		front: "How did ‘debugging’ get its name?",
		back: "Grace Hopper found an actual moth trapped inside a computer relay in 1947. The incident popularized the term 'debugging,' which programmers still use today. She also built the first compiler in 1952.",
		icon: (s) => (
			<svg
				width="22"
				height="22"
				viewBox="0 0 24 24"
				fill="none"
				stroke={s}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M9 9c-.64.64-1.521.954-2.402 1.165A4 4 0 0 0 8 18h8a4 4 0 0 0 .802-7.835C15.521 9.954 14.64 9.64 14 9" />
				<path d="M9 9h6" />
				<path d="M9 9a3 3 0 1 1 6 0" />
				<line x1="12" y1="12" x2="12" y2="21" />
				<line x1="8" y1="15" x2="4" y2="15" />
				<line x1="16" y1="15" x2="20" y2="15" />
				<line x1="8" y1="20" x2="4" y2="21" />
				<line x1="16" y1="20" x2="20" y2="21" />
			</svg>
		),
	},
	{
		color: "#B3D9F7",
		shadow: "#6aaedf",
		stroke: "#6aaedf",
		front: "What does Hollywood have to do with Wi-Fi?",
		back: "Hollywood actress Hedy Lamarr co-invented a secret frequency-hopping communication system during WW2. Her work laid the foundation for Wi-Fi, Bluetooth and GPS.",
		icon: (s) => (
			<svg
				width="22"
				height="22"
				viewBox="0 0 24 24"
				fill="none"
				stroke={s}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M5 12.55a11 11 0 0 1 14.08 0" />
				<path d="M1.42 9a16 16 0 0 1 21.16 0" />
				<path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
				<circle cx="12" cy="20" r="1" fill={s} />
			</svg>
		),
	},
	{
		color: "#FFB3D1",
		shadow: "#e8749f",
		stroke: "#e8749f",
		front: "Who designed the first Macintosh icons?",
		back: "Susan Kare designed Apple's original icons, fonts, and interface elements. Her pixel art brought a human touch to technology, making computers intuitive and enjoyable for everyone.",
		icon: (s) => (
			<svg
				width="22"
				height="22"
				viewBox="0 0 24 24"
				fill="none"
				stroke={s}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<circle cx="13.5" cy="6.5" r=".5" fill={s} />
				<circle cx="17.5" cy="10.5" r=".5" fill={s} />
				<circle cx="8.5" cy="7.5" r=".5" fill={s} />
				<circle cx="6.5" cy="12.5" r=".5" fill={s} />
				<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
			</svg>
		),
	},
	{
		color: "#FFD4A3",
		shadow: "#e8a85a",
		stroke: "#e8a85a",
		front: "Who helped land Apollo 11 on the Moon?",
		back: "Margaret Hamilton led the MIT team that wrote the onboard flight software for NASA’s Apollo missions to help guide astronauts safely to the Moon. Her work was so influential she popularized the term 'software engineering.'",
		icon: (s) => (
			<svg
				width="22"
				height="22"
				viewBox="0 0 24 24"
				fill="none"
				stroke={s}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
				<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
				<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
				<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
			</svg>
		),
	},
	{
		// color: "#DDB8F0",
		// shadow: "#b07ed4",
		// stroke: "#b07ed4",
		color: "#C8F0EB",
		shadow: "#7dccc4",
		stroke: "#7dccc4",
		front: "Who is known as the Godmother of AI?",
		back: "Dr. Fei-Fei Li created ImageNet, a massive dataset of 14 million images that taught computers how to 'see'. Her work transformed computer vision and helped accelerate the modern AI revolution we experience today.",
		icon: (s) => (
			<svg
				width="22"
				height="22"
				viewBox="0 0 24 24"
				fill="none"
				stroke={s}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<rect x="2" y="3" width="20" height="14" rx="2" />
				<path d="M8 21h8" />
				<path d="M12 17v4" />
				<path d="M7 8h1" />
				<path d="M16 8h1" />
				<path d="M9.5 12a2.5 2.5 0 0 0 5 0V9.5" />
			</svg>
		),
	},
];

const CardFlip = () => {
	const [flipped, setFlipped] = useState({});

	const toggle = (i) => setFlipped((prev) => ({ ...prev, [i]: !prev[i] }));

	return (
		<div className="bg-[#f5f0e8] w-full h-full px-10 p-10 page-wrapper">
			<div className="page-title bg-[#c08497]">
				Women Who Built Tech
			</div>
			<div className="grid grid-cols-3 gap-6">
				{cards.map((card, i) => (
					<div
						key={i}
						className={`card-scene${flipped[i] ? " flipped" : ""}`}
						onClick={() => toggle(i)}
					>
						<div className="card-inner">
							<div
								className="card-front"
								style={{
									background: card.color,
									boxShadow: `5px 5px 0 ${card.shadow}`,
								}}
							>
								<div className="card-icon">
									{card.icon(card.stroke)}
								</div>
								<p className="card-q">{card.front}</p>
								<span className="flip-hint">tap to reveal →</span>
							</div>
							<div
								className="card-back"
								style={{ boxShadow: `5px 5px 0 ${card.shadow}` }}
							>
								<div className="card-icon">
									{card.icon(card.stroke)}
								</div>
								<p className="card-q">{card.back}</p>
								<span className="flip-hint">← tap to flip back</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CardFlip;
