import { useParams } from "react-router-dom";

export default function Product() {
  let { id } = useParams();
  console.log(id);
  return <div>Peli</div>;
}
