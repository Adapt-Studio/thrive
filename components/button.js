export default function Button(props) {
  return (
    <a href={props.url}>
      <button className="bg-green-200 text-black dark:text-white hover:text-white dark:hover:text-black font-head text-2xl rounded-md shadow-md px-8 py-4">
        {props.text}
      </button>
    </a>
  )
}
