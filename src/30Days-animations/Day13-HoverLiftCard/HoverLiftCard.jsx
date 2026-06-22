import { Pencil, Palette, Layers } from 'lucide-react';

const cards = [
  {
    icon: Pencil,
    title: "Sketch",
    desc: "Rough out ideas fast with a pressure-sensitive brush that feels like real graphite.",
    color: "#7F77DD",
    bg: "#EEEDFE",
  },
  {
    icon: Palette,
    title: "Palette",
    desc: "Generate harmonious color schemes from a single reference photo in one tap.",
    color: "#E07398",
    bg: "#FBEAF0",
  },
  {
    icon: Layers,
    title: "Layers",
    desc: "Stack, mask, and blend unlimited layers without ever slowing your canvas down.",
    color: "#378ADD",
    bg: "#E6F1FB",
  },
];

const HoverLiftCard = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-50'>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 p-4 px-20">
        {cards.map(({ icon: Icon, title, desc, color, bg }, i) => (
          <div
            key={i}
            className="group bg-white border border-gray-200 rounded-xl p-6 cursor-pointer
            transition-all duration-300 ease-[cubic-bezier(0.2,0,0.1,1)]
            hover:-translate-y-2 hover:shadow-[2px_3px_12px_-2px_var(--card-shadow)] hover:border-gray-300"
            style={{ '--card-shadow': `${color}73` }}
          >
            <div
              className="w-11 h-11 rounded-lg flex items-center justify-center mb-4
              transition-transform duration-300 ease-[cubic-bezier(0.2,1.3,0.4,1)]
              group-hover:scale-110 group-hover:-rotate-3"
              style={{ background: bg }}
            >
              <Icon size={22} color={color} />
            </div>

            <h3 className="font-medium text-base mb-1.5">{title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>

            <div
              className="mt-3.5 flex items-center gap-1 text-sm font-medium
              opacity-0 -translate-x-1
              transition-all duration-200
              group-hover:opacity-100 group-hover:translate-x-0"
              style={{ color }}
            >
              Explore →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverLiftCard
