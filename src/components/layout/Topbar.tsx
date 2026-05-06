import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

const Topbar = () => {
  const t = useTranslations("Layout.Topbar");
  return (
    <div className="bg-black text-white text-center py-2 text-xs text-pretty font-normal flex items-center justify-between sm:justify-center sm:gap-8 px-8 sm:px-4 lg:text-sm lg:py-3">
      <Button variant={"ghost"} size={"icon-xs"}>
        <ChevronLeft className="size-3 lg:size-4" />
      </Button>
      <p className="">{t("freeShipping")}</p>
      <Button variant={"ghost"} size={"icon-xs"}>
        <ChevronRight className="size-3 lg:size-4" />
      </Button>
    </div>
  );
};

export default Topbar;
