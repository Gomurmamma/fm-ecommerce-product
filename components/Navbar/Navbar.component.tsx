import style from "./Navbar.module.scss";
import Link from "next/link";

type Props = {
  pageTitle: string;
};

function Navbar({ pageTitle }: Props): JSX.Element {
  return (
    <nav>
      <ul className={style.NavBar}>
        <li>Menu</li>
        <li>
          <Link href="/">
            <h1>{pageTitle}</h1>
          </Link>
        </li>
        <li>cart</li>
        <li>profile</li>
      </ul>
    </nav>
  );
}

export default Navbar;
