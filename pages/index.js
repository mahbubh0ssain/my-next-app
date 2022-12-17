import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Banner from "../Components/banner/banner";
import Footer from "../Components/Footer/Footer";
import Post from "../Components/Post/Post";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Banner />
      <div className="text-center">
        {posts?.map((post) => (
          <div key={post?.id} className="card bg-base-100 my-6 mx-6">
            <div className="card-body">
              <h2 className="card-title">{post?.title}</h2>
              <p>{post?.body}</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        ))}

        <Link href="/posts">
          <div className="btn btn-primary">See All</div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=3"
  );
  const data = await res.json();
  return {
    props: { posts: data },
  };
};
