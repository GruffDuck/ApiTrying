import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Metrics } from "../../Metrics";
import Head from "../component/Head";
import { Product } from "../component/Types/Type";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "./Tabs";

const Details = (props: StackScreenProps<RootStackParamList, "Details">) => {
  const item = props.route.params.product;
  const viewWidth = item.rating * Metrics.measure(10);
  return (
    <View style={styles.container}>
      <Head text="Ürün Detayları" />
      <View style={styles.productContainer}>
        <Image style={styles.image} source={{ uri: item.thumbnail }} />
        <Text style={styles.productTitle}>{item.title}</Text>
        <View style={styles.ratingView}>
          <View style={[styles.ratingContainer, { width: viewWidth }]}>
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.discount}>%{item.discountPercentage}</Text>
          <Text style={styles.discountText}>İNDİRİM</Text>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.priceTitle}> TL</Text>
        </View>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <TouchableOpacity style={styles.sepet}>
        <Text style={styles.button}>Sepete Ekle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7EAED",
    alignItems: "center",
  },
  productContainer: {
    backgroundColor: "white",
    width: Metrics.measure(320),
    height: "83%",
    top: Metrics.measure(20),
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
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
    top: Metrics.measure(10),
    right: Metrics.measure(30),
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
  },
  priceTitle: {
    position: "absolute",
    top: Metrics.measure(35),
    right: Metrics.measure(10),
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
  priceContainer: {
    position: "absolute",
    width: Metrics.measure(300),
    height: Metrics.measure(70),
    top: Metrics.measure(220),
    left: Metrics.measure(10),

    right: Metrics.measure(10),
    flexDirection: "row",
    borderColor: "#3E22EA",
    borderWidth: 1,
    borderRadius: 10,
  },
  ratingContainer: {
    position: "absolute",

    height: Metrics.measure(20),
    backgroundColor: "#3E22EA",
    borderRadius: 3,
  },
  rating: {
    position: "absolute",
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  ratingView: {
    position: "absolute",
    width: Metrics.measure(50),
    height: Metrics.measure(20),
    top: Metrics.measure(162),
    right: Metrics.measure(10),
    backgroundColor: "#B6AEE2",
    borderRadius: 3,
  },
  discount: {
    position: "absolute",
    top: Metrics.measure(10),
    left: Metrics.measure(15),
    fontSize: 30,
    fontWeight: "bold",
    color: "#3E22EA",
  },
  discountText: {
    position: "absolute",
    top: Metrics.measure(38),
    left: Metrics.measure(20),
    fontSize: 20,
    fontWeight: "bold",
    color: "#B6AEE2",
  },
  description: {
    top: Metrics.measure(20),
    fontSize: 15,
    fontWeight: "300",
    color: "#000",
  },
  sepet: {
    position: "absolute",
    width: Metrics.measure(250),
    height: Metrics.measure(35),
    bottom: Metrics.measure(70),
    backgroundColor: "#3E22EA",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  button: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
