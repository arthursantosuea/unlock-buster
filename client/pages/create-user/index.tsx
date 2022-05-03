import api from '../../services/api'
import { useRouter } from 'next/router'
import { useState } from 'react'

interface User {
  name: string
  email: string
  password: string
}

export default function CreateUser() {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    password: '',
  })
  const router = useRouter();
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    api.post('users/create', user).then((response) => {
      if (response.status == 201) {
        alert('Usuário criado com sucesso!')
        router.push('/login');
      }
    })
  }
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center font-sans">
      <h1 className="text-2xl font-bold">Create User</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="h-10 w-96 rounded-md border-[1px] border-gray-300"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        {}
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
          Create
        </button>
      </form>
    </div>
  )
}
