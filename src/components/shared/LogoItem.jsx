import { ReactComponent as Logomark } from "../../assets/images/logomark.svg";
import { ReactComponent as Logotype } from "../../assets/images/logotype.svg";

export default function LogoItem() {
  return (
    <div className="flex flex-col text-center justify-evenly items-center gap-3">
      <Logomark className="h-16" />
      <Logotype className="text-4xl md:text-7xl font-bold fill-black stroke-black w-40 h-auto" />
      <p className="text-2xl font-medium bold leading-none pt-1">ASCEND</p>
    </div>
  );
}
