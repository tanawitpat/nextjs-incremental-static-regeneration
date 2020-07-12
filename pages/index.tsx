import Link from "next/link";

const PostLink = ({ id, title }: { id: String; title: String }) => (
  <Link href="/posts/[id]" as={`/posts/${id}`}>
    <a>{title}</a>
  </Link>
);

export default function Home() {
  return (
    <ul>
      <li>
        <PostLink id="1" title="Post One" />
      </li>
      <li>
        <PostLink id="2" title="Post Two" />
      </li>
      <li>
        <PostLink id="3" title="Post Three" />
      </li>
    </ul>
  );
}
