import { useState } from "react"
import axios from "axios"
import Layout from "../components/Layout"
import Router from "next/router"


function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState(null)

  var details = {
    name: "test@gmail.com",
    email: "Password!",
    message: "password",
  }

  const handleSubmit = () => {
    setLoading(true)
    setIsError(false)
    const details = {
      name: name,
      email: email,
      message: message,
    }
    const formBody = Object.keys(details)
      .map(
        key => encodeURIComponent(key) + "=" + encodeURIComponent(details[key])
      )
      .join("&")
    console.log(data)

    axios
      .post(
        "https://mysterious-wildwood-19282.herokuapp.com/demo/add",
        formBody
      )
      .then(res => {
        setData(res.data)
        setName("")
        setEmail("")
        setMessage("")
        setLoading(false)
      })
      .then(Router.push("/success"))
      .catch(err => {
        setLoading(false)
        setIsError(true)
      })
  }

  return (
    <>
      <div id="content-wrapper">
        <div id="box">
          <h5 id="h">Contact Us</h5>

          <div classNames="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              className="paragraph"
              placeholder="Name.."
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div classNames="form-group">
            <input
              type="text"
              className="form-control"
              className="paragraph"
              id="email"
              placeholder="Email.."
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div classNames="form-group">
            <textarea
              type="text"
              className="form-control"
              id="message"
              className="paragraph2"
              placeholder="Message.."
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
          {isError && (
            <small className="mt-3 d-inline-block text-danger">
              Something went wrong. Please try again later.
            </small>
          )}
          <button
            id="buttt"
            type="submit"
            className="btn btn-primary mt-3"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
        <style jsx>
          {`
            #h {
              margin-top: 0;
              padding-top: 30px;
              padding-bottom: 30px;
              color: #3a3a3a;
              font-size: 24px;
              font-weight: 500;
            }
            .paragraph {
              width: 300px;
              margin-bottom: 5px;
              height: 35px;
              border-radius: 3px;
              border: transparent;
              box-shadow: -5px -5px 15px rgba(119, 119, 119, 0.041),
                5px 5px 12px rgba(49, 49, 49, 0.164);
              padding-left: 5px;
            }
            #buttt {
              border-radius: 3px;
              background-color: rgb(255, 255, 255);
              padding: 3px 27px;
              border: transparent;
              color: #3a3a3a;
              box-shadow: -5px -5px 15px rgba(119, 119, 119, 0.041),
                5px 5px 12px rgba(49, 49, 49, 0.164);
            }

            #content-wrapper {
  min-height: 600px;
  text-align: center;
}
    #cover{

    }
            .paragraph2 {
              width: 300px;
              margin-top: 2px;
              height: 200px;
              border-radius: 3px;
              color: #3a3a3a;
              border: transparent;
              padding: 5px;
              box-shadow: -5px -5px 15px rgba(119, 119, 119, 0.041),
                5px 5px 12px rgba(49, 49, 49, 0.164);
            }
          `}
        </style>
      </div>
    </>
  )
}

export default App