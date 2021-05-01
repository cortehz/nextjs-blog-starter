import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function Products() {
  return (
    <Layout>
      <Head>
        <title>Products</title>
      </Head>
      <h1>Product Page</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
