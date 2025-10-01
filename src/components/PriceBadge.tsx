interface PriceBadgeProps {
  price: string;
  className?: string;
}

const PriceBadge = ({ price, className = "" }: PriceBadgeProps) => {
  return (
    <div className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent text-accent-foreground font-bold text-sm shadow-lg ${className}`}>
      <span className="text-xs font-medium">PRICE</span>
      <span className="text-base">{price}</span>
    </div>
  );
};

export default PriceBadge;
