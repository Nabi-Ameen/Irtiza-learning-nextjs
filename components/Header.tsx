import Link from "next/link";

export function Header(props: any) {
  const menus = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/aboutus" },
    { name: "Contact Us", link: "/contactus" },
  ];

  return (
    <header className="flex items-center gap-4 mx-32 p-6">
      {menus.map((menu) => {
        return (
          <div>
            <Link
              href={menu.link}
              key={menu.name}
              className="mx-4 text-lg font-semibold"
            >
              {menu.name}
            </Link>
          </div>
        );
      })}
    </header>
  );
}
