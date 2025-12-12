import { cn } from "./utils";

const HighwayMarker = ({ children, className, variant = "default" }) => {
  const variants = {
    default: "highway-marker",
    exit: "highway-marker-exit",
    route: "highway-marker-route"
  };

  return (
    <div className={cn(variants[variant], className)}>
      <div className="highway-marker-inner">
        <div className="highway-marker-text">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HighwayMarker;