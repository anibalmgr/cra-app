export default function Toast({ message }) {
  return (
    <div className="fixed top-20 right-2 animate-enter h-24 w-48 bg-red-200 p-4 m-4 border-2 border-red-400 rounded-md text-sm">
      {message}
    </div>
  );
}
