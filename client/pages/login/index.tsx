import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import api from '../../services/api'

interface User {
  email: string
  password: string
}

export default function Login() {
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
  })
  const [token, setToken] = useState('')
  const router = useRouter()
  const handleOnSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    api.post('/users/login', user).then((response) => {
      setToken(response.data.token)
    })
  }
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
      router.push('/users')
    }
  }, [token])
  return (
    <div className="flex min-h-[calc(100vh-4rem)] w-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Login</h1>
      <form className="flex flex-col" onSubmit={handleOnSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="h-10 w-96 rounded-md border-[1px] border-gray-300"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="h-10 w-96 rounded-md border-[1px] border-gray-300"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button
          type="submit"
          className="mt-4 h-10 w-96 rounded-md bg-black font-bold text-white"
        >
          Login
        </button>
      </form>
    </div>
  )
}
