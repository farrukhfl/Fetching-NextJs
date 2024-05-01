"use client";

import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log('products', products)

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);

        setIsLoading(false);
      });
  }, []);

  console.log('productssss', products.products[0].title)


  if (isLoading) 
    return <p>Loading....</p>;
  
  else if (!products) 
    return <p>No data found</p>;
  else {
  return (
    <div>
      <p>No data foundhhh</p>
      <h1 key={products.id}>{products.products.title}</h1>
    </div>
  );}
}
