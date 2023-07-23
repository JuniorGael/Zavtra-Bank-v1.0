import { ErrorMessage, Field, Form, Formik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo4.webp";
import "../styles/pages/DepositACAForm.css";
import { useDispatch, useSelector } from "react-redux";
import { checkIsLogin } from "../state";
import { useEffect } from "react";
import useWindowResize from "../hooks/useWindowResize";
import { downloadPdf } from "../utils/func";
import PdfDepositACA from '../components/PdfDepositACA'

const DepositACAForm = () => {
  const isLogin = Boolean(useSelector((state) => state.token));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isMobile = useWindowResize()

  useEffect(() => {
    dispatch(checkIsLogin());
  }, [dispatch]);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  const onsubmit = async (values, actions) => {
    actions.resetForm();
    if(isMobile) {
      downloadPdf(<PdfDepositACA data={values} />, "deposit_aca")
    } else {
      navigate("/pdf-preview-aca", { state: values });
    }
  };
  return (
    // TEMPLATE 0
    <div className="documentContainer">
      <div className="documentWrapper">
        {/* HEADER */}
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

        {/* BODY */}
        <Formik
          initialValues={{
            depositDate: "",
            user: "",
            depositAccount: "",
          }}
          onSubmit={onsubmit}
        >
          {() => (
            <Form className="depositAccountForm">
              <NavLink to="/forms" className='previousButtonWrapper'>
                <span className='toPreviousPageIcon'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256zm212.65-91.36a16 16 0 01.09 22.63L208.42 240H342a16 16 0 010 32H208.42l52.32 52.73A16 16 0 11238 347.27l-79.39-80a16 16 0 010-22.54l79.39-80a16 16 0 0122.65-.09z"/></svg>
                </span>
              </NavLink>
              <div className="depositAccountWrapper">
                <h1 className="depositAccountTitle">
                  Deposit Account Control Agreement
                </h1>
                <h2 className="depositAccountSubtitle">
                  Notice of Exclusive Control
                </h2>
              </div>

              <div className="formWrapper date">
                <label htmlFor="depositDate">
                  As referenced in the Deposit <br />
                  Account Agreement dated of{" "}
                </label>
                <Field
                  id="depositDate"
                  type="date"
                  name="depositDate"
                  className="field"
                />
                <ErrorMessage
                  component="label"
                  className="formLabel text-danger"
                  name="depositDate"
                />
              </div>

              <div className="formWrapper depositUser">
                <label htmlFor="user">
                  {" "}
                  Between <strong>Mr/Mrs/Ms</strong>
                </label>
                <Field id="user" type="text" name="user" className="field" />
                <ErrorMessage
                  component="label"
                  className="formLabel text-danger"
                  name="user"
                />
              </div>

              <p className="text">
                and <strong>Zavtra Bank</strong> (a copy of which is attached).
                We notify you that we will hereafter exercise exclusive control
              </p>
              <div className="formWrapper account">
                <label htmlFor="depositAccount"> over account number </label>
                <Field
                  id="depositAccount"
                  type="number"
                  name="depositAccount"
                  className="field"
                />
                <ErrorMessage
                  component="label"
                  className="formLabel text-danger"
                  name="depositAccount"
                />
              </div>

              <div className="noticeText">
                Your are instructed not to accept any directive or instruction
                with respect to the account form any person other than the
                undersigned unless itherwise ordered by a court of competent
                juridiction.
                <p className="text">
                  A copy of this notice is simultaneously provided to the third
                  party for achieve.
                </p>
                We recognize that as a condition to you complying with this
                notice of exclusive control and Deposit Agreement and to the
                extent that we have'nt done so, we must provide others
                information as reasonably required by you.
              </div>
              <div className="signatureWrapper">
                <span className="signatureText">Very truly yours,</span>
                <span className="signatureName">Zavtra Bank</span>
              </div>
              <button type="submit" className="btn formBtn">
                {isMobile ? "Telecharger le PDF" : "Consulter en PDF"}
              </button>
            </Form>
          )}
        </Formik>
        {/* FOOTER */}
        <div className="docFooter">Zavtra Bank</div>
      </div>
    </div>
  );
};

export default DepositACAForm;
