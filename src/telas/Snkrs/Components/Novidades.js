import React from "react";
import Texto from "../../../components/Texto";
import { StyleSheet } from "react-native";

export default function Novidades({ titulo }) {
  return<>
    <Texto style={styles.titulo}>{titulo}</Texto>
  </>
}

const styles = StyleSheet.create({
  titulo: {
    color: "#000000",
    fontSize: 24,
    textAlign: "center",
    marginTop: 40,
    marginVertical: 10
  }
})