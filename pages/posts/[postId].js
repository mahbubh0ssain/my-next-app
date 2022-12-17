import { getRouteMatcher } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";
import { useRouter } from "next/router";

const PostDetail = ({ post }) => {
  const router = useRouter();
  const back = () => {
    router.push("/posts");
  };
  return (
    <div className="my-6">
      <h2 className="text-center my-2">Post id {post?.id}</h2>
      <div className="card w-96 h-full bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.body}</p>
          <div className="card-actions justify-start">
            {/* <Link href="/posts"> */}
            <button onClick={back} className="btn btn-xs btn-primary">
              Back
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
  );
  const data = await res.json();
  return {
    props: { post: data },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  const paths = posts?.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default PostDetail;
