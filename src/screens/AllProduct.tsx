import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useMemo, useEffect } from "react";
import useProducts from "../Hooks/useProducts";
import { Metrics } from "../../Metrics";
import { FontAwesome } from "@expo/vector-icons";

type Product = {
  id: number;
  title: string;
  price: number;
  brand: string;
  thumbnail: string;
};
type ProductListProps = {
  allProducts: Product[];
  favoriteProducts: Product[];
};

const AllProduct = (props: ProductListProps) => {
  const { productInfo, products } = useProducts();
  const [fav, setFav] = useState<Product[]>([]);

  const addToFavorites = (item: Product) => {
    if (!fav.some((favItem) => favItem.id === item.id)) {
      setFav([...fav, item]);
    }
  };

  const isFavorite = (id: number) => {
    return fav.some((favItem) => favItem.id === id);
  };
  console.log(fav);
  return (
    <FlatList
      style={styles.flatList}
      showsVerticalScrollIndicator={false}
      data={productInfo}
      renderItem={({ item }) => (
        <View style={styles.productContainer}>
          <TouchableOpacity
            style={styles.fav}
            onPress={() => addToFavorites(item)}
          >
            <FontAwesome
              name="heart"
              size={22}
              color={isFavorite(item.id) ? "#ef233c" : "white"}
            />
          </TouchableOpacity>
          <Image style={styles.image} source={{ uri: item.thumbnail }} />
          <Text style={styles.productTitle}>{item.title}</Text>

          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.priceTitle}> TL</Text>
          <Text style={styles.brand}>{item.brand}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default AllProduct;
const styles = StyleSheet.create({
  flatList: {
    alignSelf: "center",
    left: Metrics.measure(20),
    width: "100%",
    height: "100%",
    top: Metrics.measure(60),
  },
  productContainer: {
    backgroundColor: "white",
    width: Metrics.measure(320),
    height: Metrics.measure(210),
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    position: "absolute",

    width: Metrics.measure(320),
    height: Metrics.measure(150),
    top: Metrics.measure(-10),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginVertical: 10,
    resizeMode: "contain",
  },
  productTitle: {
    position: "absolute",
    top: Metrics.measure(158),
    left: Metrics.measure(10),
    fontSize: 20,
    fontWeight: "bold",
  },
  brand: {
    position: "absolute",
    top: Metrics.measure(180),
    left: Metrics.measure(10),
    fontSize: 15,
    fontWeight: "300",
  },
  price: {
    position: "absolute",
    top: Metrics.measure(165),
    right: Metrics.measure(30),
    fontSize: 30,
    fontWeight: "bold",
    color: "#3E22EA",
  },
  priceTitle: {
    position: "absolute",
    top: Metrics.measure(180),
    right: Metrics.measure(10),
    fontSize: 15,
    fontWeight: "bold",
    color: "#3E22EA",
  },
  fav: {
    position: "absolute",
    top: Metrics.measure(10),
    right: Metrics.measure(10),
    width: Metrics.measure(30),
    height: Metrics.measure(30),
    borderRadius: 50,

    backgroundColor: "lightgrey",
    alignItems: "center",
    zIndex: 1,
    justifyContent: "center",
  },
});
