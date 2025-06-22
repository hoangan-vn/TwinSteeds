import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export default function IndexPage({ params }: PageProps) {
  const { locale } = params;

  setRequestLocale(locale);

  const t = useTranslations("home");

  return <h1>{t("title")}</h1>;
}
