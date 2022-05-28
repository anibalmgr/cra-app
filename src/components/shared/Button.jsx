export default function Button(props) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={`${
        props.secondary
          ? "bg-content hover:bg-content-hover"
          : "bg-contrast hover:bg-contrast-hover"
      } rounded w-[90vw] max-w-sm sm:w-sm text-[rgb(255,255,255)] py-2 hover:drop-shadow self-center ${
        props.className ?? ""
      }`}
    >
      {props.children}
    </button>
  );
}
