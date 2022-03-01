import { useState, useEffect } from 'react'
import Link from "next/link"

export default function CreateArticle() {
  const [articleList, setArticleList] = useState([])
  const [article, setArticle] = useState({})

  useEffect(() => {
    if (localStorage) {
      localStorage.setItem("articles", JSON.stringify(articleList));
    }
  }, [articleList])

  const handleUpdateState = (field = "", value = "") => {
    setArticle(prevState => {
      return {...prevState, [field]: value}
    });
  };

  const handlePost = () => {
    const { title, content } = article
    setArticleList(prevState => {
      const newList = [...prevState, {title, content}]
      return newList
    })
  }

  console.log('article', article);
  console.log('articleList', articleList);

  return (
    <div className="flex flex-col px-5 pt-10">
      <Link href="/">
        <button className="mb-2">Back</button>
      </Link>
      <p className="mb-2">Title:</p>
      <input className="p-2 border border-gray-300 rounded mb-2" type="text" value={article.title} onChange={(event) => handleUpdateState("title", event.target.value)} />
      <p className="mb-2">Content:</p>
      <textarea className="p-2 border border-gray-300 rounded" cols="30" rows="10" value={article.content} onChange={(event) => handleUpdateState("content", event.target.value)}></textarea>
      <button className="text-gray-900 text-center bg-green-500 px-8 py-3 mt-2" onClick={handlePost}>Post</button>
    </div>
  )
}