import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import HeaderPdf from "./HeaderPdf";
import FooterPdf from "./FooterPdf";

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
  title: {
    fontSize: 18,
    fontWeight: 700,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 500,
  },
  link: {
    fontSize: 14,
    textDecoration: "none",
  },
  page: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    letterSpacing: "0.6px",
    fontSize: 12,
    fontWeight: 400,
    fontFamily: "Poppins",
  },
  wrapper: {
    marginBottom: 10,
    textAlign: "center",
    textDecoration: "underline"
  },
  body: {
    flex: "1 1 100%",
    padding: 20,
  },
  field: {
    backgroundColor: 'red',
    border: '1px solid red',
  },
  content: {
    lineHeight: 1.4,
    textAlign: "justify"
  },
  formWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginVertical: 5,
  },
  textData: {
    textDecoration: 'underline',
    fontWeight: 400,
  },
  authors: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    marginTop: 30
  },
  subtitleDebt: {
    fontSize: 14,
    marginTop: 25,
    fontWeight: 500
  }
});

const PdfDebt = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
        {/* Header */}
        <HeaderPdf />

        {/* body */}
        <View style={styles.body}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>Debt acknowledgment</Text>
          </View>

          <View style={styles.content}>
            <View style={styles.formWrapper}>
              <Text style={styles.subtitle}>I (Debtor)</Text>
              <Text style={styles.textData}>
                {data.debtorName}
              </Text>
            </View>

            <View style={styles.formWrapper}>
              <Text style={styles.subtitle}>Born On: </Text>
              <Text style={styles.textData}>
                {data.dateDebtor}
              </Text>
              <Text style={styles.subtitle}>At</Text>
              <Text style={styles.textData}>
                {data.cityDebtor}
              </Text>
              <Text style={styles.subtitle}>Nationality: </Text>
              <Text style={styles.textData}>
                {data.nationalityDebtor}
              </Text>
            </View>

            <View style={styles.formWrapper}>
              <Text style={styles.subtitle}>Passport serie: </Text>
              <Text style={styles.textData}>
                {data.passportDebtor}
              </Text>
            </View>

            <View style={styles.formWrapper}>
              <Text style={styles.subtitle}>Resident at: </Text>
              <Text style={styles.textData}>
                {data.residenceDebtor}
              </Text>
              <Text style={styles.subtitle}>Address: </Text>
              <Text style={styles.textData}>
                {data.addressDebtor}
              </Text>
            </View>

            <View style={styles.formWrapper}>
              <Text style={styles.subtitle}>Hereby acknowledes a loan of: </Text>
              <Text style={styles.textData}>
                {data.debtorSum}
              </Text>
            </View>

            <View style={styles.formWrapper}>
              <Text style={styles.subtitle}>Borrowed from Sir (Borrower): </Text>
              <Text style={styles.textData}>
                {data.borrowerName}
              </Text>
            </View>

            <View style={styles.formWrapper}>
              <Text style={styles.subtitle}>Born On: </Text>
              <Text style={styles.textData}>
                {data.dateBorrower}
              </Text>

              <Text style={styles.subtitle}>At</Text>
              <Text style={styles.textData}>
                {data.cityBorrower}
              </Text>

              <Text style={styles.subtitle}>Nationality: </Text>
              <Text style={styles.textData}>
                {data.nationalityBorrower}
              </Text>
            </View>

            <View style={styles.formWrapper}>
              <Text style={styles.subtitle}>Passport serie: </Text>
              <Text style={styles.textData}>
                {data.passportBorrower}
              </Text>
            </View>

            <View style={styles.formWrapper}>
              <Text style={styles.subtitle}>Resident at: </Text>
              <Text style={styles.textData}>
                {data.residentBorrower}
              </Text>
              <Text style={styles.subtitle}>Address: </Text>
              <Text style={styles.textData}>
                {data.addressBorrower}
              </Text>
            </View>

            <View style={styles.formWrapper}>
              <Text style={styles.subtitle}>
                I agree to process with the full repayment of this loan no later than scheduled repayment deadline in a single refund or according to the detail below. 
              </Text>
              <Text style={styles.textData}>
                {data.terms}
              </Text>
            </View>

            <View style={styles.formWrapper}>
              <Text style={styles.subtitle}>Amount: </Text>
              <Text style={styles.textData}>
                {data.amountBorrower}
              </Text>
              <Text style={styles.subtitle}> On: </Text>
              <Text style={styles.textData}>
                {data.dateAmountBorrower}
              </Text>
            </View>

            <View style={styles.formWrapper}>
              <Text className="contract">
              <Text style={styles.subtitle}>Note: </Text>
                  Any dispute, misunderstanding arising from the interpretation or execution of this contract will be subject competence to the juridiction of the police and court.
              </Text>
            </View>
          </View>

          <View style={styles.authors}>
            <Text style={styles.subtitle}>
              The Lender
            </Text>
            <Text style={styles.subtitleDebt}>
              The debtor
            </Text>
            <Text style={styles.subtitle}>
              The witness
            </Text>
          </View>

        </View>


        {/* footer */}
        <FooterPdf />
      </Page>
    </Document>
  );
};

export default PdfDebt;