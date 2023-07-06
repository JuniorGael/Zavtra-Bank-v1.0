import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

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
  subtitle: {
    fontSize: 14,
    fontWeight: 500,
  },
  
  footer: {
    borderTop: "1px solid grey",
    paddingTop: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
});

const FooterPdf = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.subtitle}>Zavtra Bank</Text>
    </View>
  )
}

export default FooterPdf