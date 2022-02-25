import fs from "fs"
import { Glob } from "glob"
import matter from "gray-matter"
import Link from "next/link"
import { Key, ReactChild, ReactFragment, ReactPortal } from "react"

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
        {posts.map((post: { filePath: string; data: { title: string } }) => (
          <li key={post.filePath}>
            <Link
              as={`/updates/${post.filePath
                .replace(/\.mdx?$/, "")
                .replace("./pages/updates/", "")}`}
              href={`/updates/[slug]`}
            >
              <a>{post.data.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  const updateDir = "./pages/updates"
  const gb = new Glob(updateDir + "/*.mdx", { sync: true })
  const posts = gb.found.map((filePath) => {
    const source = fs.readFileSync(filePath)
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return {
    props: {
      posts,
    },
  }
}

export default Index
