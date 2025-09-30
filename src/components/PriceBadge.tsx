interface PriceBadgeProps {
  price: string;
  className?: string;
}

const PriceBadge = ({ price, className = "" }: PriceBadgeProps) => {
  return (
    <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-bold text-lg shadow-lg ${className}`}>
      <span className="text-sm font-medium">PRICE</span>
      <span className="text-2xl">{price}</span>
    </div>
  );
};

export default PriceBadge;
