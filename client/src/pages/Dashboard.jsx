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
  const [totalUsers, setTotalUsers] = useState(0)

  // Other hooks
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isLogin = Boolean(useSelector((state) => state.token))
  const isAdmin = useSelector((state) => state.isAdmin)

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

      // Total of users whose logged in
      const count = data.filter(user => !user.admin ).length;
      setTotalUsers(count)
    } catch (error) {
      toast.error(data.error)
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

      if(response.ok) {
        getUsers()
        const data = await response.json()
        toast.success(data.message)
      }
      
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

      <table className='dashboardTableContainer'>
        <thead className='dashboardTable'>
          <tr className='dashboardItems'>
            <th className='dashboardItemHead'>ID</th>
            <th className='dashboardItemHead'>Username</th>
            <th className='dashboardItemHead'>Email</th>
            <th className='dashboardItemHead'>Date</th>
            <th className='dashboardItemHead'><RiDeleteBin6Line color='black' /></th>
          </tr>
        </thead>

        <tbody className='dashboardTable'>
          {users &&
            users.map((user, index) => (
              <tr key={index} className='dashboardItems'>
                <td className='dashboardItem'>{user.id}</td>
                <td className='dashboardItem'>{user.username}</td>
                <td className='dashboardItem'>{user.email}</td>
                <td className='dashboardItem'>{user.timestamp}</td>
                <td className='dashboardItem'>{!user.admin && <RiDeleteBin6Line onClick={() => handleDelete(user.id)}/>}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
