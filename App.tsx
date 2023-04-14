import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Head from "./src/component/Head";
import CustomButton from "./src/component/CustomButton";
import React, { useState } from "react";
import AllProduct from "./src/screens/AllProduct";

import Favourites from "./src/screens/Favourites";
import { Product } from "./src/component/Types/Type";

export default function App() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);
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

      {isProduct ? (
        <AllProduct
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          favoriteProducts={favoriteProducts}
          setFavoriteProducts={setFavoriteProducts}
        />
      ) : (
        <Favourites
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          favoriteProducts={favoriteProducts}
          setFavoriteProducts={setFavoriteProducts}
        />
      )}
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
