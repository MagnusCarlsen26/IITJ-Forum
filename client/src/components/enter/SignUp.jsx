/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
import svg from './../../svg'
import React from 'react'
import './../../css/enter/enter.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const SignUp = () => {
    const [validity,setValidity] = React.useState( ['f','f','f','f'] ) 
    const [svgcolor,setSvgcolor] = React.useState( [false,false,false,false] )
    const [error,setError] = React.useState( ['','','',''] )
    const navigate = useNavigate();

    const EmailChange = (e) => {
        const email = 'iitj.ac.in'
        const userEmail = e.target.value
        setEmail(userEmail)

        var ans1 = false
        if (userEmail.length>0) ans1 = true
        
        var index = userEmail.length
        for(var i =0;i<userEmail.length;i++)
        {
            if(userEmail[i]==='@') {
                index = i+1
                break
            }
        }
        
        var bool = 0
        for(i=index;i<userEmail.length;i++)
        {
            if(email[i-index]===userEmail[i]) {
                bool = 1
            }
            else{
                console.log('ERRR')
                bool = 2
                break
            }
        }   
        if(userEmail.length-index!==email.length && bool===1) {
            bool=2;
        }
        var ans = 'in'
        if (bool===0) ans = 'f'
        if (bool===1) ans = ''

        setError( (item) => {var newItem = item.slice() ; newItem[1] = "Enter an IITJ email.";return newItem } )
        setValidity( (item) => {var newItem = item.slice() ;newItem[1] = ans; return newItem} )
        setSvgcolor( (item) => {var newItem = item.slice() ; newItem[1] = ans1;return newItem} )
        console.log(validity[1])
    }

    const PwdChange = (e) => {
        const userPwd = e.target.value
        setPassword(userPwd)

        var ans1 = 'in'
        var ans2 = false
        if (userPwd.length>7) ans1 = ''
        if (userPwd.length>0) ans2 = true
        
        setError( (item) => {var newItem = item.slice() ; newItem[2] = "Password must of atleast 8 characters.";return newItem } )
        setValidity( (item) => {var newItem = item.slice() ; newItem[2] = ans1 ;return newItem} )        
        setSvgcolor( (item) => {var newItem = item.slice(); newItem[2] = ans2 ;return newItem} ) 
    }

    const confirmPwd = (e) => {
        const userPwd = e.target.value
        var ans1 = 'in' ;
        var ans2 = false ;
        setPassword( (item) => {
            console.log(item,userPwd)
            if (item == userPwd) ans1 = ''
            return item
        } )
        if (userPwd.length>0) ans2 = true
        // EEEEEEEEERRRRRRRRRRRROOOOORRRRRRR
        setError( (item) => {var newItem = item.slice() ; newItem[3] = "Passwords do not match.";return newItem } )
        setValidity( (item) => {var newItem = item.slice() ; newItem[3] = ans1;return newItem } )       
        setSvgcolor( (item) => {var newItem = item.slice() ; newItem[3] = ans2;return newItem} )
        console.log(validity[3])
    }

    const [username,setUsername] = React.useState("")
    const [password,setPassword] = React.useState("")
    const [email,setEmail] = React.useState("")

    const onSubmit= async (event) => {
        event.preventDefault()
        try{
            const { message } = await axios.post("http://localhost:5000/auth/register",{
                username,
                email,
                password
            })
            if (message === "Username already taken.") {
                setValidity( (item) => {var newItem = item.slice() ; newItem[0] = "Username already taken.";return newItem} )
                setValidity( (item) => {var newItem = item.slice() ; newItem[0] = 'in';return newItem} )
            }
            if (message === "Email already exists.") {
                setValidity( (item) => {var newItem = item.slice() ; newItem[1] = "Email Already exists.";return newItem} )
                setValidity( (item) => {var newItem = item.slice() ; newItem[1] = 'in';return newItem} ) 
            }
            if (message === "User Registered Succesfully.") {
                navigate('/feed')
            }
        }
        catch (err) {
            console.error.log(err)
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="d-flex h-100 align-items-center justify-content-center Signup-page"> 
                <div className="h-75 w-50 bg-white d-flex justify-content-center flex-column p-5 signup-form" style={{borderRadius:'25px'}}>
                    <p className='text-center display-4 mt-5 mb-5'>Signup</p>

                    <div className="form-floating mb-2">
                        <input type="text" className={`form-control is-${validity[0]}valid`} id="floatingInput" placeholder="name@example.com" onChange={(event) => setUsername(event.target.value)}/>
                        <label for="floatingInput" > {svgcolor[0]? svg.coloredUser : svg.user} Username</label>
                        <div className="invalid-feedback">
                            {error[0]}
                        </div>
                    </div>

                    <div className="form-floating mb-2">
                        <input type="email" className={`form-control is-${validity[1]}valid`} id="floatingInput" placeholder="name@example.com" onChange={EmailChange}/>
                        <label for="floatingInput" > {svgcolor[1]? svg.coloredUser : svg.user} Email address</label>
                        <div className="invalid-feedback">
                            {error[1]}
                        </div>
                    </div>

                    <div className="form-floating mb-2 ">
                        <input type="password" className={`form-control form-control is-${validity[2]}valid`} id="floatingPassword" placeholder="Password" onChange={PwdChange} />
                        <label for="floatingPassword">{!svgcolor[2]? svg.lock : svg.coloredLock} Password</label>
                        <div className='invalid-feedback'>
                            {error[2]}
                        </div>
                    </div>


                    <div className="form-floating mb-2 ">
                        <input type="password" className={`form-control form-control is-${validity[3]}valid`} id="floatingPassword" placeholder="Password" onChange={confirmPwd} />
                        <label for="floatingPassword">{!svgcolor[3]? svg.lock : svg.coloredLock}Confirm Password</label>
                        <div className='invalid-feedback'>
                            {error[3]}
                        </div>
                    </div>
                    
                    <button type='submit' className='btn btn-primary btn-lg mt-2 rounded-5 Signup-btn'>Signup</button>
                </div>
            </div>
        </form>
    )
}
export default SignUp

// email svg
// confirm password login
// same ids at multiple places
// className instead of class
// registration successful message
// testing
// checking values when submit