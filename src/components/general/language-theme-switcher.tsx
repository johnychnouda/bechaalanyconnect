import React, { useContext } from "react";
// import ButtonLink from "../ui/button-link";
import { useRouter } from "next/router";
import { useAppTheme } from "@/hooks/use-app-theme";
// import { useTranslations } from "next-intl";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { SunIcon } from "@/assets/icons/sun.icon";
import { MoonIcon } from "@/assets/icons/moon.icon";
import { GlobalStateType } from "@/types/globalSettings.type";
import GlobalState from "@/utils/GlobalState";
import ButtonLink from "../ui/button-link";

export default function LanguageThemeSwitcher({ }) {

  const globalState = useContext<GlobalStateType>(GlobalState);

  const language = globalState?.generalData?.locale || {};


  const router = useRouter();


  const { theme, setTheme } = useAppTheme();
  const isMounted = useIsMounted();

  const isEnActive = router.locale === "en";

  const changeLocale = (locale: string) => {
    router.push(router.asPath, undefined, { locale });
  };



  if (!isMounted) return null;

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-[5px]">
        <ButtonLink
          onClick={() => changeLocale("en")}
          className={isEnActive ? "text-app-white" : "text-app-black"}
        >
          {language?.['en']?.['title'] || "EN"}
        </ButtonLink>
        <div className="bg-app-white h-[14px] w-[1.3px]" />
        <ButtonLink
          onClick={() => changeLocale("ar")}
          className={isEnActive ? "text-app-black" : "text-app-white"}
        >
          {language?.['ar']?.['title'] || "AR"}
        </ButtonLink>
      </div>
      {
        theme === "dark" ? (
          <SunIcon className="cursor-pointer" onClick={() => setTheme("light")} />
        ) : (
          <MoonIcon className="cursor-pointer" onClick={() => setTheme("dark")} />
        )
      }
    </div >
  );
}
