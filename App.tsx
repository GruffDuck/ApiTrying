import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Head from "./src/component/Head";
import CustomButton from "./src/component/CustomButton";
import React, { useState } from "react";
import AllProduct from "./src/screens/AllProduct";

import Favourites, { Product } from "./src/screens/Favourites";

type ProductListProps = {
  allProducts: Product[];
  favoriteProducts?: Product[];
  setFavoriteProducts?: React.Dispatch<React.SetStateAction<Product[]>>;
  setAllProducts?: React.Dispatch<React.SetStateAction<Product[]>>;
};
export default function App(props: ProductListProps) {
  const [isProduct, setIsProduct] = useState(true);

  const handleProduct = () => {
    setIsProduct(!isProduct);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Head />
      <CustomButton
        style={[
          styles.allBtn,
          { backgroundColor: isProduct ? "#3E22EA" : "white" },
        ]}
        title="Tümünü Göster"
        titleStyle={[
          styles.titleStyle,
          { color: isProduct ? "white" : "black" },
        ]}
        onPress={() => handleProduct()}
      />
      <CustomButton
        style={[
          styles.favouriteBtn,
          { backgroundColor: !isProduct ? "#3E22EA" : "white" },
        ]}
        title="Favorileri Göster"
        titleStyle={[
          styles.titleStyle,
          { color: !isProduct ? "white" : "black" },
        ]}
        onPress={() => handleProduct()}
      />

      <AllProduct
        allProducts={props.allProducts}
        favoriteProducts={props.favoriteProducts}
      
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7EAED",
    alignItems: "center",
  },
  allBtn: {
    position: "absolute",
    width: "40%",
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
    top: 100,
    left: 42,
  },
  favouriteBtn: {
    position: "absolute",
    width: "40%",
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
    top: 100,
    right: 42,
  },
  titleStyle: {
    fontSize: 15,
    fontWeight: "400",
  },
});
