import LinkItem from "../pieces/LinkItem";
import NestedList from "../pieces/NestedList";

interface NavItemsTypes {
  id: number;
  title: string;
  path: string;
}

export default function Navbar() {
  const navItems: NavItemsTypes[] = [
    { id: 1, title: "الرئيسية", path: "/" },
    { id: 2, title: "من نحن", path: "/about-us" },
    { id: 3, title: "خدماتنا", path: "#" },
    { id: 4, title: "اعمالنا", path: "#" },
    { id: 5, title: "تواصل معنا", path: "#" },
  ];
  return (
    <ul className="hidden md:flex items-center gap-3">
      {navItems.map((item) => (
        <LinkItem
          key={item.id}
          title={item.title}
          path={item.path}
          LinkIsServices={
            item.id === 3 && item.title === "خدماتنا" ? true : false
          }
          nestedListContent={<NestedList />}
        />
      ))}
    </ul>
  );
}
