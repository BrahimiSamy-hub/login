import { useState } from "react"
import axios from "axios"

const url = "https://dog.ceo/api/breed/hound/images"
// Accept : 'application/json'

const Headers = () => {
  const [message, setDogImg] = useState([0])

  const fetchDadJoke = async () => {
    try {
      const { data } = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      })
      console.log(data.message)
      setDogImg(data.message)
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <section className='section text-center'>
      <img src={message} alt='' className='img' />
      <button className='btn' onClick={fetchDadJoke}>
        random dog
      </button>
    </section>
  )
}
export default Headers
