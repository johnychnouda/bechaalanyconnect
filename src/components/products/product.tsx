import { type Product } from "@/types/product.type";
import Image from "next/image";
import React from "react";
import ButtonLink from "../ui/button-link";

type Props = {
  product: Product;
};
export default function Product({ product }: Props) {
  return (
    <ButtonLink
      href={`/products/${product.id}`}
      className="relative flex flex-col gap-3 overflow-hidden"
    >
      <div className="relative w-full h-[240px]">
        <Image
          src={product.image}
          alt={product.title}
          className="object-cover aspect-square rounded-[20px]"
          fill
        />
      </div>
      <p className="text-app-black dark:text-app-white text-[20px] font-semibold text-center">
        {product.title}
      </p>
    </ButtonLink>
  );
}
