
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div className="w-12 h-12 rounded-full bg-cannabis-600/20 flex items-center justify-center mb-4">
        <Icon size={24} className="text-cannabis-400" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
