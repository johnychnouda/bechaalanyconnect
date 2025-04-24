import PageLayout from "@/components/ui/page-layout";
import { useAppTheme } from "@/hooks/use-app-theme";
import { useTranslations } from "next-intl";

export default function Home() {
  const { setTheme, theme } = useAppTheme();
  const t = useTranslations("common");

  return (
    <PageLayout className={`flex min-h-screen items-center justify-center`}>
      <p>{t("hello")}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change
      </button>
    </PageLayout>
  );
}
