export default function GhostBtn(props) {
  return (
    <a href={props.url}>
      {" "}
      <button className="bg-white dark:bg-black rounded-md shadow-md font-head text-2xl text-green-200 px-8 py-4">
        {props.text}
      </button>
    </a>
  );
}
