import { Link } from "react-router-dom";
import { getUrl } from "../../utils/api";

function ProductImg({ type }) {
  const imgTag = type.replace(/\s+/g, "").toLowerCase();

  const imgSrc = getUrl(`images/${imgTag}`);

  return <img src={imgSrc} alt={imgTag} className="object-contain" />;
}

export default function ProductCard(props) {
  return (
    <Link to={`/products/${props.sn}`}>
      <div className="flex drop-shadow-xl h-auto bg-white w-[90vw] max-w-md gap-3 py-4 px-1">
        <div className="w-36">
          <ProductImg type={props.type} />
        </div>
        <div className="flex flex-col text-main">
          <p>
            S/N: <span className="text-content">{props.sn}</span>
          </p>
          <p>
            Type: <span className=" text-content">{props.type}</span>
          </p>
          <p>
            Location: <span className="text-content">{props.location}</span>
          </p>
          <p>
            Status:{" "}
            <span
              className={
                props.status === "Active" ? "text-success" : "text-contrast2"
              }
            >
              {props.status}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}
