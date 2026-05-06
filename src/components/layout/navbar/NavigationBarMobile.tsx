// Components
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NavigationBarMobile = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Button variant={"ghost"} size={"icon-xs"} asChild>
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Titulo</SheetTitle>
            <SheetDescription>Descrição</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavigationBarMobile;
