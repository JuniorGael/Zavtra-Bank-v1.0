import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import DepositSlipTable from "../components/DepositSlipTable";
import logo from "../assets/logo4.webp";
import "../styles/pages/DepositSlip.css";
import { useDispatch, useSelector } from "react-redux";
import { checkIsLogin } from "../state";
import useWindowResize from "../hooks/useWindowResize";
import { downloadPdf } from "../utils/func";
import PdfDepositSlip from "../components/PdfDepositSlip";

const DepositSlip = () => {
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

  const [values, setValues] = useState({
    depositDate: "",
    depositUser: "",
    depositAccountNumber: "",
    depositPhone: "",
    depositAddress: "",
    depositEmail: "",
    total: 0,
  });

  const [months, setMonths] = useState({
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  });

  const total = Object.values(months).reduce(
    (total, currentValue) => total + Number(currentValue),
    0
  );

  useEffect(() => {
    setValues((prevValues) => ({
      ...prevValues,
      total,
    }));
  }, [total]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleChangeTable = (e) => {
    const { name, value } = e.target;
    setMonths({
      ...months,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(isMobile) {
      downloadPdf(<PdfDepositSlip data={{values, months}} />, "slip")
    } else {
      navigate("/pdf-preview-slip", { state: { values, months } });
    }

    
  };

  return (
    // TEMPLATE 3
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

        <form className="slipForm" onSubmit={handleSubmit}>
          <NavLink to="/forms" className='previousButtonWrapper'>
            <span className='toPreviousPageIcon'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256zm212.65-91.36a16 16 0 01.09 22.63L208.42 240H342a16 16 0 010 32H208.42l52.32 52.73A16 16 0 11238 347.27l-79.39-80a16 16 0 010-22.54l79.39-80a16 16 0 0122.65-.09z"/></svg>
            </span>
          </NavLink>
          <div className="titleWrapper">
            <h1 className="slipTitle">Deposit Slip</h1>
          </div>

          <div className="formWrapper date">
            <label htmlFor="depositDate">Date: </label>
            <input
              id="depositDate"
              type="date"
              name="depositDate"
              className="field"
              value={values.depositDate}
              onChange={handleChange}
            />
            <label htmlFor="depositUser">Client Name: </label>
            <input
              id="depositUser"
              type="text"
              name="depositUser"
              className="field"
              value={values.depositUser}
              onChange={handleChange}
            />
          </div>

          <div className="formWrapper account">
            <label htmlFor="depositAccountNumber">Account Number: </label>
            <input
              id="depositAccountNumber"
              type="number"
              name="depositAccountNumber"
              className="field"
              value={values.depositAccountNumber}
              onChange={handleChange}
            />
            <label htmlFor="depositPhone">Phone: </label>
            <input
              id="depositPhone"
              type="number"
              name="depositPhone"
              className="field"
              value={values.depositPhone}
              onChange={handleChange}
            />
          </div>

          <div className="formWrapper address">
            <label htmlFor="depositAddress">Address: </label>
            <input
              id="depositAddress"
              type="text"
              name="depositAddress"
              className="field"
              value={values.depositAddress}
              onChange={handleChange}
            />
            <label htmlFor="depositEmail">Email: </label>
            <input
              id="depositEmail"
              type="text"
              name="depositEmail"
              className="field"
              value={values.depositEmail}
              onChange={handleChange}
            />
          </div>

          <div className="table">
            <DepositSlipTable
              months={months}
              values={values}
              handleChange={handleChangeTable}
            />
          </div>

            <button type="submit" className="btn formBtn">
              {isMobile ? "Telecharger le PDF" : "Consulter en PDF"}
            </button>
        </form>

        <div className="docFooter">Zavtra Bank</div>
      </div>
    </div>
  );
};

export default DepositSlip;
