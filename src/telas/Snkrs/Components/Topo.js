import React from "react";
import Texto from '../../../components/Texto';
import { Dimensions, Image, StyleSheet } from "react-native";
import topo from '../../../../assets/topo.png';
const width = Dimensions.get('screen').width;

export default function Topo({ titulo }) {
  return<>
    <Texto style={styles.titulo}>{ titulo }</Texto>
    <Image source={topo} style={[styles.topo, styles.shadowProp]}/>
  </>
}

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: 493 / 781 * width,
    shadowColor: "#f3f3f3",
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5
  },
  titulo: {
    backgroundColor: "#f6f6f6",
    width: "100%",
    fontSize: 24,
    paddingVertical: 10,
    textAlign: "center",
    color: "#000000",
  },
})
