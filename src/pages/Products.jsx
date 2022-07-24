import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/shared/Icon";
import Input from "../components/shared/Input";
import Loading from "../components/shared/Loading";
import ProductCard from "../components/shared/ProductCard";
import Toast from "../components/shared/Toast";
import { useProducts } from "../queries/queries";

export default function Products() {
  const [filterProducts, setFilterProducts] = useState([]);
  const { data: products, isLoading, isError, isSuccess } = useProducts();

  function handleSearch(e) {
    const keyword = e.target.value;

    if (keyword !== "") {
      const result = products.filter((product) => {
        return (
          product.sn.toLowerCase().includes(keyword.toLowerCase()) ||
          product.product.toLowerCase().includes(keyword.toLowerCase()) ||
          product.location.toLowerCase().includes(keyword.toLowerCase()) ||
          product.status.toLowerCase().includes(keyword.toLowerCase())
        );
      });
      setFilterProducts(result);
    } else {
      setFilterProducts(products);
    }
  }

  useEffect(() => {
    if (isSuccess) {
      setFilterProducts(products);
    }
  }, [isSuccess, products]);

  if (isLoading) {
    return (
      <div className="h-screen w-screen">
        <Loading />
      </div>
    );
  }

  if (isError && !products) {
    return (
      <Toast message="Error loading your products, please reload the page" />
    );
  }

  if (isSuccess && products && filterProducts) {
    return (
      <div className="flex flex-col md:pl-24 w-full h-full px-4">
        <header className="flex flex-wrap flex-row-reverse justify-between w-full gap-2 z-10">
          <Link className="self-end" to="add">
            <Icon
              name="add"
              className="w-8 h-8 stroke-neutral-900 hover:stroke-neutral-800"
            />
          </Link>

          <Input icon onChange={handleSearch} />
        </header>
        <div className="flex flex-col sm:flex-row sm:flex-wrap h-full max-w-full gap-4 overflow-x-auto pt-4 pb-24 md:pb-4">
          {filterProducts.map((prod, i) => (
            <ProductCard
              key={`${prod.sn}`}
              sn={prod.sn}
              product={prod.product}
              location={prod.location}
              status={prod.status}
            />
          ))}
        </div>
      </div>
    );
  }
}
