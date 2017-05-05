/**
 * Created by Mihail on 4/23/2017.
 */
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div className="text-center">
    <nav className="navbar navbar-default">
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/lotteries">Lotteries</Link>
    </nav>
  </div>
)

export default Header