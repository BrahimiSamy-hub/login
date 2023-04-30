import { useState } from "react"
import axios from "axios"
const url = "http://localhost:2000/api/v1/users/register"

const PostRequest = () => {
  const [email, setName] = useState("")
  const [password, setEmail] = useState("")
  const [response, setResponse] = useState("")
  const [confirm, setConfirm] = useState("")

  const handleSubmit = async (e) => {
    if (password !== confirm) {
      setResponse("erreur")
    } else {
      e.preventDefault()
      try {
        const resp = await axios.post(url, { email, password })
        console.log(resp.data)
        setResponse(resp.data)
      } catch (error) {
        setResponse(error.response.data)
      }
    }
  }

  return (
    <section>
      <h2 className='text-center'>{response}</h2>
      <form className='form'>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-row'>
          <label htmlFor='Confirmpassword' className='form-label'>
            Confirm
          </label>
          <input
            type='password'
            className='form-input'
            id='Confirmpassword'
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
        </div>
        <button type='button' className='btn btn-block' onClick={handleSubmit}>
          login
        </button>
      </form>
    </section>
  )
}
export default PostRequest
