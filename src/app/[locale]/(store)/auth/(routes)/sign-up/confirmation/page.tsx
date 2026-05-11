"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const ConfirmationPage = () => {
  const t = useTranslations("Auth.Confirmation");

  return (
    <section className="section-container grid place-content-center">
      <div className="text-center flex flex-col gap-4 py-40 max-w-lg mx-auto">
        {/* Email icon */}
        <div className="mx-auto mb-4">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-neutral-900"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </div>

        <h1 className="tracking-tight font-medium text-3xl md:text-4xl text-pretty">
          {t("title")}
        </h1>
        <p className="leading-relaxed text-black/70 text-sm xl:text-base max-w-md mx-auto">
          {t("message")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-10 justify-center">
          <Button asChild>
            <Link href={"/"}>{t("backToHome")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConfirmationPage;
