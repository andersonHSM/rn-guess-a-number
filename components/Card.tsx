import React from "react";
import { View, StyleSheet } from "react-native";

interface CardProps {
  children?: any;
  style?: any;
}

const Card = (props: CardProps) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 5,
    padding: 20,
  },
});

export default Card;
