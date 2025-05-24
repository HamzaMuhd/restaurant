import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";
import MenuList from "./menulist";
// import CategoryDrawer from "./category-drawer";

const Header = () => {
  return (
    <header className="w-full border-b ">
      <div className="wrapper flex-between">
        <div className="flex-start">
          {/* <CategoryDrawer /> */}
          <Link href="/" className="flex items-center gap-2 ml-4">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority={true}
              className="object-contain"
            />
            <span className="text-xl font-bold leading-none pt-6">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="hidden  md:flex flex-1 justify-center">
          <MenuList />
        </div>
        <div className="hidden md:block"></div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
