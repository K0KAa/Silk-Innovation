import React, {useState, useRef, useEffect} from 'react'
import styled from "styled-components"
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from "react-router-dom"
import * as EmailValidator from "email-validator"
import {connect} from "react-redux"
import { addUsers } from '../redux/actions';
import PropTypes from "prop-types"

const Login = ({addUsers}) => {
    
    const [identity, setIdentity] = useState("")
    const [password, setPassword] = useState("")
    const [btnValid, setBtnValid] = useState(false)
    const [visiblePassword, setVisiblePassword] = useState(false)
    const firstTimeRender = useRef(true);
    
    useEffect(() => {
        if (!firstTimeRender.current){
            isEmail = handleEmailValidation()
            isNumber = isPhoneNumber()
            isPassword = checkPasswordValidity()
            if(isPassword && (isEmail || isNumber)){
                setBtnValid(true)
            }
            else{
                setBtnValid(false)
            }
            console.log(`btnValid = ${btnValid}`)
            console.log(`is email = ${isEmail}`)
            console.log(`is number = ${isNumber}`)
            console.log(`is password= ${isPassword}`)
         }
       }, [identity, password])
       
       useEffect(() => { 
         firstTimeRender.current = false 
       }, [])

    var isPassword = false
    var isEmail = false
    var isNumber =false
    let passwordLength = password.length

    function handleIdentity (e){
        setIdentity(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }
    

    //Toggling the password visibility
    function handleVisibility() {
        setVisiblePassword(!visiblePassword)
    }

    //Checking the validity of User Email
    function handleEmailValidation (){
        return EmailValidator.validate(identity)
    }

    //Checking the validity of Phone number
    function isPhoneNumber(){
        if(identity.length === 10 && 
            (identity.substring(0,1).includes(9)) &&
            (identity.substring(1,2) === 8 || 7 || 6) &&
            (identity.substring(2,3) === 1|| 2 || 4 || 5 || 6 ))
            {
                return true
            }
        else{
            return false
        }
    }

    //Checking the validity of Password
    function checkPasswordValidity() {
       if(passwordLength >= 4){
           return true
       }
       else{
           return false
       }
    }

    function checkValidity() {
        if((isEmail || isNumber) && checkPasswordValidity){
            if(passwordLength === 4 && isEmail){
                console.log("pin email")
                let postData = {
                    email: identity,
                    pin: password,
                    desktop_token: 'no_fcm'
                }
                addUsers(postData)
            }
            else if(passwordLength === 4 && isNumber){
                console.log("pin phNo.")
                let postData = {
                    number: identity,
                    pin: password,
                    fcm_token: 'no_fcm'
                }
                addUsers(postData)
            }
            else if(isPassword && isNumber)
            {
                console.log("password phn")
                let postData ={
                    number: identity,
                    password: password,
                    fcm_token: 'no_fcm'
                }
                addUsers(postData)
            }
            else{
                console.log("pass email")
                let postData ={
                    email: identity,
                    password: password,
                    fcm_token: 'no_fcm'
                }
                addUsers(postData)
            }
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        checkValidity()
    }

    return (
        <LoginWrapper validity ={btnValid.value}>
           <form className="login" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} onSubmit={ handleSubmit }>
                <h2 className="title">Enter the Credientials</h2>
                
                {/* User Credientials */}
                {/* Email/ Ph. No field */}
                <div className="loginCrediential">
                    <label>Phone Number/ Email</label>
                    <input value={identity}
                            type="text"
                            onChange = {handleIdentity}
                            onBlur ={handleSubmit}
                     />
                </div>

                {/* Password Field */}
                <div className="loginCrediential">
                    <label>Password or PIN</label>
                    <div className="password">
                        <input value={password} 
                                onChange = {handlePassword} 
                                type={visiblePassword ? "text" : "password"}
                                onBlur={handleSubmit}
                        />
                        <VisibilityIcon className="icon" onClick={handleVisibility}/>
                    </div>
                </div>
                <Link className="signIn" to= "/">
                    {btnValid ? 
                        <button style={{backgroundColor: "aqua"}} type="submit" onClick={handleSubmit}>Sign In</button>
                    :
                        <button style={{backgroundColor: "white", color: "black"}} type="button" disabled={true}>Sign In</button>
                    }
                </Link>
           </form>
        </LoginWrapper>
    )
}
Login.propTypes = {
    fetchUsers: PropTypes.func.isRequired
}

const mapStateToProps = state =>{
    const {userState} = state
    const { newUser } = userState
    return {
        newUser: newUser
    }
}


export default connect(mapStateToProps, {addUsers})(Login)


//Styled Components
const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    background: #353839;
    color:black;
    height: 100vh;
    position: static;

    .title{
        text-align: center;
    }

    .login{
        width: 50%;
        height: 60%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: #CCCCCC;
        border-radius: 10px;       
    }

    .loginCrediential{
        width: 80%;
        display: flex;
        flex-direction: column;
        margin: auto;
        position: relative;
    }

    .password{
        display: flex;
    }
    .password input{
        flex: 9
    }
    .icon{
        position: absolute;
        right: 1px;
    }

    .signIn{
        margin: auto;
        width: 7rem;
        height: 2rem;
        
    }

    .signIn button{
        background: lightslategray;
        width: 100%;
        height:100%;
        color: white;
        border-radius: 3px;
        border: 3px solid grey
    }

    .showError{
        color: red;
        text-align: center;
    }

    input{
        border-radius: 4px;
        height: 25px;
        border:none
    }

    label{
        font-weight: 600;
    }
    button{
        cursor: pointer;
    }

    @media (min-width: 900px) {
        .loginCrediential{
            width: 50%;
        }
    }

`;