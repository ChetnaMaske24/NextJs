//fetch data in client component--
// "use client";
// import { useEffect, useState } from "react";

// function ProductList() {
//   const [product, setProduct] = useState([]);
//   useEffect(async () => {
//     let data = await fetch("https://dummyjson.com/products");
//     data = await data.json();
//     console.log(data);
//     setProduct(data.products);
//   }, []);
//   return (
//     <div>
//       <h1>Product List</h1>
//       {product.map((item) => {
//         <h3>
//           product name :{item.title}, product price: {item.price}
//         </h3>;
//       })}
//     </div>
//   );
// }

// export default ProductList;

//-------------------------------------------------------------------------------------------------------------------------

//fetch data in server component--
"use client";

async function productlist() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

export default async function Page() {
  let products = await productlist();
  console.log(products);
  return (
    <div>
      <h1>Product List</h1>
      {products.map((item) => {
        <div>
          <h3>Name :{item.title}</h3>;
        </div>;
      })}
    </div>
  );
}
