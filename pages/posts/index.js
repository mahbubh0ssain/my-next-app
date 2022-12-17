import Post from "../../Components/Post/Post";

const Posts = ({ posts }) => {
  return (
    <div className="mx-auto my-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await res.json();
  return {
    props: { posts: data },
  };
};
