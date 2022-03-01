export default function Article({ title, content}) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>Date</p>
        <p>{content}</p>
      </div>
      <div>
        <button className="text-white text-center bg-blue-500 px-8 py-3">Edit</button>
        <button className="text-white text-center bg-red-500 px-8 py-3">Delete</button>
      </div>
    </div>
  )
}
