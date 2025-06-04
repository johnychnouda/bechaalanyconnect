import { Category } from "@/types/category.type";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { generateCategoriesBreadcrumbItems } from "@/utils/generate-categories-breadcrumb-items.util";
import clsx from "clsx";
import { Product } from "@/types/product.type";
import ButtonLink from "../ui/button-link";

type Props = {
  category?: Category | null;
  product?: Product | null;
};

export default function CategoryBreadcrumbs({ category, product }: Props) {
  const t = useTranslations("categories");

  const breadcrumbItems = generateCategoriesBreadcrumbItems(category, product);

  return (
    <div className="flex items-center gap-2">
      <Link href="/" className="text-app-red font-semibold">
        {t("homepage")}
      </Link>
      {breadcrumbItems.length > 1 && (
        <span className="text-app-red dark:text-app-white">/</span>
      )}
      {breadcrumbItems.map((item, index) => (
        <>
          <ButtonLink
            href={
              index === breadcrumbItems.length - 1
                ? undefined
                : `/categories/${item?.id}`
            }
            className={clsx(
              "font-semibold",
              index === breadcrumbItems.length - 1
                ? "text-app-black dark:text-app-white"
                : "text-app-red"
            )}
            key={item?.id}
          >
            {item?.title}
          </ButtonLink>
          {item !== breadcrumbItems[breadcrumbItems.length - 1] && (
            <span className="text-app-red dark:text-app-white font-semibold">
              /
            </span>
          )}
        </>
      ))}
    </div>
  );
}
