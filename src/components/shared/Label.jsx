export default function Label(props) {
  return (
    <label
      className="font-bold w-[90vw] max-w-sm sm:w-sm self-center"
      htmlFor="username"
    >
      {props.children}
    </label>
  );
}
