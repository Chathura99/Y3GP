import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
        <h3>Landing Page</h3>
    <Link to="/login">Login</Link>
    </div>
  )
}
