"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const AuthCodeError = () => {
  const t = useTranslations("Auth.AuthCodeError");

  return (
    <section className="section-container grid place-content-center ">
      <div className="text-center flex flex-col gap-4 py-40">
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
          <Button variant="outline" asChild>
            <Link href={"/auth/sign-up"}>{t("registerAgain")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AuthCodeError;
