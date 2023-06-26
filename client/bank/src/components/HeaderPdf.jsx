import React from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  Font,
  Link,
} from "@react-pdf/renderer";
import logo from "../assets/logo_min.png";

Font.register({
  family: "Poppins",
  fontWeight: 400,
  src: "fonts/Poppins-Regular.ttf",
});

Font.register({
  family: "Poppins",
  fontWeight: 500,
  src: "fonts/Poppins-Medium.ttf",
});

Font.register({
  family: "Poppins",
  fontWeight: 700,
  src: "fonts/Poppins-Bold.ttf",
});

const styles = StyleSheet.create({
  header: {
    borderBottom: "1px solid grey",
  },
  headerWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: "70px",
    height: "70px",
  },
  textRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 500,
  },
  adresses: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 20,
    gap: 5,
  },
  adressesItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  link: {
    fontSize: 14,
    textDecoration: "none",
  },
});

const HeaderPdf = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerWrapper}>
        <Image src={logo} alt="Zavtra Bank logo" style={styles.image} />
        <View style={styles.textRight}>
          <Text style={styles.title}>Zavtra Bank</Text>
          <Text style={styles.subtitle}>Together we build and</Text>
          <Text style={styles.subtitle}>Today and Tomorrow</Text>
        </View>
      </View>

      <View style={styles.adresses}>
        <View style={styles.adressesItem}>
          <Text style={styles.subtitle}>Linkedin : </Text>
          <Link src="#" style={styles.link}>
            Zavtra Bank
          </Link>
        </View>
        <View style={styles.adressesItem}>
          <Text style={styles.subtitle}>Site Web : </Text>
          <Link src="https://zavtrabank.com" style={styles.link}>
            https://zavtrabank.com
          </Link>
        </View>
        <View style={styles.adressesItem}>
          <Text style={styles.subtitle}>Contacts : </Text>
          <Text style={styles.subtitle}>
            +7 950 229-46-42 / +7 904 554-19-61 / +234 654 54 88 65
          </Text>
        </View>
      </View>
    </View>
  )
}

export default HeaderPdf