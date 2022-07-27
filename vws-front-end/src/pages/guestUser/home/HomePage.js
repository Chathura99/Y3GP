import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
        <h3>Landing Page</h3>
    <Link to="/login">Login</Link>
<br></br>
    <Link to ="/signup">Request to Join</Link>

    <br></br>
    <Link to ="/requestnewevent">Request New Event</Link>

    </div>
  )
}
