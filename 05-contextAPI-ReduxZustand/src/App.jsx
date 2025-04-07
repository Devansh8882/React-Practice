import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/userContentProvider'

function App() {

  return (
   <UserContextProvider>
      <h1>React with devansh at sarv</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}
 
export default App
