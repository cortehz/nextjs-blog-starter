import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Hero from "../components/Hero/Hero";
import Date from "../components/Date/date";
import Header from "../components/Header/Header";
import Image from "next/image";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headerHero}>
        <Hero />
      </section>
      <Layout home>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>OUR PRODUCTS</h2>
          <h3 className={utilStyles.headingThin}>FEATURED PRODUCTS</h3>
          <div class="product-container">
            <div class="box">
              <h4>
                LIQUID <br />
                BODYWASH
              </h4>
              <p>
                Enim ex exercitation exercitation fugiat excepteur aliquip sit
                dolor consectetur. Excepteur adipisicing sit nisi labore
                adipisicing deserunt nostrud ex in veniam sint elit.
              </p>
              <Link href="/products">
                <a className="button-all" style={{ marginRight: "auto" }}>
                  Add to cart{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21.796"
                    height="6.463"
                    viewBox="0 0 21.796 6.463"
                  >
                    <path
                      id="right-arrow"
                      d="M18.564,167.5l-.971.971,1.574,1.574H0v1.373H19.167l-1.574,1.574.971.971,3.232-3.232Z"
                      transform="translate(0 -167.5)"
                      fill="#2b2932"
                    />
                  </svg>
                </a>
              </Link>
            </div>
            <div class="box">
              <Image
                src="/images/bath.png"
                alt="Picture of a product"
                width={350}
                height={400}
              />
            </div>
          </div>

          <div class="product-container">
            <div class="box box-2">
              <Image
                src="/images/oil.png"
                alt="Picture of a product"
                width={400}
                height={400}
              />
            </div>
            <div class="box">
              <h4>
                GLORIOUS <br />
                BODY OIL
              </h4>
              <p>
                Enim ex exercitation exercitation fugiat excepteur aliquip sit
                dolor consectetur. Excepteur adipisicing sit nisi labore
                adipisicing deserunt nostrud ex in veniam sint elit.
              </p>
              <Link href="/products">
                <a className="button-all" style={{ marginRight: "auto" }}>
                  Add to cart{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21.796"
                    height="6.463"
                    viewBox="0 0 21.796 6.463"
                  >
                    <path
                      id="right-arrow"
                      d="M18.564,167.5l-.971.971,1.574,1.574H0v1.373H19.167l-1.574,1.574.971.971,3.232-3.232Z"
                      transform="translate(0 -167.5)"
                      fill="#2b2932"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <h3 className={utilStyles.headingLg}>Blog</h3>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
}
