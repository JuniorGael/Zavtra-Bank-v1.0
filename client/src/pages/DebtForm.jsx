import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect } from "react";
import logo from "../assets/logo4.webp";
import "../styles/pages/DebtForm.css";
import { useDispatch, useSelector } from "react-redux";
import { checkIsLogin } from "../state";
import { downloadPdf } from "../utils/func";
import PdfDebt from "../components/PdfDebt";
import useWindowResize from "../hooks/useWindowResize";

const DebtForm = () => {
  const navigate = useNavigate();

  const isMobile = useWindowResize()

  const isLogin = Boolean(useSelector((state) => state.token));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkIsLogin());
  }, [dispatch]);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  const onSubmit = async (values, actions) => {
    actions.resetForm();

    if(isMobile) {
      downloadPdf(<PdfDebt data={values} />, "debt")
    } else {
      navigate("/pdf-preview-debt", { state: values });
    }


  };

  return (
    // TEMPLATE 2
    <div className="documentContainer">
      <div className="documentWrapper">
        {/* header */}
        <div className="documentHeading">
          <div className="documentHeadingUp">
            <img src={logo} alt="Zavtra Bank logo" width={50} height={50} className="headerLogo" />
            <div className="bankSlogan">
              <span className="bankSloganHeader">Zavtra Bank</span>
              <p className="bankSloganDesc">
                Together we build Today and Tomorrow
              </p>
            </div>
          </div>
          <div className="documentHeadingAdresses">
            <span className="adress">
              <span className="adressBold">Linkedin: </span>Zavtra Bank
            </span>
            <span className="adress">
              <span className="adressBold">Site Web: </span>
              https://zavtrabank.com
            </span>
            <span className="adress">
              <span className="adressBold">Contacts: </span>+7 950 229-46-42 /
              +7 904 554-19-61 / +234 654 54 88 65
            </span>
          </div>
        </div>

        {/* body */}
        <Formik
          initialValues={{
            debtorName: "",
            dateDebtor: "",
            cityDebtor: "",
            nationalityDebtor: "",
            passportDebtor: "",
            residenceDebtor: "",
            addressDebtor: "",
            debtorSum: "",
            borrowerName: "",
            dateBorrower: "",
            cityBorrower: "",
            nationalityBorrower: "",
            passportBorrower: "",
            residentBorrower: "",
            addressBorrower: "",
            terms: false,
            amountBorrower: "",
            dateAmountBorrower: "",
          }}
          onSubmit={onSubmit}
        >
          {() => (
            <Form className="form">
              <div className="titleWrapper">
                <h1 className="titleItem">Debt acknowledgment</h1>
              </div>

              <div className="formWrapper user">
                <label htmlFor="debtorName">I (Debtor)</label>
                <Field
                  id="debtorName"
                  type="text"
                  name="debtorName"
                  className="field"
                />
                <ErrorMessage
                  component="label"
                  className="formLabel text-danger"
                  name="debtorName"
                />
              </div>

              <div className="formWrapper born">
                <label htmlFor="dateDebtor">Born On: </label>
                <Field
                  id="dateDebtor"
                  type="date"
                  name="dateDebtor"
                  className="field"
                />
                <ErrorMessage
                  component="label"
                  className="formLabel text-danger"
                  name="dateDebtor"
                />
                <label htmlFor="cityDebtor">At</label>
                <Field
                  id="cityDebtor"
                  type="text"
                  name="cityDebtor"
                  className="field"
                />
                <ErrorMessage
                  component="label"
                  className="formLabel text-danger"
                  name="cityDebtor"
                />
                <label htmlFor="nationalityDebtor">Nationality: </label>
                <Field
                  id="nationalityDebtor"
                  type="text"
                  name="nationalityDebtor"
                  className="field"
                />
                <ErrorMessage
                  component="label"
                  className="formLabel text-danger"
                  name="nationalityDebtor"
                />
              </div>

              <div className="formWrapper passport">
                <label htmlFor="passportDebtor">Passport serie: </label>
                <Field
                  id="passportDebtor"
                  type="number"
                  name="passportDebtor"
                  className="field"
                />
                <ErrorMessage
                  component="label"
                  className="formLabel text-danger"
                  name="passportDebtor"
                />
              </div>

              <div className="formWrapper resident">
                <label htmlFor="residenceDebtor">Resident at: </label>
                <Field
                  id="residenceDebtor"
                  type="text"
                  name="residenceDebtor"
                  className="field"
                />
                <ErrorMessage
                  component="label"
                  className="formLabel text-danger"
                  name="residenceDebtor"
                />
                <label htmlFor="addressDebtor">Address: </label>
                <Field
                  id="addressDebtor"
                  type="text"
                  name="addressDebtor"
                  className="field"
                />
                <ErrorMessage
                  component="label"
                  className="formLabel text-danger"
                  name="addressDebtor"
                />
              </div>

              <div className="formWrapper debtor">
                <label htmlFor="debtorSum">
                  Hereby acknowledes a loan of:{" "}
                </label>
                <Field
                  id="debtorSum"
                  type="number"
                  name="debtorSum"
                  className="field"
                />
                <ErrorMessage
                  component="label"
                  className="formLabel text-danger"
                  name="debtorSum"
                />
              </div>

              <div className="formWrapper borrower">
                <label htmlFor="borrowerName">
                  Borrowed from Sir (Borrower):{" "}
                </label>
                <Field
                  id="borrowerName"
                  type="text"
                  name="borrowerName"
                  className="field"
                />
                <ErrorMessage
                  component="label"
                  className="formLabel text-danger"
                  name="borrowerName"
                />
              </div>

              <div className="formWrapper born-borrower">
                <label htmlFor="dateBorrower">Born On: </label>
                <Field
                  id="dateBorrower"
                  type="date"
                  name="dateBorrower"
                  className="field"
                />
                <ErrorMessage
                  component="label"
                  className="formLabel text-danger"
                  name="dateBorrower"
                />

                <label htmlFor="cityBorrower">At</label>
                <Field
                  id="cityBorrower"
                  type="text"
                  name="cityBorrower"
                  className="field"
                />
                <ErrorMessage
                  component="label"
                  className="formLabel text-danger"
                  name="cityBorrower"
                />
                <label htmlFor="nationalityBorrower">Nationality: </label>
                <Field
                  id="nationalityBorrower"
                  type="text"
                  name="nationalityBorrower"
                  className="field"
                />
                <ErrorMessage
                  component="label"
                  className="formLabel text-danger"
                  name="nationalityBorrower"
                />
              </div>

              <div className="formWrapper passport-borrower">
                <label htmlFor="passportBorrower">Passport serie: </label>
                <Field
                  id="passportBorrower"
                  type="number"
                  name="passportBorrower"
                  className="field"
                />
                <ErrorMessage
                  component="label"
                  className="formLabel text-danger"
                  name="passportBorrower"
                />
              </div>

              <div className="formWrapper resident-borrower">
                <label htmlFor="residentBorrower">Resident at: </label>
                <Field
                  id="residentBorrower"
                  type="text"
                  name="residentBorrower"
                  className="field"
                />
                <ErrorMessage
                  component="label"
                  className="formLabel text-danger"
                  name="residentBorrower"
                />
                <label htmlFor="addressBorrower">Address: </label>
                <Field
                  id="addressBorrower"
                  type="text"
                  name="addressBorrower"
                  className="field"
                />
                <ErrorMessage
                  component="label"
                  className="formLabel text-danger"
                  name="addressBorrower"
                />
              </div>

              <div className="formWrapper terms">
                <p className="policyTerms">
                  <Field
                    id="policyTerms"
                    type="checkbox"
                    name="terms"
                    className="checkPolicy"
                  />
                  I agree to process with the full repayment of this loan no
                  later than scheduled repayment deadline in a single refund or
                  according to the detail below.
                </p>
                <ErrorMessage
                  component="label"
                  className="formLabel text-danger"
                  name="terms"
                />
              </div>

              <div className="formWrapper amount-borrower">
                <label htmlFor="amountBorrower">Amount: </label>
                <Field
                  id="amountBorrower"
                  type="number"
                  name="amountBorrower"
                  className="field"
                />
                <ErrorMessage
                  component="label"
                  className="formLabel text-danger"
                  name="amountBorrower"
                />
                <label htmlFor="dateAmountBorrower"> On: </label>
                <Field
                  id="dateAmountBorrower"
                  type="date"
                  name="dateAmountBorrower"
                  className="field"
                />
                <ErrorMessage
                  component="label"
                  className="formLabel text-danger"
                  name="dateAmountBorrower"
                />
              </div>

              <p className="note">
                <span className="bold">Note: </span>
                Any dispute, misunderstanding arising from the interpretation or
                execution of this contract will be subject competence to the
                juridiction of the police and court.
              </p>

              <div className="authors">
                <span>The Lender</span>
                <span>The Debtor</span>
                <span>The Witness</span>
              </div>

              <button type="submit" className="btn formBtn">
                {isMobile ? "Telecharger le PDF" : "Consulter en PDF"}
              </button>
            </Form>
          )}
        </Formik>

        {/* footer */}
        <div className="docFooter">Zavtra Bank</div>
      </div>
    </div>
  );
};

export default DebtForm;
