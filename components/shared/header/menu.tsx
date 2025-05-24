import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toogle";
import Link from "next/link";
import { MenuIcon, SearchIcon, ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import UserButton from "./user-button";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="md:flex w-full max-w-xs gap-1">
        <Button variant="ghost" size="icon" className="hidden md:flex">
          <Link href="/search">
            <SearchIcon />
          </Link>
        </Button>
        <ModeToggle />
        <Button asChild variant="ghost" size="icon">
          <Link href="/cart">
            <ShoppingCart className="h-5 w-5" />
          </Link>
        </Button>
        <div className="hidden md:flex">
          <UserButton />
        </div>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle" asChild>
            {/* <EllipsisVertical /> */}
            <Button variant="secondary">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle />
            <Button asChild variant="ghost">
              <Link href="/cart">
                <ShoppingCart />
              </Link>
            </Button>
            <UserButton />
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
