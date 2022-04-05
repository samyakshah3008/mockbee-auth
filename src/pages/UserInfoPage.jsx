import React from 'react'
import { useAuth } from '../contexts/auth-context'
import { Link } from 'react-router-dom'
export const UserInfoPage = () => {
    const {user: {user}} = useAuth()
    return <>
    <div><Link to="/">
              <div>Home</div>
            </Link></div>
    <h3>First Name: {user.firstName}</h3>
    <h3>Last Name: {user.lastName}</h3>
    <h3>Email: {user.email}</h3>
    </>
}