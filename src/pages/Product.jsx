import { Link, useParams } from "react-router-dom";
import Icon from "../components/shared/Icon";
import Loading from "../components/shared/Loading";
import ProductCard from "../components/shared/ProductCard";
import Tabs from "../components/shared/Tabs";
import Toast from "../components/shared/Toast";
import { useProduct } from "../queries/queries";

const links = [
  {
    name: "Info",
    link: "info",
  },
  {
    name: "Configure",
    link: "configure",
  },
  {
    name: "Reports",
    link: "reports",
  },
];

export default function Product() {
  let { id } = useParams();

  const { data, isLoading, isError } = useProduct(id);

  if (isLoading) {
    return (
      <div className="h-screen w-screen">
        <Loading />
      </div>
    );
  }

  if (isError && !data) {
    return (
      <Toast message="Error loading your products, please reload the page" />
    );
  }

  const { sn, product, location, status: productStatus } = data;

  return (
    <div className="flex md:pl-24 flex-col w-full h-full">
      <div className="flex gap-3 items-center pt-4 px-4">
        <Link to="/products">
          <Icon
            className="w-8 stroke-neutral-900 hover:stroke-neutral-800"
            name="back"
          />
        </Link>
        <p>{sn}</p>
      </div>
      <div className="px-4">
        <ProductCard
          sn={sn}
          product={product}
          location={location}
          status={productStatus}
        />
      </div>
      <Tabs links={links} />
    </div>
  );
}
