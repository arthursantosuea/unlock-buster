import React, { useEffect, useState } from 'react'

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
  const [token, setToken] = useState('');

  const handleOnSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    api.post('/users/login', user).then((response) => {
      setToken(response.data.token);
    })
  }
  useEffect(() => {
  if(!token){
    localStorage.setItem('token', token);
  }
  }, [token])
  return (
    <div className="w-screen flex justify-center flex-col items-center">
      <h1>Login</h1>
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
        <button type="submit" className="w-96 h-10 rounded-md bg-pink-400 text-white">Login</button>
      </form>
    </div>
  )
}
