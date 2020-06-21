import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd'

const navLinks = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Blog',
    path: '/blog'
  }, 
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'Login',
    path: '/login'
  }
]

const Navigation = ({ user }) => {
  const node = useRef()
  const [menuActive, setMenuActive] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    if (node.current.contains(e.target)) {
      // inside click 
      return
    }
    // outside click
    setMenuActive(false)
  }

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick)

    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])


  return (
    <nav className="site-navigation">
      <span className="menu-title">My React Blog</span>

      <div ref={node} className={`menu-content-container ${menuActive && 'active'}`}>
        <ul>
          { navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <span>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={32} />
          <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
        </span>
      </div>

      <ion-icon name="menu-outline" className="ion-ios-menu" onClick={() => setMenuActive(!menuActive)}></ion-icon>
    </nav>
  )
}

export default Navigation
