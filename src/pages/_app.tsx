/* eslint-disable @typescript-eslint/no-explicit-any */
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TopBanner from "@/components/ui/top-banner";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export default function App({
  Component,
  pageProps,
  router,
  messages,
}: AppProps & { messages: any }) {
  const [queryClient] = useState(() => new QueryClient());
  const isRTL = router.locale === "ar";

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <NextIntlClientProvider
          locale={router.locale}
          timeZone="Asia/Beirut"
          messages={messages}
        >
          <main
            className={`${roboto.className} ${isRTL ? "rtl" : "ltr"}`}
            dir={isRTL ? "rtl" : "ltr"}
          >
            <TopBanner>
              <Header>
                <Component {...pageProps} />
                <Footer />
              </Header>
            </TopBanner>
          </main>
        </NextIntlClientProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

App.getInitialProps = async (context: any) => {
  return {
    messages: (await import(`../../translations/${context?.ctx?.locale}.json`))
      .default,
  };
};
