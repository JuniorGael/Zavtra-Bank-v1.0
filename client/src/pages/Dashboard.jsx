import { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { checkIsLogin } from '../state'
import { toast } from 'react-toastify'

const Dashboard = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isLogin = Boolean(useSelector((state) => state.token))
  const isAdmin = useSelector((state) => state.isAdmin)

  useEffect(() => {
    dispatch(checkIsLogin())
  }, [dispatch])

  useEffect(() => {
    if (!isLogin || !isAdmin) {
      navigate('/login')
    }
  }, [isLogin, isAdmin, navigate ])

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

  return (
    <>
      <h1>Dashboard</h1>
      <div>
        {users &&
          users.map((user, index) => (
            <div key={index}>
              <h2>{user.username}</h2>
            </div>
          ))}
      </div>
    </>
  )
}

export default Dashboard
