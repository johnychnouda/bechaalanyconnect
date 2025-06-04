import { Url } from "next/dist/shared/lib/router/router";
import React from "react";
import ButtonLink from "./button-link";
import { useTranslations } from "next-intl";
import clsx from "clsx";

type Props<T = unknown> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  label?: string;
  viewMoreHref?: Url;
  itemsContainerClassName?: string;
};

export default function PageGrid<T>({
  items,
  renderItem,
  label,
  viewMoreHref,
  itemsContainerClassName,
}: Props<T>) {
  const t = useTranslations("common");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        {label && (
          <p className="text-app-red text-[20px] sm:text-[36px] font-semibold">
            {label.toUpperCase()}
          </p>
        )}
        {viewMoreHref && (
          <ButtonLink
            href={viewMoreHref}
            className="text-app-red font-semibold text-[16px] sm:text-[20px] underline"
          >
            {t("viewMore").toUpperCase()}
          </ButtonLink>
        )}
      </div>
      <div
        className={clsx(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
          itemsContainerClassName
        )}
      >
        {items.map(renderItem)}
      </div>
    </div>
  );
}
