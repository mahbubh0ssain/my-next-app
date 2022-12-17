import { comment } from "postcss";

const comments = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div className="my-6 mx-5 border p-3">
          <h1 className="text-center"> Comment-{comment.id}</h1>
          <h2 key={comment.id}>{comment?.body}</h2>
        </div>
      ))}
    </div>
  );
};

export default comments;

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  return {
    props: {
      comments: data,
    },
  };
};
