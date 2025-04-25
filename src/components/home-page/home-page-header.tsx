import React from "react";
import ButtonLink from "../ui/button-link";
import { useTranslations } from "next-intl";
import { IconButton } from "../ui/icon-button";
import { WhatsappWhiteIcon } from "@/assets/icons/whatsapp-white.icon";
import Image from "next/image";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { useAppTheme } from "@/hooks/use-app-theme";

export default function HomePageHeader() {
  const t = useTranslations("homePage");
  const tCommon = useTranslations("common");

  const { theme } = useAppTheme();
  const isMounted = useIsMounted();

  return (
    <div className="flex flex-col w-full gap-3">
      <section className="flex flex-col lg:flex-row relative bg-app-off-white  w-full h-[80vh] overflow-hidden dark:bg-app-black">
        {isMounted &&
          (theme === "dark" ? (
            <Image
              src="/homepage-background.png"
              alt="Background Image"
              fill
              className="pointer-events-none"
            />
          ) : (
            <Image
              src="/homepage-background-light.png"
              alt="Background Image"
              fill
              className="pointer-events-none"
            />
          ))}
        <div className="flex flex-col gap-8 w-full self-center px-11 items-start overflow-hidden lg:w-1/2">
          <div className="flex flex-col py-16 lg:py-0">
            <p className="text-app-black dark:text-app-white text-[32px] font-semibold">
              {t("welcomeTo").toUpperCase()}
            </p>
            <p className="text-app-red text-[32px] font-semibold">
              {tCommon("appName").toUpperCase()}
            </p>
            <p className="text-app-black dark:text-app-white text-[16px] font-bold hidden lg:block">
              {t("welcomeToDescription")}
            </p>
          </div>
          <ButtonLink
            href="/categories"
            className="text-app-white bg-app-red py-2 px-6 text-center rounded-full font-bold text-[16px] hidden lg:block"
          >
            {t("viewCategories")}
          </ButtonLink>
        </div>
        <div className="flex relative self-end w-full h-full lg:w-2/3 lg:h-2/3">
          <Image
            src="/homepage-small-image.png"
            alt="Small Image"
            className="pointer-events-none"
            fill
            quality={100}
          />
        </div>
      </section>
      <section className="flex flex-col justify-between items-center px-12 gap-4 text-center lg:flex-row">
        <p className="font-bold">{t("joinWhatsapp")}</p>
        <IconButton
          icon={<WhatsappWhiteIcon />}
          href="https://wa.me/201010000000"
          className="text-app-white bg-app-whatsapp-green p-2 px-6 text-center rounded-full font-bold text-[16px]"
        >
          {t("whatsappChannel")}
        </IconButton>
      </section>
    </div>
  );
}
