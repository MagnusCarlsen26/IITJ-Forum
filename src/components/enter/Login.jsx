/* eslint-disable no-unused-expressions */
import svg from './../../svg'
import React from 'react'
const Login = () => {

    const [validEmail,setValidEmail] = React.useState('f')
    const [validPwd,setValidPwd] = React.useState('f')
    
    const EmailChange = (e) => {
        const email = 'iitj.ac.in'
        const userEmail = e.target.value
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
        if(userEmail.length-index+1!==email.length && bool===1) {
            bool=2
        }
        if (bool===0) setValidEmail('f')
        if (bool===1) setValidEmail('')
        if (bool===2) setValidEmail('in')
    }

    return (
        <div className="d-flex h-100 align-items-center justify-content-center"> 
            <div className="h-75 w-50 bg-white d-flex justify-content-center flex-column p-5" style={{borderRadius:'25px'}}>
                <p className='text-center display-2 mb-5'>Login</p>
                <div className="form-floating mb-3 mt-5">
                    <input type="email" className={`form-control form-control is-${validEmail}valid`} id="floatingInput" placeholder="name@example.com" onChange={EmailChange}/>
                    <label for="floatingInput"> {svg.user} Email address</label>
                    <div class="invalid-feedback">
                        Enter an IITJ email.
                    </div>
                </div>
                <div className="form-floating mb-2">
                    <input type="password" className={`form-control form-control is-${validPwd}valid`} id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">{svg.lock} Password</label>
                </div>
                <p className='text-center mt-1 mb-5'>Forgot Password?</p>
                <button className='btn btn-primary btn-lg mt-5'>Login</button>
                <p className='mt-3 text-center'>Don't have an accout?<a href='#'>Sign Up</a> </p>
            </div>
        </div>
    )
}
export default Login