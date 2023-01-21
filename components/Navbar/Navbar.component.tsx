import style from "./Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={style.Navbar}>
      <ul>
        <li>Menu</li>
        <li>
          <Link href="/">
            <h1>sneakers</h1>
          </Link>
        </li>
        <li>cart</li>
        <li>profile</li>
      </ul>
    </nav>
  );
};

export default Navbar;
