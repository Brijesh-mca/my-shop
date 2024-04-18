import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='container '>

      <div className="row">
        <div className="col mypage">

          <ul>
            <li>
              <Link className='mytext' to='/'>Home</Link>
            </li>
            <li>
              <Link className='mytext' to='/Contact'>Contact-us</Link>
            </li>
            <li>
              <Link className='mytext' to='/About'>About-us</Link>
            </li>
            <li>
                <Link className='mytext' to='/Nav'>Navigation</Link>
              </li>
          </ul>



        </div>


      </div>

      </div>

      
      )
}
