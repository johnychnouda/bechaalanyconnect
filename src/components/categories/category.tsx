import { type Category } from "@/types/category.type";
import Image from "next/image";
import React from "react";
import ButtonLink from "../ui/button-link";

type Props = {
  category: Category;
};

export default function Category({ category }: Props) {
  return (
    <ButtonLink
      href={`/categories/${category.id}`}
      className="relative flex flex-col gap-3 overflow-hidden"
    >
      <div className="relative w-full h-[240px]">
        <Image
          src={category.image}
          alt={category.title}
          className="object-cover rounded-[20px]"
          fill
        />
      </div>
      <p className="text-app-black dark:text-app-white text-[20px] font-semibold text-center">
        {category.title}
      </p>
    </ButtonLink>
  );
}
