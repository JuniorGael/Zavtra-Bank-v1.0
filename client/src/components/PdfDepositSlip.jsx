import React, { useEffect } from 'react'
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import HeaderPdf from './HeaderPdf';
import FooterPdf from './FooterPdf';

Font.register({
  family: "Poppins",
  fontWeight: 400,
  src: "assets/fonts/Poppins-Regular.ttf",
});

Font.register({
  family: "Poppins",
  fontWeight: 500,
  src: "assets/fonts/Poppins-Medium.ttf",
});

Font.register({
  family: "Poppins",
  fontWeight: 700,
  src: "assets/fonts/Poppins-Bold.ttf",
});

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    letterSpacing: "0.6px",
    fontSize: 12,
    fontWeight: 400,
    fontFamily: "Poppins",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 500,
  },
  
  
  
  
  body: {
    flex: "1 1 100%",
  },
  titleWrapper: {
    marginTop: 10,
    textAlign: "center",
  },
  bodyTitle: {
    fontSize: 18,
    fontWeight: 700,
    textDecoration: 'underline',
  },
  content: {
    lineHeight: 1.8,
    textAlign: "justify",
  },
  formWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  textData: {
    textDecoration: 'underline',
    fontWeight: 400,
  },
  textL: {
    textAlign: 'center',
    padding: "5 10",
    borderRight: '1px solid black',
    flex: '1 1',
    
  },
  textR: {
    textAlign: 'center',
    padding: "5 10",
    flex: '1 1'
  }
});

const PdfDepositSlip = ({data}) => {
  const {values, months} = data
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <HeaderPdf />

        {/* body */}
        <View style={styles.body}>
          <View style={styles.titleWrapper}>
            <Text style={styles.bodyTitle}>Deposit Slip</Text>
          </View>

          <View style={styles.content}>
            <View style={styles.formWrapper}>
              <Text style={styles.subtitle}>
                Date:
              </Text>
              <Text style={styles.textData}>
                {values.depositDate}
              </Text>

              <Text style={styles.subtitle}>
                Client Name:
              </Text>
              <Text style={styles.textData}>
                {values.depositUser}
              </Text>
            </View>

            <View style={styles.formWrapper}>
              <Text style={styles.subtitle}>
                Account Number:
              </Text>
              <Text style={styles.textData}>
                {values.depositAccountNumber}
              </Text>

              <Text style={styles.subtitle}>
                Phone:
              </Text>
              <Text style={styles.textData}>
                {values.depositPhone}
              </Text>
            </View>

            <View style={styles.formWrapper}>
              <Text style={styles.subtitle}>
                Address:
              </Text>
              <Text style={styles.textData}>
                {values.depositAddress}
              </Text>

              <Text style={styles.subtitle}>
                Email:
              </Text>
              <Text style={styles.textData}>
                {values.depositEmail}
              </Text>
            </View>
          </View>

          <View style={{border: '1px solid black',borderBottom: 'none', display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
            <Text style={styles.textL}>
              Months
            </Text>
            <Text style={styles.textR}>
              Amount
            </Text>
          </View>

          {
            Object.keys(months).map((month, index) => (
              <View style={{borderTop: '1px solid black', borderRight: '1px solid black', borderLeft: '1px solid black', display: 'flex', alignItems: 'center', flexDirection: 'row',}} key={index}>
                <Text style={styles.textL}>
                  {month}
                </Text>
                <Text style={styles.textR}>
                  {months[month]}
                </Text>
              </View>
            ))
          }

          <View style={{border: '1px solid black', display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
            <Text style={styles.textL}>
              Total
            </Text>
            <Text style={styles.textR}>
              {values.total}
            </Text>
          </View>
        </View>

        {/* footer */}
        <FooterPdf />
      </Page>
    </Document>
  )
}

export default PdfDepositSlip