"use client";

// Next.js & Next-Intl
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// Components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Assets & Libraries
import Autoplay from "embla-carousel-autoplay";
import { productTestImg } from "@/assets";

const FeatureCarousel = () => {
  const t = useTranslations("Sections.FeaturedCollection");
  return (
    <Carousel
      className="w-full"
      opts={{ loop: true, align: "start" }}
      plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
    >
      <CarouselContent className="gap-0 -ml-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="pl-3 basis-4/5 sm:basis-2/5 lg:basis-1/4 relative group cursor-pointer"
          >
            <div className="relative aspect-1023/1537 overflow-hidden bg-gray-100">
              <Image
                src={productTestImg}
                fill
                alt="Featured product"
                sizes="(max-width: 640px) 80vw, (max-width: 768px) 236px, (max-width: 1024px) 268px, (max-width: 1280px) 227px, (max-width:1536px) 283px, 335px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            <h3 className="font-medium text-sm text-gray-900 group-hover:underline underline-offset-4 decoration-1 mt-4">
              The Essential Blazer
            </h3>

            <Link
              href={"/"}
              className=" inline-block font-semibold text-xs text-black/80 uppercase tracking-widest after:absolute after:inset-0 after:z-10"
            >
              {t("button")}
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};

export default FeatureCarousel;
