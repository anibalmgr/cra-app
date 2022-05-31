export default function Input(props) {
  return (
    <input
      className={`rounded bg-content-light py-2 px-3  w-[90vw] max-w-sm sm:w-sm sm:self-auto ${
        props.icon
          ? "bg-search bg-no-repeat bg-[length:20px_20px] bg-[position:5%_50%] pl-12"
          : ""
      }`}
      id={props.id}
      name={props.name}
      type={props.type}
      onChange={props.onChange}
      value={props.value}
    />
  );
}
