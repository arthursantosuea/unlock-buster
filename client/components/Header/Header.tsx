import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
function Header() {
  function verifyToken() {
    const token = localStorage.getItem('token')
    if (token) {
      return true
    }
    return false
  }
  const router = useRouter()
  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }
  const authenticated = verifyToken()
  return (
    <div className="fixed top-0 flex min-h-[4rem] w-full justify-between bg-black text-white">
      <h1 className="ml-4 flex items-center text-2xl font-bold">UnlockBuster</h1>
      <nav className="flex h-full w-full justify-end">
        <ul className="flex h-[4rem] justify-between items-center">
          {!authenticated ? (
            <>
              <Link href="/login">
                <li className="cursor-pointer mr-4">Login</li>
              </Link>
              <Link href="/create-user">
                <li className="cursor-pointer mr-4">Create User</li>
              </Link>
            </>
          ) : (
            <>
              <Link href="/create-user">
                <li className="cursor-pointer mr-4">Create User</li>
              </Link>
              <Link href="/users">
                <li className="cursor-pointer mr-4">User List</li>
              </Link>
              <button className="h-8 w-24 rounded-md bg-red-600 font-bold text-white mr-4" onClick={handleLogout}>
                logout
              </button>
            </>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Header
