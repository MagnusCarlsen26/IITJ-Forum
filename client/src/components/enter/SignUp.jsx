/* eslint-disable no-unused-expressions */
import svg from './../../svg'
import React from 'react'
import './../../css/enter/enter.css'
import axios from 'axios'

const SignUp = () => {
    const [validEmail,setValidEmail] = React.useState('f')
    const [validPwd,setValidPwd] = React.useState('f')
    const [userClick,setUserClick] = React.useState(false)
    const [pwdClick,setPwdClick] = React.useState(false)

    const EmailChange = (e) => {
        const email = 'iitj.ac.in'
        const userEmail = e.target.value
        setEmail(userEmail)
        if (userEmail.length>0) setUserClick(true)
        else setUserClick(false)
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
            bool=2
        }
        if (bool===0) setValidEmail('f')
        if (bool===1) setValidEmail('')
        if (bool===2) setValidEmail('in')
    }

    const PwdChange = (e) => {
        const userPwd = e.target.value
        setPassword(userPwd)
        if (userPwd.length>7) setValidPwd(true)
        else setValidPwd(false)        
        console.log(userPwd)
        if (userPwd.length>0) setPwdClick(true)
        else setPwdClick(false) 
    }

    const [username,setUsername] = React.useState("")
    const [password,setPassword] = React.useState("")
    const [email,setEmail] = React.useState("")
    const onSubmit= async (event) => {
        event.preventDefault()
        try{
             await axios.post("http://localhost:5000/auth/register",{
                username,
                email,
                password
             })
             alert("NOW LOGIN REGISTRATION DONE.")
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="d-flex h-100 align-items-center justify-content-center Signup-page"> 
                <div className="h-75 w-50 bg-white d-flex justify-content-center flex-column p-5 signup-form" style={{borderRadius:'25px'}}>
                    <p className='text-center display-4 mt-5 mb-2'>Signup</p>
                    <div className="form-floating mb-2 mt-5">
                        <input type="text" className={`form-control is-${validEmail}valid`} id="floatingInput" placeholder="name@example.com" onChange={(event) => setUsername(event.target.value)}/>
                        <label for="floatingInput" > {userClick? svg.coloredUser : svg.user} Username</label>
                        <div className="invalid-feedback">
                            Enter an IITJ email.
                        </div>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="email" className={`form-control is-${validEmail}valid`} id="floatingInput" placeholder="name@example.com" onChange={EmailChange}/>
                        <label for="floatingInput" > {userClick? svg.coloredUser : svg.user} Email address</label>
                        <div className="invalid-feedback">
                            Enter an IITJ email.
                        </div>
                    </div>
                    <div className="form-floating mb-2 ">
                        <input type="password" className={`form-control form-control is-${!validPwd? 'd':''}valid`} id="floatingPassword" placeholder="Password" onChange={PwdChange} />
                        <label for="floatingPassword">{!pwdClick? svg.lock : svg.coloredLock} Password</label>
                    </div>
                    <div className="form-floating mb-2 ">
                        <input type="password" className={`form-control form-control is-${!validPwd? 'd':''}valid`} id="floatingPassword" placeholder="Password" onChange={PwdChange} />
                        <label for="floatingPassword">{!pwdClick? svg.lock : svg.coloredLock}Confirm Password</label>
                    </div>
                    
                    <button type='submt' className='btn btn-primary btn-lg mt-2 rounded-5 Signup-btn'>Signup</button>
                </div>
        </div>
    </form>
    )
}
export default SignUp

// email svg
// fix sign up
// confirm password login
// same ids at multiple places
// className instead of class