import { cn, formatCurrency } from "@/lib/utils";

const DishesPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  return (
    <span className={cn("", className)}>
      {formatCurrency(value.toFixed(0))}
    </span>
  );
};

export default DishesPrice;
