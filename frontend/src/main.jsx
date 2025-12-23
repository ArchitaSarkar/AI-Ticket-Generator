import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, Router } from 'react-router-dom'
import check_auth from './components/check_auth.jsx'
import { BrowserRouter } from 'react-router-dom'
import Tickets from './pages/tickets.jsx'
import Login from './pages/login.jsx'
import Admin from './pages/admin.jsx'
import Ticket from './pages/ticket.jsx'
import Login from './pages/login.jsx'
import Signup from './pages/signup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
       <Router>
         <Route>
          path='/',
          element ={
            <check_auth protected={true}>
                <Tickets />
              </check_auth>
          }
         </Route>

          <Route>
          path='/ticket/:id',
          element ={
            <check_auth protected={true}>
                <Ticket/>
              </check_auth>
          }
         </Route>

          <Route>
          path='/login',
          element ={
            <check_auth protected={false}>
                <Login />
              </check_auth>
          }
         </Route>

          <Route>
          path='/signup',
          element ={
            <check_auth protected={false}>
                <Signup />
              </check_auth>
          }
         </Route>

          <Route>
          path='/admin',
          element ={
            <check_auth protected={true}>
                <Admin />
              </check_auth>
          }
         </Route>
        </Router>
   </BrowserRouter>
  </StrictMode>,
)
