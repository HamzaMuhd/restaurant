import { menuItems } from "@/lib/constants";
import Link from "next/link";

const MenuList = () => {
  return (
    <div className="flex justify-center  w-full max-w-sm items-center gap-7">
      {menuItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="text-sm font-normal hover:text-primary transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default MenuList;
