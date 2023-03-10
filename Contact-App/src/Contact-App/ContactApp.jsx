import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ContactList from './ContactList'
import ContactDetails from './ContactDetails'

const ContactApp = () => {

  let [users, setUsers] = useState({})
  let [selUser, setSelUser] = useState({})

  let selectedUser = (user)=>{
    console.log(user)
    setSelUser(user)
  }

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then((response) => {
        setUsers(response.data)
      })
      .catch(() => { })
  })
  return <>
    <h1>Contact App</h1>
    <div className="container">
      {/* <pre>{JSON.stringify(users)}</pre> */}
      {/* <pre>{JSON.stringify(selUser)}</pre> */}
      <div className="row">
        <div className="col-md-8">
    
{
  Object.keys(users).length>0?<>
              <ContactList data={users} method={selectedUser}/>
  </>:null
}
         
        </div>
        <div className="col-md-4">
          <ContactDetails userData = {selUser}/>
        </div>
      </div>
    </div>
  </>
}

export default ContactApp