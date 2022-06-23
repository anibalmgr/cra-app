import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Dropdown from "../components/shared/Dropdown";
import Icon from "../components/shared/Icon";
import Input from "../components/shared/Input";
import Loading from "../components/shared/Loading";
import ProductCard from "../components/shared/ProductCard";
import Toast from "../components/shared/Toast";
import { fetchProducts } from "../api/productsAPI";

export default function Products() {
  const [filterProducts, setFilterProducts] = useState([]);
  const { data, status } = useQuery("products", fetchProducts);

  function handleSearch(e) {
    const keyword = e.target.value;
    console.log(keyword);

    if (keyword !== "") {
      const result = data.products.filter((product) => {
        return (
          product.sn.toLowerCase().includes(keyword.toLowerCase()) ||
          product.type.toLowerCase().includes(keyword.toLowerCase()) ||
          product.location.toLowerCase().includes(keyword.toLowerCase()) ||
          product.status.toLowerCase().includes(keyword.toLowerCase())
        );
      });
      console.log(result);
      setFilterProducts(result);
    } else {
      setFilterProducts(data.products);
    }
  }

  useEffect(() => {
    if (status === "success") {
      setFilterProducts(data.products);
    }
  }, [status, data]);

  if (status === "loading") {
    return (
      <div className="h-screen w-screen">
        <Loading />
      </div>
    );
  }

  if (status === "error" && !data) {
    return (
      <Toast message="Error loading your products, please reload the page" />
    );
  }

  if (status === "success" && data && filterProducts) {
    return (
      <div className="flex flex-col md:pl-24 w-full h-full px-4">
        <header className="flex flex-wrap flex-row-reverse justify-between w-full gap-2 z-10">
          <Link className="self-end" to="add">
            <Icon name="add" className="w-8 h-8 stroke-neutral-900 hover:stroke-neutral-800" />
          </Link>

          <Input icon onChange={handleSearch} />
        </header>
        <div className="flex flex-col gap-2 pt-14 pb-2 z-10 w-full justify-start">
          <div className="flex gap-2 w-[90vw] max-w-sm sm:w-sm">
            <Dropdown
              title="Location"
              type="location"
              list={filterProducts.map((p) => p.location)}
            />
            <Dropdown
              title="Product"
              product="product"
              list={filterProducts.map((p) => p.product)}
            />
          </div>
        </div>
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

// const [search, setSearch] = useState("");
// const [locationsFilter, setLocationsFilter] = useState([]);
// const [typesFilter, setTypesFilter] = useState([]);
// function handleSearch(e) {
//   setSearch(e.target.value);
// }

// function multiFilterProducts() {
//   const filterProducts = data.products;
//   if (search !== "" || locationsFilter !== [] || typesFilter !== []) {
//     if (search !== "") {
//       const result = data.products.filter((product) => {
//         return (
//           product.sn.toLowerCase().includes(search.toLowerCase()) ||
//           product.type.toLowerCase().includes(search.toLowerCase()) ||
//           product.location.toLowerCase().includes(search.toLowerCase()) ||
//           product.status.toLowerCase().includes(search.toLowerCase())
//         );
//       });
//       filterProducts = result;
//       if (locationsFilter !== []) {
//         const result = locationsFilter.forEach((location) => {
//           filterProducts.filter((product) => {
//             return product.location.toLowerCase().includes(location);
//           });
//           filterProducts = result;
//         });
//       }
//       if (typesFilter !== []) {
//         const result = typesFilter.forEach((type) => {
//           filterProducts.filter((product) => {
//             return product.type.toLowerCase().includes(type);
//           });
//         });
//         filterProducts = result;
//       }
//     }
//     setFilterProducts(filterProducts);
//   } else {
//     setFilterProducts(data.products);
//   }
// }

// function handleLocation(e) {
//   const { value, checked } = e.target;
//   if (checked) {
//     const newLocations = [...value, ...newLocations];
//     setLocationsFilter(newLocations);
//   } else if (!checked) {
//     const newLocations = locationsFilter.filter((loc) => loc !== value);
//     setLocationsFilter(newLocations);
//   }
// }

// function handleType(e) {
//   const { value, checked } = e.target;
//   if (checked) {
//     const newTypes = [...value, ...newTypes];
//     setTypesFilter(newTypes);
//   } else if (!checked) {
//     const newTypes = typesFilter.filter((typ) => typ !== value);
//     setTypesFilter(newTypes);
//   }
//   console.log(typesFilter);
// }
