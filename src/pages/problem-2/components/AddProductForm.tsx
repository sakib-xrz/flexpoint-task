import { useState, FormEvent } from "react";

interface AddProductFormProps {
  addProduct: (product: { name: string; price: number }) => void;
}

export default function AddProductForm({ addProduct }: AddProductFormProps) {
  const [formData, setFormData] = useState({ name: "", price: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, price } = formData;
    if (!name || isNaN(parseFloat(price))) return;

    addProduct({ name, price: parseFloat(price) });
    setFormData({ name: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Product Price"
        value={formData.price}
        onChange={handleChange}
      />
      <button type="submit">Add Product</button>
    </form>
  );
}
