import { useState, useEffect } from 'react'
import Link from "next/link"
import Article from '../components/Article'

export default function Home() {
  const [articles, setArticles] = useState({})

  useEffect(() => {
    if (localStorage) {
      const data = JSON.parse(localStorage.getItem("articles"));
      setArticles(data)
    }
  }, [])

  console.log(articles);

  return (
    <div className="flex flex-col px-5 pt-10">
      <div className="w-full">
        <Link href="/create-article">
          <button className="text-gray-900 text-center bg-green-500 px-8 py-3">Create New Article</button>
        </Link>
        <hr className="my-3" />
        <div>
          {
            articles.map(article => {
              return <Article title={article.title} content={article.content} />
            })
          }
        </div>
      </div>
    </div>
  )
}
