import Link from "next/link";
import Image from "next/image";
import headerStyles from "./header.module.scss";

const Header = () => {
  return (
    <>
      <header className={headerStyles.header}>
        <nav className={headerStyles.nav}>
          <div className={headerStyles.container}>
            <Link href="/">
              <Image
                src="/images/logo.svg" // Route of the image file
                height={50} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Your Name"
              />
            </Link>
            <ul className={headerStyles.nav_link}>
              <li className="nav_links">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="nav_links">
                <Link href="/products">
                  <a>Products</a>
                </Link>
              </li>
              <li className="nav_links">
                <Link href="#contact">
                  <a>Contact</a>
                </Link>
              </li>
              <li className="nav_links">
                <Link href="/cart">
                  <a>Shopping Cart</a>
                </Link>
              </li>
            </ul>{" "}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
