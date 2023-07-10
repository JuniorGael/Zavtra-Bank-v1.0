import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { checkIsLogin } from '../state'
import { toast } from 'react-toastify'
import { RiDeleteBin6Line } from 'react-icons/ri'
import '../styles/pages/Dashboard.css'

const Dashboard = () => {

  // State variables
  const [users, setUsers] = useState([])

  // Other hooks
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isLogin = Boolean(useSelector((state) => state.token))
  const isAdmin = useSelector((state) => state.isAdmin)

  // Total of users whose logged in
  const totalUsers = users.length - 1;
  console.log("Total number of users:", totalUsers);

  // Check if the user is logged in
  useEffect(() => {
    dispatch(checkIsLogin())
  }, [dispatch])

  // Redirect to login page if not logged in or not an admin
  useEffect(() => {
    if (!isLogin || !isAdmin) {
      navigate('/login')
    }
  }, [isLogin, isAdmin, navigate ])

  // Fetch users data from the server
  const getUsers = async () => {
    try {
      const response = await fetch('/api/users', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
      })
      const data = await response.json()
      setUsers(data)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  // Handle delete button click
  const handleDelete = async (id) => {

    try {
      const response = await fetch(`/api/users/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
          },
          credentials: 'include',
      })
      const data = response.json() 
      const deleteUserData = users.filter(user => user.id !== id)
      console.log(deleteUserData);
      setUsers(deleteUserData)
    } catch (error) {
      console.log(error);
    }
  };

  // Render the component
  return (
    <div className='dashboard'>
      <h1 className='dashboardTitle'>User Management System</h1>

      <div className="totalUserContainer">
        <h2 className="totalUserTitle">Total Customer</h2>
        <p className="totalUserNber">{totalUsers}</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.timestamp}</td>
                <td>{!user.admin && <RiDeleteBin6Line onClick={() => handleDelete(user.id)}/>}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
