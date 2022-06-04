import { Link } from "react-router-dom";
import { getUrl } from "../../utils/api";

function ProductImg({ product, className }) {
  const imgTag = product.replace(/\s+/g, "").toLowerCase();

  const imgSrc = getUrl(`images/${imgTag}`);

  return <img src={imgSrc} alt={imgTag} className={`object-contain ${className ?? ""}`} loading="lazy" />;
}

export default function ProductCard(props) {
  return (
    <Link to={`/products/${props.sn}/info`}>
      <div className="flex drop-shadow-xl h-auto max-h-40 items-center bg-neutral-0 w-[85vw] max-w-sm sm:h-full gap-3 py-4 px-3">

          <ProductImg className="h-24 w-24 md:w-36 md:h-36" product={props.product} />

        <div className="flex flex-col text-orange-600">
          <p>
            Product: <span className=" text-content">{props.product}</span>
          </p>
          <p>
            S/N: <span className="text-content">{props.sn}</span>
          </p>
          <p>
            Location: <span className="text-content">{props.location}</span>
          </p>
          <p>
            Status:{" "}
            <span
              className={
                props.status === "Active" ? "text-success" : "d text"
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
