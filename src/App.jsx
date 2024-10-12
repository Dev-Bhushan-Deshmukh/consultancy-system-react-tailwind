import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Home } from "./components/pages/homepage/Home"
import { Category,fetchCategory } from './components/category/Category'
import { UserProfile } from './components/userProfile/UserProfile'
import { ConsultantProfile } from './components/consultantprofile/ConsultantProfile'
import { ConsultantList } from './components/consultantlist/ConsultantList'
import { Login } from './components/loginpage/login'
import { Admin } from './components/adminpage/admin'
function App() {
let router=createBrowserRouter([
  {path:'/',element:<Login/>},
{path:'home',element:<Home/>, children:[
  
{path:'category', element:<Category/>},
{path:'user/:id',index:true,element:<UserProfile/> },
{path:'consultant/:category',element:<ConsultantProfile/>},
{path:'consultantlist',element:<ConsultantList/>},
{path:'admin',element:<Admin/> },




],
errorElement:<p>error !</p>,

}




])

  return (
<RouterProvider router={router}></RouterProvider>
  
  )
}

export default App
