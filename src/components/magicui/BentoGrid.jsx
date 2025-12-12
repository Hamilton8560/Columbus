import { cn } from "../utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  cta,
  features = [],
  highlight,
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-black-100 border border-black-50",
      "transform-gpu transition-all duration-300 hover:scale-[1.01]",
      className
    )}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    {background}
    
    <div className="relative z-10 flex flex-col gap-4 p-6">
      <div className="flex items-start justify-between">
        {Icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black-200 border border-black-50">
            <Icon className="h-6 w-6 text-white-50" />
          </div>
        )}
        {highlight && (
          <span className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full">
            {highlight}
          </span>
        )}
      </div>
      
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-sm text-white-50 leading-relaxed">{description}</p>
      </div>

      {features.length > 0 && (
        <ul className="space-y-2 mt-2">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-sm text-white-50 opacity-0 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <span className="text-green-400 mt-0.5">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>

    {cta && (
      <div className="relative z-10 p-6 pt-0">
        {typeof cta === 'string' ? (
          <button
            className={cn(
              "relative w-full px-4 py-3 rounded-lg font-medium",
              "bg-white text-black overflow-hidden",
              "transition-all duration-300",
              "hover:shadow-xl hover:shadow-white/10",
              "group/btn"
            )}
          >
            <span className="relative z-10">{cta}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-0 bg-white opacity-90 group-hover/btn:opacity-0 transition-opacity duration-300" />
            <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">
              {cta}
            </span>
          </button>
        ) : (
          cta
        )}
      </div>
    )}
  </div>
);