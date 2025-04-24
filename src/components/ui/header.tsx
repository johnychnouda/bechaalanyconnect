import React, { PropsWithChildren } from "react";
import PageLayout from "./page-layout";
import { LogoIcon } from "@/assets/icons/logo.icon";
import { useAppTheme } from "@/hooks/use-app-theme";
import { LogoWhiteIcon } from "@/assets/icons/logo-white.icon";
import { useIsMounted } from "@/hooks/use-is-mounted";

export default function Header({ children }: PropsWithChildren) {
  const { theme } = useAppTheme();
  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <>
      <PageLayout className="py-3 px-12 flex w-full">
        {theme === "dark" ? <LogoWhiteIcon /> : <LogoIcon />}
      </PageLayout>
      {children}
    </>
  );
}
