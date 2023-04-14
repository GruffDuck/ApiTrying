import { useState, useEffect } from 'react';
import axios from 'axios';

type Product = {
  id: number;
  title: string;
  price: number;
  brand: string;
  thumbnail: string;
};

type UseProductsResult = {
  products: Product[];
  productInfo: {
    id: number;
    title: string;
    price: number;
    brand: string;
    thumbnail: string;
  }[];
};

const useProducts = (): UseProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productInfo, setProductInfo] = useState<UseProductsResult['productInfo']>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<{ products: Product[] }>('https://dummyjson.com/products');
        setProducts(response.data.products);
        const infoArray = response.data.products.map((product) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          brand: product.brand,
          thumbnail: product.thumbnail,
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
