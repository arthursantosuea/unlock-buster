import { useState, useEffect } from 'react'
import api from '../../services/api'

export default function GetUsers() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    async function getUserList() {
      await api.get('/users').then((response) => {
        setUsers(response.data)
      })
    }
    getUserList()
  }, [])

  return (
    <div className="flex min-h-[calc(100vh-4rem)] w-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Users</h1>
      <table className="border-2 rounded-md">
        <tr>
          <th className="text-left">Username</th>
          <th className="text-left">E-mail</th>
        </tr>
        {users.map((user) => (
            <tr
              key={user.id}
              
            >
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
        ))}
      </table>
    </div>
  )
}
