import { FadeLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <FadeLoader size={150} />
    </div>
  );
}
