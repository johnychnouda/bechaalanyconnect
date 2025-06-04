import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Footer() {
  const t = useTranslations("footer");
  const [year] = useState(new Date().getFullYear());
  return (
    <footer className="bg-app-red flex items-center justify-center text-app-white font-bold text-[14px] py-2">
      {t("copyright", { year })}
    </footer>
  );
}
