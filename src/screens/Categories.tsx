import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Product, ProductListProps } from "../component/Types/Type";
import { Metrics } from "../../Metrics";
import useProducts from "../Hooks/useProducts";
import Head from "../component/Head";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const { productInfo } = useProducts();
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]); // Kategorileri saklamak için bir dizi
  const navigation = useNavigation();

  useEffect(() => {
    setAllProducts(productInfo);
    // Ürünlerdeki kategorileri kategoriler dizisine aktar
    const allCategories = productInfo.map((product) => product.category);
    const uniqueCategories = Array.from(new Set(allCategories));
    setCategories(uniqueCategories);
  }, [productInfo]);

  const Navigate = (catName: string) => {
    navigation.navigate("CategoriedProduct", { name: catName });
  };
  return (
    <>
      <Head text="Categories" />
      <FlatList
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoriesContainer}
            onPress={() => Navigate(item)}
          >
            <Text style={styles.categoriesTxt}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default Categories;
const styles = StyleSheet.create({
  flatList: {
    alignSelf: "center",
  },
  categoriesContainer: {
    backgroundColor: "white",
    height: Metrics.measure(30),
    width: Metrics.measure(330),
    borderRadius: Metrics.measure(10),
    margin: Metrics.measure(5),
  },
  categoriesTxt: {
    fontSize: Metrics.measure(14),
    fontWeight: "bold",
    color: "black",
    left: Metrics.measure(10),
    top: Metrics.measure(4),
  },
});
