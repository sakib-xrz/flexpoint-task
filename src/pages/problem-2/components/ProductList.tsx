import { Product } from "../index";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <ul>
      {products.map(({ id, name, price }) => (
        <li key={id}>
          {name} - ${price.toFixed(2)}
        </li>
      ))}
    </ul>
  );
}
