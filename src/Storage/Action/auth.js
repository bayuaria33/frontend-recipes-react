import axios from "axios";

export const loginUser = (data,navigate) => async (dispatch)=> {
    try{
        dispatch({type:'USER_LOGIN_PENDING'})
        const result = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`,data)
        const user = result.data.data
        localStorage.setItem("token",user.accessToken)
        localStorage.setItem("email",user.email)
        localStorage.setItem("name",user.fullname)
        localStorage.setItem("photo",user.photo)
        dispatch({type:'USER_LOGIN_SUCCESS',payload:user})
        navigate('/home')
        console.log("User Login success");
    } catch(err){
        console.log("User Login failed")
        console.log(err)
    }
}

export const registerUser = (data,navigate) => async(dispatch) =>{
    try {
        dispatch({type:'USER_REGISTER_PENDING'})
        const result = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register/user`,data)
        const user = result.data.data
        console.log(user);
        dispatch({type:'USER_REGISTER_SUCCESS',payload: user});
        navigate('/login')
        console.log("User Register success");
    } catch (err) { 
        console.log("User Register failed");
        console.log(err);
    }
}