import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../contants/colors";

interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Header;
