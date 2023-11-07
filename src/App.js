import React, { useEffect, useState } from "react"
import "./index.scss"
import { Success } from "./components/Success"
import { Users } from "./components/Users"

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [searchValue, setSearchValue] = useState("")
  const [invites, setInvites] = useState([])
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((data) => data.json())
      .then((json) => setUsers(json.data))
      .catch((err) => {
        console.warn(err, "error")
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value)
  }

  const handleInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id))
    } else {
      setInvites((prev) => [...prev, id])
    }
  }
  const onSendClick = () => {
    setSuccess(true)
  }
  const count = invites.length

  return (
    <div className="App">
      {success ? (
        <Success count={count} />
      ) : (
        <Users
          items={users}
          isLoading={isLoading}
          searchValue={searchValue}
          handleSearchValue={handleSearchValue}
          invites={invites}
          handleInvite={handleInvite}
          onSendClick={onSendClick}
					count={count}
        />
      )}
    </div>
  )
}

export default App
