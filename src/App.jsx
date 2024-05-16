import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Home } from "./components/pages/homepage/Home"
import { Category } from './components/category/Category'
import { UserProfile } from './components/userProfile/UserProfile'
import { ConsultantProfile } from './components/consultantprofile/ConsultantProfile'
import { ConsultantList } from './components/consultantlist/ConsultantList'
import { Login } from './components/loginpage/login'
import { Admin } from './components/adminpage/admin'
function App() {
let router=createBrowserRouter([
  {path:'',element:<Login/>},
{path:'home',element:<Home/>, children:[
  
{index:true,element:<Category/>},
{path:'user',element:<UserProfile/>},
{path:'consultant',element:<ConsultantProfile/>},
{path:'consultantlist',element:<ConsultantList/>},
{path:'admin',element:<Admin/>},




]}




])

  return (
<RouterProvider router={router}></RouterProvider>
  
  )
}

export default App
