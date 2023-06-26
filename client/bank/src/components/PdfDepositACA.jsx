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
  title: {
    fontSize: 18,
    fontWeight: 700,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 500,
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
    marginTop: 20,
    textAlign: "center",
    textDecoration: 'underline',
  },
  body: {
    flex: "1 1 100%",
  },
  content: {
    marginVertical: 20,
    lineHeight: 1.8,
    textAlign: "justify",
  },
  formWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 5,
  },
  textData: {
    textDecoration: 'underline',
    fontWeight: 400,
    paddingHorizontal: 5,
  },
  text: {
    marginVertical: 10,
    fontWeight: 500,
    fontSize: 13,
  },
  signature: {
    margin: 20,
    display: "flex",
    alignSelf: "flex-end",
    alignItems: "center",
    gap: 20,
  },
});

const PdfDepositACA = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <HeaderPdf />

        {/* body */}
        <View style={styles.body}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>Deposit Account Control Agreement</Text>
            <Text style={styles.subtitle}>Notice of Exclusive Control</Text>
          </View>

          <View style={styles.content}>
            <View style={styles.formWrapper}>
              <Text style={styles.subtitle}>
                As referenced in the Deposit Account Agreement dated of 
              </Text>
              <Text style={styles.textData}>
                {data.depositDate}
              </Text>
            </View>

            <View style={styles.formWrapper}>
              <Text style={styles.subtitle}>
                Between Mr/Mrs/Ms 
              </Text>
              <Text style={styles.textData}>
                {data.user}
              </Text>
              <Text style={styles.subtitle}>
                and Zavtra Bank.
              </Text>
            </View>

            <Text style={styles.subtitle}>
              We notify you that we will hereafter exercise exclusive control over 
            </Text>

            <View style={styles.formWrapper}>
              <Text style={styles.subtitle}>
                account number  
              </Text>
              <Text style={styles.textData}>
                {data.depositAccount}
              </Text>
            </View>

            <Text style={styles.subtitle}>
              Your are instructed not to accept any directive or instruction with respect to the account form any person other than the undersigned unless itherwise ordered by a court of competent juridiction.
            </Text>

            <Text style={styles.text}>
              A copy of this notice is simultaneously provided to the third party for achieve.
            </Text>

            <Text style={styles.subtitle}>
              We recognize that as a condition to you complying with this notice of exclusive control and Deposit Agreement and to the extent that we have'nt done so, we must provide others information as reasonably required by you.
            </Text>
          </View>
          <View style={styles.signature}>
            <Text style={styles.subtitle}>Very truly yours,</Text>
            <Text style={styles.subtitle}>Zavtra Bank</Text>
          </View>
        </View>

        {/* footer */}
        <FooterPdf />
      </Page>
    </Document>
  );
};

export default PdfDepositACA;
