// Next-Intl
import { useTranslations } from "next-intl";

// Components
import FeatureCarousel from "./FeatureCarousel";

export const FeaturedCollection = () => {
  const t = useTranslations("Sections.FeaturedCollection");
  return (
    <section className="section-container py-16 lg:py-24">
      <h2 className="tracking-tight text-3xl md:text-4xl font-medium mb-8 md:mb-12">
        {t("title")}
      </h2>

      <FeatureCarousel />
    </section>
  );
};
