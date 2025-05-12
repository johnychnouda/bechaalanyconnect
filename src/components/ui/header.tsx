import React, { PropsWithChildren, useContext } from "react";
import PageLayout from "./page-layout";
import { LogoIcon } from "@/assets/icons/logo.icon";
import { useAppTheme } from "@/hooks/use-app-theme";
import { LogoWhiteIcon } from "@/assets/icons/logo-white.icon";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { IconButton } from "./icon-button";
import { useTranslations } from "next-intl";
import ButtonLink from "./button-link";
import ProfileIcon from "@/assets/icons/profile.icon";
import { SearchIcon } from "@/assets/icons/search.icon";
import { BurgerIcon } from "@/assets/icons/burger.icon";
import { useAppMobileMenuStore } from "@/store/app-mobile-menu.store";
import { CloseIcon } from "@/assets/icons/close.icon";
import LanguageThemeSwitcher from "../general/language-theme-switcher";
import GlobalState from "@/utils/GlobalState";
import { GlobalStateType, menuItem } from "@/types/globalSettings.type";




export default function Header({ children }: PropsWithChildren) {
  const t = useTranslations("header");

  const globalState = useContext<GlobalStateType>(GlobalState);

  const menuItems = globalState?.generalData?.menu_items ;
  const generalData = globalState?.generalData?.settings;

  const { theme } = useAppTheme();

  const isMounted = useIsMounted();

  const { isOpen, toggle } = useAppMobileMenuStore();

  // TODO: Add auth
  const isAuthenticated = false;

  if (!isMounted) return null;

  return (
    <>
      <PageLayout className="sticky top-0 py-3 px-4 lg:px-12 flex justify-between items-center w-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] z-10">
        <ButtonLink href="/">
          {theme === "dark" ? <LogoWhiteIcon /> : <LogoIcon />}
        </ButtonLink>
        <div className="hidden items-center gap-8 lg:flex">
          {
            menuItems?.map((item: menuItem) => (
              <IconButton key={item.id} href={item.slug} icon={item?.full_path?.icon}>
                {item?.title || 'TEST'}
              </IconButton>
            ))
          }
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            {isAuthenticated ? (
              <ButtonLink href="/profile">
                <ProfileIcon />
              </ButtonLink>
            ) : (
              <ButtonLink
                href="/auth/register"
                className="text-app-white text-center bg-app-red py-2 px-6 rounded-full font-bold text-[16px]"
              >
                {generalData?.create_account_button}
              </ButtonLink>
            )}
          </div>
          <div className="flex items-center gap-6">
            <ButtonLink>
              <SearchIcon />
            </ButtonLink>
            <ButtonLink className="block lg:hidden" onClick={toggle}>
              {isOpen ? <CloseIcon /> : <BurgerIcon />}
            </ButtonLink>
          </div>
        </div>
      </PageLayout>
      {isOpen && (
        <PageLayout className="sticky top-[68px] bg-white z-[5] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] lg:hidden">
          <div className="flex flex-col gap-4 px-4 py-4">
            {isAuthenticated ? (
              <IconButton href="/" icon={<ProfileIcon />}>
                {t("profile")}
              </IconButton>
            ) : (
              <ButtonLink
                href="/auth/register"
                className="text-app-white bg-app-red py-2 px-6 text-center rounded-full font-bold text-[16px]"
              >
                {t("createAccount")}
              </ButtonLink>
            )}

            {
              menuItems?.map((item: menuItem) => (
                <IconButton key={item.id} href={item.slug} icon={item?.full_path?.icon}>
                  {item?.title || 'TEST'}
                </IconButton>
              ))
            }
          </div>
          <div className="flex py-2 bg-app-red px-4 justify-end">
            <LanguageThemeSwitcher />
          </div>
        </PageLayout>
      )}
      {children}
    </>
  );
}
