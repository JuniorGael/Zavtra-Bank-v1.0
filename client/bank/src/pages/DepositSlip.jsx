import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DepositSlipTable from "../components/DepositSlipTable";
import logo from "../assets/logo4.png";
import "../styles/pages/DepositSlip.css";
import { useDispatch, useSelector } from "react-redux";
import { checkIsLogin } from "../state";

const DepositSlip = () => {
  const isLogin = Boolean(useSelector((state) => state.token));
  const navigate = useNavigate();

  const dispatch = useDispatch();

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

    navigate("/pdf-preview-slip", { state: { values, months } });
  };

  return (
    // TEMPLATE 3
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

        <form className="slipForm" onSubmit={handleSubmit}>
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
              Consulter en PDF
            </button>
        </form>

        <div className="docFooter">Zavtra Bank</div>
      </div>
    </div>
  );
};

export default DepositSlip;
