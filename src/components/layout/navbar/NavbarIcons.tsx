// Components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Icons
import { Search, ShoppingBag, User2 } from "lucide-react";

// Next-Intl
import { useTranslations } from "next-intl";

const NavbarIcons = () => {
  const t = useTranslations("Layout.NavigationBar");
  return (
    <>
      <Button variant={"ghost"} size={"icon-xs"} aria-label={t("Alt.search")}>
        <Search className="size-5" strokeWidth={1.8} />
      </Button>

      <Button variant={"ghost"} size={"icon-xs"} aria-label={t("Alt.account")}>
        <User2 className="size-5" strokeWidth={1.8} />
      </Button>
      <Button
        variant={"ghost"}
        size={"icon-xs"}
        className="relative"
        aria-label={t("Alt.cart")}
      >
        <ShoppingBag className="size-5" strokeWidth={1.8} />
        <Badge className="absolute -top-1 -right-2 size-4 rounded-full">
          0
        </Badge>
      </Button>
    </>
  );
};

export default NavbarIcons;
