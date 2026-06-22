import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$0",
    desc: "For solo devs trying things out.",
    features: ["1 project", "Community support", "1 GB storage"],
    featured: false,
  },
  {
    name: "Pro",
    price: "$24",
    desc: "For shipping production apps.",
    features: ["Unlimited projects", "Priority support", "50 GB storage", "CI/CD pipelines"],
    featured: true,
  },
  {
    name: "Team",
    price: "$79",
    desc: "For teams scaling together.",
    features: ["Everything in Pro", "SSO and audit logs", "500 GB storage", "Dedicated Slack channel"],
    featured: false,
  },
];

const PricingCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 items-start">
      {plans.map((plan, i) => (
        <div
          key={i}
          className={`bg-white rounded-xl p-6 cursor-pointer
            transition-all duration-300 ease-[cubic-bezier(0.2,0,0.1,1)]
            hover:-translate-y-1.5 hover:shadow-xl
            ${plan.featured ? "border-2 border-blue-400" : "border border-gray-200"}`}
        >
          {plan.featured && (
            <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-md mb-3">
              Most popular
            </span>
          )}

          <p className="text-base font-medium mb-1">{plan.name}</p>
          <p className="text-3xl font-medium">
            {plan.price}
            <span className="text-sm font-normal text-gray-500">/month</span>
          </p>
          <p className="text-sm text-gray-500 mt-1.5 mb-4">{plan.desc}</p>

          <ul className="space-y-1.5">
            {plan.features.map((f, j) => (
              <li key={j} className="flex items-start gap-2 text-sm">
                <Check size={16} className="text-green-600 mt-0.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;