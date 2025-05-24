import { cn } from "@/lib/utils";

const DishesPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  return <span className={cn("", className)}>${value.toFixed(0)}</span>;
};

export default DishesPrice;
