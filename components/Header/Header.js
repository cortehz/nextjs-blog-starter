import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import headerStyles from "./header.module.scss";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

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
            <ul
              className={`${headerStyles.nav_link} ${
                showNav ? headerStyles.nav_link_show : ""
              }`}
            >
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
                  <a>
                    Shopping Cart{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shopping-cart"
                    >
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <span
            className={headerStyles.hamburger}
            onClick={() => {
              setShowNav(!showNav);
            }}
            style={{ justifyContent: `${showNav ? "flex-start" : "center"}` }}
          >
            {!showNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            )}
          </span>
        </nav>
      </header>
    </>
  );
};

export default Header;
