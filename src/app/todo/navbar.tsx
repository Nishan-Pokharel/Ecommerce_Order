import Button from "../../components/button";
import LogoImage from "../assets/image/react.svg";

export default function Navbar() {
  return (
    <nav className="py-3 px-4 flex justify-between items-center">
      <img src={LogoImage} alt="Logo" className="w-[40px]" />
      <div className="flex gap-3 items-center">
        <NavbarList />
        <Button title="Download App" />
      </div>
    </nav>
  );
}
function NavbarList() {
  const navList = [
    {
      text: "Home",
      path: "/home",
    },
    {
      text: "Product",
      path: "/product",
    },
  ];
  return (
    <ul className="flex gap-3">
      {navList.map((item) => {
        return (
          <li>
            <a href={item.path} className="hover:text-red-500">
              {item.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
