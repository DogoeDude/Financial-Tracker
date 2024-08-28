import React from 'react'
import {Link} from 'react-router-dom'
import SettingsIcon from '../assets/setting.svg';
import homeIcon from '../assets/home.svg';
import expIcon from '../assets/expenses.svg';
import orderIcon from '../assets/orders.svg';
import supIcon from '../assets/help.svg';
import logIcon from '../assets/logout.svg';

import ApIcon from '../assets/center/approv.svg';
function home() {
    return (
      <div className='main-div'>
      <div id='nav-bar'>
        <img src='/src/assets/deer.gif' id='prof-pic' alt="Profile" />
        <h2 id='greet'>Welcome, User!</h2>
        <Link to="/" className='nav-link'>
          <button className='nav-bar-btns'>
            <img src={homeIcon} className='icons' alt="Home" />Home
          </button>
        </Link>
        <Link to="/expenses" className='nav-link'>
          <button className='nav-bar-btns'>
            <img src={expIcon} className='icons' alt="Expenses" />Expenses
          </button>
        </Link>
        <Link to="/orders" className='nav-link'>
          <button className='nav-bar-btns'>
            <img src={orderIcon} className='icons' alt="Orders" />Orders
          </button>
        </Link>
        <Link to="/settings" className='nav-link'>
          <button className='nav-bar-btns'>
            <img src={SettingsIcon} className='icons' alt="Settings" />Settings
          </button>
        </Link>
        <Link to="/support" className='nav-link'>
          <button className='nav-bar-btns'>
            <img src={supIcon} className='icons' alt="Support" />Support
          </button>
        </Link>
        <Link to="/auth" className='nav-link'>
          <button className='nav-bar-btns' id='logout'>
            <img src={logIcon} className='icons' alt="Logout" />Logout
          </button>
        </Link>
        <img src='/src/assets/logo.png' id='logo' alt="Logo" />
      </div>
      <div id='view-page'>
        <div id='tasks'>
          <p id='title'>Pending Task/s</p>
          <div id='PT-cont'>
            <ol>
              <li>Pending Approvals <span id='approval'>0</span></li>
              <li>Orders <span id='orders'>0</span></li>
              <li>Notifications <span id='notifs'>0</span></li>
              <li>Messages <span id='chats'>0</span></li>
              <li>Support <span id='supp'>0</span></li>
            </ol>
          </div>
        </div>
        <div id='recent'>
          <p id='title'>Recent Expenses</p>
          <div className='table-view'>
            <table>
              <thead>
                <th>Subject</th>
                <th>Purpose</th>
                <th>Date</th>
                <th>Amount</th>
              </thead>
              <tbody>
                  <tr>
                      <td>School Supplies</td>
                      <td>School</td>
                      <td>27/08/2024</td>
                      <td>15,000.00</td>
                  </tr>
                  <tr>
                      <td>Food</td>
                      <td>Groceries</td>
                      <td>27/10/2024</td>
                      <td>6,795.15</td>
                  </tr>
                  <tr>
                      <td>Art Supplies</td>
                      <td>Art</td>
                      <td>26/06/2024</td>
                      <td>3,459.00</td>
                  </tr>
              </tbody>
            </table>
          </div>
          
        </div>
        <div id='q-access'>
          <p id='title1'>Quick Access</p>
        </div>
        <div id='report'>
          <p id='title1'>Monthly Report</p>
        </div>
      </div>
    </div>
      )
}

export default home
