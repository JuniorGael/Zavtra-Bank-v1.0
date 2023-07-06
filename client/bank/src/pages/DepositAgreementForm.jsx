import { useEffect } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo4.png";
import "../styles/pages/DepositAgreementForm.css";
import { useDispatch, useSelector } from "react-redux";
import { checkIsLogin } from "../state";

const DepositAgreementForm = () => {
  const isLogin = Boolean(useSelector((state) => state.token));
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkIsLogin());
  }, [dispatch]);

  const onsubmit = async (values, actions) => {
    actions.resetForm();

    navigate("/pdf-preview-agreement", { state: values });
  };

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  return (
    // TEMPLATE 1
    <div className="documentContainer">
      <div className="documentWrapper">
        {/* header */}
        <div className="documentHeading">
          <div className="documentHeadingUp">
            <img src={logo} alt="Zavtra Bank logo" className="headerLogo" />
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
            receiver: "",
            donor: "",
            donorAmount: "",
            depositAccount: "",
            depositCity: "",
            depositRegion: "",
            depositZipCode: "",
          }}
          onSubmit={onsubmit}
        >
          <Form className="agreementWrapperForm">
            <div className="depositTitles">
              <h1 className="doctitle">Deposit Agreement</h1>
            </div>

            <div className="formWrapper receiver">
              <label htmlFor="receiver">
                We <strong>Zavtra Bank</strong> represented by <br />
                <strong>Mr/Ms/Mrs</strong>
              </label>
              <Field
                id="receiver"
                type="text"
                name="receiver"
                className="field"
              />
              <ErrorMessage
                component="label"
                className="formLabel text-danger"
                name="receiver"
              />
              <label htmlFor="donor"> Acknowledge to have received </label>
            </div>

            <div className="formWrapper donor">
              <label htmlFor="donor">
                {" "}
                from <strong>Mr/Ms/Mrs</strong>
              </label>
              <Field id="donor" type="text" name="donor" className="field" />
              <ErrorMessage
                component="label"
                className="formLabel text-danger"
                name="donor"
              />
              <label htmlFor="donorPassport">Passport number</label>
              <Field
                id="donorPassport"
                type="number"
                name="donorPassport"
                className="field"
              />
              <ErrorMessage
                component="label"
                className="formLabel text-danger"
                name="donorPassport"
              />
            </div>

            <div className="formWrapper donorAmount">
              <label htmlFor="donorAmount">The amount of</label>
              <Field
                id="donorAmount"
                type="number"
                name="donorAmount"
                className="field"
              />
              <ErrorMessage
                component="label"
                className="formLabel text-danger"
                name="donorAmount"
              />
            </div>

            <div className="formWrapper depositAccount">
              <label htmlFor="depositAccount">As a deposit for Account</label>
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
              <label htmlFor="depositAccount">
                At <strong>Zavtra Bank.</strong>
              </label>
            </div>

            <div className="formWrapper depositAddress">
              <label htmlFor="depositCity">City </label>
              <Field
                id="depositCity"
                type="text"
                name="depositCity"
                className="field"
              />
              <ErrorMessage
                component="label"
                className="formLabel text-danger"
                name="depositCity"
              />
              <label htmlFor="depositRegion">Region </label>
              <Field
                id="depositRegion"
                type="text"
                name="depositRegion"
                className="field"
              />
              <ErrorMessage
                component="label"
                className="formLabel text-danger"
                name="depositRegion"
              />
              <label htmlFor="depositZipCode">Zip code </label>
              <Field
                id="depositZipCode"
                type="number"
                name="depositZipCode"
                className="field"
              />
              <ErrorMessage
                component="label"
                className="formLabel text-danger"
                name="depositZipCode"
              />
            </div>

            <div className="applySecurityWrapper apply">
              <div className="applyManager">
                <p className="applyText">
                  Management agrees that this Security deposit will be returned
                  in full if all the conditions listed below have been met.
                </p>
                <div className="applyName">Manager</div>
              </div>
              <div className="applyManager">
                <p className="applyText">
                  The clients agrees not to apply the security deposit as a
                  share and (2) that the full monthly interest rate will be paid
                  by the Bank in between the first 5 days of each semester.
                </p>
                <div className="applyName">Client</div>
              </div>
            </div>

            <div className="noticeWrapper notice">
              <h2 className="noticeTitle">
                THE BANK WILL RETURN THE DEPOSIT IF:
              </h2>
              <ol className="textNotice">
                <li className="textNoticeItems">
                  The client has not caused the Bank any damage by violating any
                  terms or breaking the law.
                </li>
                <li className="textNoticeItems">
                  A writing 30 days’ notice for a total withdrawal is given to
                  the Bank before the 15th of the month. No notice to withdraw
                  will be accepted for any shorter period of time.
                </li>
                <li className="textNoticeItems">
                  The Client has signed all documents proving that the Bank
                  Management has continually paid the INTEREST RATE belonging to
                  him/her.
                </li>
              </ol>
              <span className="notes">
                <span className="adressBold">Notes: </span>The client and the
                bank management in case of any dispute or misunderstanding can
                take any legal measure to insure the respect of this deposit
                agreement.
              </span>
            </div>

              <button type="submit" className="btn formBtn">
                Consulter en PDF
              </button>
          </Form>
        </Formik>

        <div className="docFooter logo">Zavtra Bank</div>
      </div>
    </div>
  );
};

export default DepositAgreementForm;
