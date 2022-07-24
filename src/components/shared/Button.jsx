import { BeatLoader } from "react-spinners";

export default function Button(props) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={`${
        props.secondary
          ? "bg-neutral-500 hover:bg-neutral-300"
          : "bg-orange-600 hover:bg-orange-400"
      } transition-colors rounded w-[90vw] max-w-sm sm:w-sm text-[rgb(255,255,255)] py-2 hover:drop-shadow self-center ${
        props.className ?? ""
      } ${props.isLoading && "flex justify-center"}`}
    >
      {props.isLoading ? <BeatLoader size={8} /> : props.children}
    </button>
  );
}
