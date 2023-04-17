import { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "../component/Types/Type";

type UseProductsResult = {
  products: Product[];
  productInfo: {
    id: number;
    title: string;
    price: number;
    brand: string;
    thumbnail: string;
    category: string;
    rating: number;
    discountPercentage: number;
    description: string;

  }[];
};

const useProducts = (): UseProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productInfo, setProductInfo] = useState<
    UseProductsResult["productInfo"]
  >([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<{ products: Product[] }>(
          "https://dummyjson.com/products"
        );
        setProducts(response.data.products);
        const infoArray = response.data.products.map((product) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          brand: product.brand,
          thumbnail: product.thumbnail,
          description: product.description,
          rating: product.rating,
          discountPercentage: product.discountPercentage,
          category: product.category,
        }));
        setProductInfo(infoArray);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return { productInfo, products };
};

export default useProducts;
