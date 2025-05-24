import { Product } from "@/types";
import DishesCard from "./dishes-card";

const SpecialDishes = ({
  data,
  title,
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;
  return (
    <section>
      <div className="my-10">
        <h2 className="h2-bold text-7xl mb-4 flex justify-center">{title}</h2>
        <p className="max-w-md text-center mx-auto text-gray-600 my-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
        {data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {limitedData.map((product: Product) => (
              <DishesCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div>
            <p>No products found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SpecialDishes;
