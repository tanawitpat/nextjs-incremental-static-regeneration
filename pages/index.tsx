import Link from "next/link";

const PostLink = ({ id, title }: { id: String; title: String }) => (
  <Link href="/posts/[id]" as={`/posts/${id}`}>
    <a>{title}</a>
  </Link>
);

export default function Home() {
  return (
    <div>
      <h1>NextJS Incremental Static Regeneration</h1>
      <p>
        Post #1 and #2 was generated at build time. Post #3 will be genereted at
        run time. You can prove it by checking the updatedAt value of a post.
        The pages will be updated when it gets requests, at most once every 5
        seconds.
      </p>
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
    </div>
  );
}
