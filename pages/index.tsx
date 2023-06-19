import { globSync } from 'glob'
import Link from "next/link"

function Index({ posts }) {
  return (
    <>
      <h1 id="locativegarden">locative.garden</h1>
      <p>This project is currently in-progress. Please come back later!</p>
      <p>
        You can follow by{" "}
        <a href="https://kck.st/3Ft2AHf">subscribing on Kickstarter</a> or
        watching{" "}
        <a href="https://github.com/icco/locative.garden">
          icco/locative.garden
        </a>
        .
      </p>

      <h2 id="updates">Updates</h2>

      <ul>
        {posts.map((post: { filePath: string; slug: string }) => (
          <li key={post.filePath}>
            <Link as={`/updates/${post.slug}`} href={`/updates/[slug]`}>
              <a>{post.slug}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  const updateDir = "./pages/updates"
  const posts = globSync(updateDir + "/*.mdx").map((filePath) => {
    return {
      filePath,
      slug: filePath.replace(/\.mdx?$/, "").replace("./pages/updates/", ""),
    }
  })

  return {
    props: {
      posts,
    },
  }
}

export default Index
