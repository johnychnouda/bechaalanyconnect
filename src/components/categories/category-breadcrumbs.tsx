import { Category } from "@/types/category.type";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { generateCategoriesBreadcrumbItems } from "@/utils/generate-categories-breadcrumb-items.util";
import clsx from "clsx";

type Props = {
  category?: Category | null;
};

export default function CategoryBreadcrumbs({ category }: Props) {
  const t = useTranslations("categories");

  const breadcrumbItems = generateCategoriesBreadcrumbItems(category);

  return (
    <div className="flex items-center gap-2">
      <Link href="/" className="text-app-red font-semibold">
        {t("homepage")}
      </Link>
      {breadcrumbItems.length > 1 && (
        <span className="text-app-red dark:text-app-white">/</span>
      )}
      {breadcrumbItems.map((item) => (
        <>
          <Link
            href={`/categories/${item?.id}`}
            className={clsx(
              "font-semibold",
              item === breadcrumbItems[breadcrumbItems.length - 1]
                ? "text-app-black dark:text-app-white"
                : "text-app-red"
            )}
            key={item?.id}
          >
            {item?.title}
          </Link>
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
