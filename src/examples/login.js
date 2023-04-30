import { useState } from "react"
import axios from "axios"
import Cookies from "js-cookie"

const url = "http://localhost:2000/api/v1/users/login"

const PostRequest = () => {
  const [lowerCaseEmail, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const logout = () => {
    Cookies.remove("token")
    setIsLoggedIn(false)
    console.log(Cookies)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const email = lowerCaseEmail.toLowerCase()
      console.log(email)
      const response = await axios.post(url, { email, password })
      // console.log(response.status)

      if (response.status) {
        setIsLoggedIn(true)
        console.log(Cookies.get())

        // Cookies.set("token", response.data.token)
        console.log(Cookies.get())
      } else {
        setErrorMessage(response.data.message)
      }
    } catch (error) {
      setErrorMessage(error.response.data)
      // console.log(error.response.data)
    }
  }
  if (isLoggedIn) {
    return (
      <div>
        <p>You are logged in!</p>
        <button type='button' className='btn' onClick={logout}>
          logout
        </button>
      </div>
    )
  }
  return (
    <section>
      <h2>{errorMessage}</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={lowerCaseEmail}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='btn btn-block'>
          login
        </button>
      </form>
    </section>
  )
}

export default PostRequest
