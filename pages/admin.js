import axios from "axios"
import React from "react"

import Layout from "../components/Layout"

import { useState, useEffect } from "react"


const baseURL = "https://mysterious-wildwood-19282.herokuapp.com/demo/all"

export default function App() {
  const [emails, setEmails] = useState(null)

  useEffect(() => {
    axios.get(baseURL).then(response => {
      setEmails(response.data)
    })
  }, [])

  if (!emails) {
    return (
      <>

        <Layout>
          <div id="cover">
            <div id="h">Messages</div>
            <div>You have no messages.</div>
          </div>
        </Layout>
      </>
    )
  } else {
    return (
      <>
  
        <Layout>
          <div id="cover">
     
            <div id="h">Messages</div>
            <div id="emailbox">
              {emails.map(email => (
                <>
                  <div>
                    <div>{email.name} </div> <div>{email.email} </div>
                  </div>
                  <div>{email.message}</div>
                  <hr></hr><br/><br/>
                </>
              ))}
            </div>
          </div>
          <style jsx>{`
            #emailbox {
            }
            #h {
              margin-top: 0;
              padding-top: 30px;
              padding-bottom: 30px;
              color: #535353;
              font-size: 24px;
              font-weight: 500;
            }
          `}</style>
        </Layout>
      </>
    )
  }
}