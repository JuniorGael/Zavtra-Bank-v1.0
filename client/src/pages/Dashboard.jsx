import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkIsLogin } from "../state";
import { toast } from "react-toastify";
// import { RiDeleteBin6Line } from "react-icons/ri";
import "../styles/pages/Dashboard.css";
import Modal from "../components/Modal";

const Dashboard = () => {
  // State variables
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);

  const [showModal, setShowModal] = useState(false);

  // Other hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLogin = Boolean(useSelector((state) => state.token));
  const isAdmin = useSelector((state) => state.isAdmin);

  // Check if the user is logged in
  useEffect(() => {
    dispatch(checkIsLogin());
  }, [dispatch]);

  // Redirect to login page if not logged in or not an admin
  useEffect(() => {
    if (!isLogin || !isAdmin) {
      navigate("/login");
    }
  }, [isLogin, isAdmin, navigate]);

  // Fetch users data from the server
  const getUsers = async () => {
    try {
      const response = await fetch("/api/users", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      setUsers(data);

      // Total of users whose logged in
      const count = data.filter((user) => !user.admin).length;
      setTotalUsers(count);
    } catch (error) {
      toast.error(data.error);
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // Handle delete button click
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        getUsers();
        const data = await response.json();
        toast.success(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const timestamp = new Date().toLocaleString();

  let refUser = useRef({});

  const handleOpenModal = (id) => {
    const user = users.find(user => user.id === id)
    refUser.current = user;
    setShowModal(true);
  };

  // Render the component
  return (
    <div className="dashboard">
      <h1 className="dashboardTitle">User Management System</h1>

      <div className="totalUserContainer">
        <h2 className="totalUserTitle">Total Customer</h2>
        <p className="totalUserNber">{totalUsers}</p>
      </div>

      <table className="dashboardTableContainer">
        <thead className="dashboardTable">
          <tr className="dashboardItems">
            <th className="dashboardItemHead">ID</th>
            <th className="dashboardItemHead">Username</th>
            <th className="dashboardItemHead">Email</th>
            <th className="dashboardItemHead">Date</th>
            <th className="dashboardItemHead">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M80 112h352"/><path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
            </th>
          </tr>
        </thead>

        <tbody className="dashboardTable">
          {users &&
            users.map((user, index) => (
              <tr key={index} className="dashboardItems">
                <td className="dashboardItem">{user.id}</td>
                <td className="dashboardItem">{user.username}</td>
                <td className="dashboardItem">{user.email}</td>
                <td className="dashboardItem">{timestamp}</td>
                <td className="dashboardItem">
                  {!user.admin && (
                    <div className="deleteBtn"
                      onClick={() => handleOpenModal(user.id)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M80 112h352"/><path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                    </div>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {showModal && (
        <Modal
          isOpen={showModal}
          setIsOpen={setShowModal}
          user={refUser.current}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Dashboard;
