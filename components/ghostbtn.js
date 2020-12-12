export default function GhostBtn(props) {
  return (
    <a rel="noopener noreferrer" target="_blank" href={props.url}>
      {" "}
      <button className="px-8 py-4 text-2xl text-green-200 bg-white shadow-md dark:bg-black rounded-md font-head">
        {props.text}
      </button>
    </a>
  );
}
