import React, { useEffect } from 'react';
import './_loginScreen.scss';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/actions/auth.action';
const LoginScreen = () =>{
 
  const accessToken=useSelector(state => state.auth.accessToken);
  const dispatch = useDispatch();
  
  const loginHandler=()=>{
    dispatch(login());
  } 
  
  const navigate = useNavigate();
  useEffect(()=>{
    if(accessToken)
    {
      navigate("/");
    }
  },[accessToken,navigate])
  
  return (
      <div className="login">
        <div className="login__container">
          <img
            src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
            alt=""
          />
          <button onClick={loginHandler}>Login With google</button>
          <p>This project is made with YOUTUBE DATA API</p>
        </div>
      </div>
    );
}

export default LoginScreen;