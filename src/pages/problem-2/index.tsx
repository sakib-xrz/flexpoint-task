import { useState } from "react";
import AddProductForm from "./components/AddProductForm";
import ProductList from "./components/ProductList";
import Container from "../../components/Container";

export interface Product {
  id: number;
  name: string;
  price: number;
}

export default function Problem2() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Apple", price: 1 },
    { id: 2, name: "Banana", price: 2 },
  ]);

  const addProduct = (product: Omit<Product, "id">) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { ...product, id: prevProducts.length + 1 },
    ]);
  };

  return (
    <Container>
      <h1>Product List</h1>
      <AddProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </Container>
  );
}
