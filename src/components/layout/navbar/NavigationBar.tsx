// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// Components
import Topbar from "../Topbar";
import NavigationBarMobile from "./NavigationBarMobile";
import NavbarIcons from "./NavbarIcons";
import { Button } from "@/components/ui/button";

// Constants
import { NavigationLinks } from "@/constants";

const NavigationBar = () => {
  const t = useTranslations("Layout.NavigationBar");
  return (
    <header>
      <Topbar />
      <nav className="section-container flex justify-between items-center py-4 lg:py-6">
        <Link
          href={"/"}
          className="tracking-widest text-xl lg:text-2xl font-medium "
        >
          NOIRÉ
        </Link>

        <ul className="hidden lg:flex items-center uppercase gap-4 ">
          {NavigationLinks.map((link) => (
            <li key={link.label}>
              <Button variant={"link"} className="font-semibold" asChild>
                <Link href={link.href}>{t(`Links.${link.label}`)}</Link>
              </Button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <NavbarIcons />
          <NavigationBarMobile />
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
