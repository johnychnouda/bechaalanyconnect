/* eslint-disable @typescript-eslint/no-explicit-any */
import { WhatsappWhiteIcon } from "@/assets/icons/whatsapp-white.icon";
import React, { PropsWithChildren } from "react";
import ButtonLink from "./button-link";
import { InstagramWhiteIcon } from "@/assets/icons/instagram-white.icon";
import { FacebookWhiteIcon } from "@/assets/icons/facebook-white.icon";
import { TiktokWhiteIcon } from "@/assets/icons/tiktok-white.icon";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { useAppTheme } from "@/hooks/use-app-theme";
import { SunIcon } from "@/assets/icons/sun.icon";
import { MoonIcon } from "@/assets/icons/moon.icon";
import { useIsMounted } from "@/hooks/use-is-mounted";

export default function TopBanner({ children }: PropsWithChildren) {
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
    <>
      <section className="flex bg-app-red py-2 px-12">
        <div className="flex justify-between items-center w-full">
          <div className="flex rtl:flex-row-reverse gap-2.5 items-center">
            <WhatsappWhiteIcon />
            <div className="text-app-white font-semibold text-[16px]">
              +961 81 708 706
            </div>
          </div>
        </div>
        <div className="flex rtl:flex-row-reverse gap-[15px] items-center">
          <ButtonLink>
            <InstagramWhiteIcon />
          </ButtonLink>
          <ButtonLink>
            <FacebookWhiteIcon />
          </ButtonLink>
          <ButtonLink>
            <TiktokWhiteIcon />
          </ButtonLink>
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
            <SunIcon
              className="cursor-pointer"
              onClick={() => setTheme("light")}
            />
          ) : (
            <MoonIcon
              className="cursor-pointer"
              onClick={() => setTheme("dark")}
            />
          )}
        </div>
      </section>
      {children}
    </>
  );
}
