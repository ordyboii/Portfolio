import { allPosts } from "~/.contentlayer/generated";

export default function WritingPage() {
  return (
    <section className='writing flow'>
      <h1>Writing</h1>
      <ul className='flow'>
        {allPosts.map(post => (
          <li key={post._id}>
            <a className='flow' href={post.url}>
              <h3>{post.title}</h3>
              <p>
                {new Date(post.date).toLocaleDateString("en-gb", {
                  dateStyle: "long"
                })}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
