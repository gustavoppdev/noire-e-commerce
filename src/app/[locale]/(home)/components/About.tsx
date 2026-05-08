// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Components & Assets
import { Button } from "@/components/ui/button";
import { aboutImg } from "@/assets";

const About = () => {
  const t = useTranslations("Sections.About");
  return (
    <section className="section-container lg:pr-0! my-16 lg:my-24 grid grid-cols-1 lg:grid-cols-7 bg-neutral-100 overflow-hidden">
      <div className="py-12 lg:py-20 flex flex-col justify-center gap-6 lg:gap-8 lg:col-span-3 lg:pr-12">
        <p className="text-xs font-semibold text-black/60 tracking-widest uppercase">
          {t("introduction")}
        </p>

        <h2 className="tracking-tight font-medium text-3xl md:text-4xl xl:text-5xl text-pretty">
          {t.rich("title", {
            title1: (chunks) => (
              <>
                {chunks} <br />
              </>
            ),
            title2: (chunks) => chunks,
          })}
        </h2>

        <p className="leading-relaxed text-black/70 max-w-md text-sm xl:text-base">
          {t("description")}
        </p>

        <Button className="mt-2 w-full sm:w-fit">{t("button")}</Button>
      </div>

      <div className="relative w-full min-h-[400px] lg:min-h-[500px] lg:col-span-4">
        <Image
          src={aboutImg}
          alt="About Noiré"
          fill
          sizes="(max-width: 640px) calc(100vw - 1rem), (max-width: 768px) 608px, (max-width: 1024px) 688px, (max-width: 1280px) 562px, (max-width:1536px) 685px, 832px"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
};

export default About;
