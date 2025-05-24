import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import Rating from "./rating";
import DishesPrice from "./dishes-price";

const DishesCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <div className="relative">
          <Link href={`/product/${product.slug}`}>
            <Image
              src={product.images[0]}
              alt={product.name}
              height={200}
              width={200}
              priority={true}
            ></Image>
          </Link>
          <div className="absolute -top-2 -right-2 w-10 h-10 bg-black text-white text-xs font-bold flex items-center justify-center rounded-full shadow-md">
            <DishesPrice value={Number(product.price)} className="text-xs" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-medium text-center">{product.name}</h2>
        </Link>
        <CardDescription className="text-center">
          {product.description}
        </CardDescription>
        <div className="gap-4 flex justify-center">
          <Rating value={Number(product.rating)} />
          {/* {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className="text-destructive">Out Of Stock</p>
          )} */}
        </div>
      </CardContent>
    </Card>
  );
};

export default DishesCard;
