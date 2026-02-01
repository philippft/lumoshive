import React, { useEffect, useState } from 'react'
import axios from 'axios'

const User = ({ mode, query }) => {
  console.log("Data query", mode, query)

  // data users
  const [users, setUsers] = useState([])

  // untuk loading selama data tidak ada
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState(null)

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true) // mulai loading
      setError(null) // reset error, karena nanti bisa dijalankan lagi selama watch terhadap dependensi [mode,query] ada perubahan

      try {
        const url = 'https://jsonplaceholder.typicode.com/users'
        let data = []

        if (mode === 'fetch') {
          // ====== MODE FETCH ======
          const response = await fetch(url)

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }

          // fecth perlu di parsing ke json secara manual
          data = await response.json()
        } else {
          // ====== MODE AXIOS ======
          const response = await axios.get(url)
          data = response.data
        }

        const q = query.trim().toLowerCase()
        const filterData =
          q ?
            data.filter(user => user.name.toLowerCase().includes(q))
            :
            data
        setUsers(filterData)
      } catch (err) {
        setError(err.message || "Terjadi kesalahan saat mengambil data user.")
      } finally {
        setLoading(false) // selesai loading (berhasil atau gagal)
      }

    }
    loadUsers()


  }, [query, mode]) // watch terhadap perubahan mode dan query


  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p style={{ color: `tomato` }}>Error: {error}</p>
  }

  return (
    <div>
      <p>Total Users: {users.length}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <b>{user.name}</b> - ({user.email})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default User

