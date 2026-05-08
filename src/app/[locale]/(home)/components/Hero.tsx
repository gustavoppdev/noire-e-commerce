// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Components & Assets
import { Button } from "@/components/ui/button";
import { heroImg } from "@/assets";

const Hero = () => {
  const t = useTranslations("Sections.Hero");
  return (
    <section className="min-h-[calc(100dvh-108px)] lg:min-h-[calc(100dvh-132px)] relative">
      <Image
        src={heroImg}
        alt=""
        fill
        className="object-cover aspect-1717/916 object-[65%_center] lg:object-top"
        sizes="100vw"
        priority
        fetchPriority="high"
        quality={100}
      />
      <div
        className="absolute inset-0 
      grid place-items-center justify-items-start backdrop-blur-[2px] md:backdrop-blur-none bg-linear-to-r from-white/50 via-white/60 to-transparent md:from-white/30 md:via-white/20 md:to-transparent"
      >
        <div className="section-container w-full">
          <div className="flex flex-col max-w-[500px] text-pretty">
            <p className="text-xs font-medium tracking-[0.15em] uppercase mb-4 text-black/80 xl:text-sm">
              {t("introduction")}
            </p>
            <h1 className="font-medium text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight text-black mb-6">
              {t.rich("title", {
                title1: (chunks) => (
                  <>
                    {chunks} <br />
                  </>
                ),
                title2: (chunks) => chunks,
              })}
            </h1>
            <p className="leading-relaxed text-black/90 mb-10 max-w-[450px] xl:text-lg">
              {t.rich("description", {
                description1: (chunks) => (
                  <>
                    {chunks} <br className="hidden sm:block" />
                  </>
                ),
                description2: (chunks) => chunks,
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="rounded-none h-[48px] px-8 text-xs font-bold tracking-widest uppercase w-full sm:w-[160px] bg-black text-white hover:bg-black/90">
                {t("buttons.women")}
              </Button>
              <Button
                variant={"outline"}
                className="rounded-none h-[48px] px-8 text-xs font-bold tracking-widest uppercase w-full sm:w-[160px] border border-black text-black bg-transparent hover:bg-black/5"
              >
                {t("buttons.men")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
