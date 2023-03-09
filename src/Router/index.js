import { BrowserRouter,Route,Routes,Navigate } from "react-router-dom";
import Home from '../Pages/Home'
import Profile from '../Pages/Profile'
import Add from '../Pages/Menu/Add'
import Login from '../Pages/Auth/login'
import Register from "../Pages/Auth/register";
import Search from "../Pages/Menu/Search/index"
function App(){
    return(
            <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Navigate to='home' replace="true"/>} />
                        <Route path='/home' element={<Home/>} />
                        <Route path='/profile' element={<Profile/>} />
                        <Route path='/add' element={<Add/>} />
                        <Route path='/login' element={<Login/>} />
                        <Route path='/register' element={<Register/>} />
                        <Route path='/search' element={<Search/>} />
                    </Routes>
            </BrowserRouter>
    )
}

export default App