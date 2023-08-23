/* eslint-disable jsx-a11y/alt-text */
import bg from './../../img/Login/bg-login.jpg'
import Login from './Login'
import SignUp from './SignUp'

const Enter = () => {
    return (
        <div className="container-fluid " style={{ height: '100vh' }}>
            <div className="row">
                <div className="col-6">
                    <img src="img/Login/iitj.jpg" style={{width:'100%',height:'100vh'}} />
                </div>
                <div className="col-6" style={{backgroundImage:`url(${bg})`,backgroundPosition:'center',backgroundSize:'100'}}>
                    <Login />
                </div>
            </div>
        </div>
    )
}
export default Enter