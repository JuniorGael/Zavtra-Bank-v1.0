import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
  Link,
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
  applySecurityWrapper: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  applyItems: {
    width: "48%"
  },
  noticeWrapper: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 20,
  },
  orderedListNoticeWrapper: {
    marginHorizontal: 24,
  },
  orderedListNotice: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  orderedListNoticeText:{
    paddingTop: 2,
  },
});

const PdfDepositAgreement = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <HeaderPdf />

        {/* body */}
        <View style={styles.body}>
          <View style={styles.titleWrapper}>
            <Text style={styles.bodyTitle}>Deposit Agreement</Text>
          </View>

          <View style={styles.content}>
            <View style={styles.formWrapper}>
              <Text style={styles.subtitle}>
                We Zavtra Bank represented by Mr/Ms/Mrs
              </Text>
              <Text style={styles.textData}>
                {data.receiver}
              </Text>
            </View>

            <View style={styles.formWrapper}>
              <Text style={styles.subtitle}>
                Acknowledge to have received from Mr/Ms/Mrs
              </Text>
              <Text style={styles.textData}>
                {data.donor}
              </Text>
            </View>

            <View style={styles.formWrapper}>
              <Text style={styles.subtitle}>
                Passport number
              </Text>
              <Text style={styles.textData}>
                {data.donorPassport}
              </Text>
              <Text style={styles.subtitle}>
                The amount of
              </Text>
              <Text style={styles.textData}>
                {data.donorAmount}
              </Text>
            </View>

            <View style={styles.formWrapper}>
              <Text style={styles.subtitle}>
                As a deposit for Account 
              </Text>
              <Text style={styles.textData}>
                {data.depositAccount}
              </Text>
              <Text style={styles.subtitle}>
                At Zavtra Bank.
              </Text>
            </View>


            <View style={styles.formWrapper}>
              <Text style={styles.subtitle}>
                City
              </Text>
              <Text style={styles.textData}>
                {data.depositCity}
              </Text>
              <Text style={styles.subtitle}>
                Region
              </Text>
              <Text style={styles.textData}>
                {data.depositRegion}
              </Text>
              <Text style={styles.subtitle}>
                Zip code
              </Text>
              <Text style={styles.textData}>
                {data.depositZipCode}
              </Text>
            </View>
          </View>

          <View style={styles.applySecurityWrapper}>
            <View style={styles.applyItems}>
              <Text style={styles.applyText}>
                Management agrees that this Security deposit will be returned in full if all the conditions listed below have been met.
              </Text>
              <Text style={styles.subtitle}>Manager</Text>
            </View>
            <View style={styles.applyItems}>
              <Text style={styles.applyText}>
                The clients agrees not to apply the security deposit as a share and (2) that the full monthly interest rate will be paid by the Bank in between the first 5 days of each semester.
              </Text>
              <Text style={styles.subtitle}>Client</Text>
            </View>
          </View>

          <View style={styles.noticeWrapper}>
            <Text style={styles.subtitle}>THE BANK WILL RETURN THE DEPOSIT IF:</Text>
            <View style={styles.orderedListNoticeWrapper}>
              <View style={styles.orderedListNotice}>
                <Text style={styles.subtitle}>1 : </Text>
                <Text style={styles.orderedListNoticeText}>
                  The client has not caused the Bank any damage by violating any terms or breaking the law.
                </Text>
              </View>
              <View style={styles.orderedListNotice}>
                <Text style={styles.subtitle}>2 : </Text>
                <Text style={styles.orderedListNoticeText}>
                  A writing 30 days’ notice for a total withdrawal is given to the Bank before the 15th of the month. No notice to withdraw will be accepted for any shorter period of time.
                </Text>
              </View>
              <View style={styles.orderedListNotice}>
                <Text style={styles.subtitle}>3 : </Text>
                <Text style={styles.orderedListNoticeText}>
                  The Client has signed all documents proving that the Bank Management has continually paid the INTEREST RATE belonging to him/her.
                </Text>
              </View>
              <View style={styles.orderedListNotice}>
                <Text style={styles.subtitle}>Notes : </Text>
                <Text style={styles.orderedListNoticeText}>
                  The client and the bank management in case of any dispute or misunderstanding can take any legal measure to insure the respect of this deposit agreement.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* footer */}
        <FooterPdf />
      </Page>
    </Document>
  );
};

export default PdfDepositAgreement;