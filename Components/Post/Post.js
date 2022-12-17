import Link from "next/link";

const Post = ({ post }) => {
  const { id, title } = post;
  return (
    <div>
      <div className="card w-96 h-full bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-end">
            <Link href={`/posts/${id}`}>
              <button className="btn btn-xs btn-primary">See more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
