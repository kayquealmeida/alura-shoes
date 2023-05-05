import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({ style, children }) {
  let styleFamily = styles.texto;

  return <Text style={ [style, styleFamily] }>{ children }</Text>
}

const styles = StyleSheet.create({
  texto: {
    fontFamily: "ubuntu",
    fontWeight: "normal"
  }
});