/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ButtonLink from "../ui/button-link";
import { useRouter } from "next/router";
import { useAppTheme } from "@/hooks/use-app-theme";
import { useTranslations } from "next-intl";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { SunIcon } from "@/assets/icons/sun.icon";
import { MoonIcon } from "@/assets/icons/moon.icon";

export default function LanguageThemeSwitcher() {
  const router = useRouter();

  const { theme, setTheme } = useAppTheme();
  const t = useTranslations("common");
  const isMounted = useIsMounted();

  const isEnActive = router.locale === "en";
  const pathname = router.pathname;
  const query = router.query;

  const parsedUrlQuery = new URLSearchParams(query as any);

  const newLocalePath = (locale: string) => {
    const newPath = `${pathname}${
      parsedUrlQuery.toString() ? `?${parsedUrlQuery.toString()}` : ""
    }`;

    return router.push(newPath, undefined, { locale });
  };

  if (!isMounted) return null;

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-[5px]">
        <ButtonLink
          onClick={() => newLocalePath("en")}
          className={isEnActive ? "text-app-white" : "text-app-black"}
        >
          {t("enLanguage")}
        </ButtonLink>
        <div className="bg-app-white h-[14px] w-[1.3px]" />
        <ButtonLink
          onClick={() => newLocalePath("ar")}
          className={isEnActive ? "text-app-black" : "text-app-white"}
        >
          {t("arLanguage")}
        </ButtonLink>
      </div>
      {theme === "dark" ? (
        <SunIcon className="cursor-pointer" onClick={() => setTheme("light")} />
      ) : (
        <MoonIcon className="cursor-pointer" onClick={() => setTheme("dark")} />
      )}
    </div>
  );
}
