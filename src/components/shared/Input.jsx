export default function Input(props) {
  return (
    <input
      className="rounded bg-content-light py-2 px-3  w-[90vw] max-w-sm sm:w-sm self-center"
      id={props.id}
      name={props.name}
      type={props.type}
      onChange={props.onChange}
      value={props.value}
    />
  );
}
