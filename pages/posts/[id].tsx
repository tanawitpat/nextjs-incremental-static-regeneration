import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

const revalidateInterval = 5;

export default function PostPage({
  id,
  title,
  author,
  updatedAt,
}: {
  id: String;
  title: String;
  author: String;
  updatedAt: Date;
}) {
  const timeString = new Date(updatedAt).toLocaleTimeString();

  return (
    <div>
      <h1>{title}</h1>
      <p>Post ID: {id}</p>
      <p>Author: {author}</p>
      <p>
        Updated at <span>{timeString}</span>
      </p>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;

  const response = await fetch(`http://localhost:4000/posts/${id}`);
  const { title, author } = await response.json();

  return {
    props: {
      id,
      title,
      author,
      updatedAt: Date.now(),
    },
    unstable_revalidate: revalidateInterval,
  };
};
