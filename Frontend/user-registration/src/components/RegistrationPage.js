import React , {useState} from 'react';
import './RegistrationPage.css'
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';


export default function RegistrationPage() {
    const [formTitle, setFormTitle] = useState('Login');
    const [messageClass, setMessageClass] = useState('');
    const [message, setMessage] = useState('');
    const [loginData, setLoginData] = useState({
        email:'',
        password:''
    });
    const [signUpData, setSignUpData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    });

    const clickSignUp = ()=> {setFormTitle('Sign Up'); setMessage(''); setMessageClass('')};
    const clickLogin = ()=> { setFormTitle('Login'); setMessage(''); setMessageClass('')};

    function handleChange(e){
        if(formTitle==='Login'){
            setLoginData(prev=>({
                ...prev,
                [e.target.name]:e.target.value
            }))
        }else if (formTitle==='Sign Up'){
            setSignUpData((prev)=>({
                ...prev,
                [e.target.name]:e.target.value
            }))
        }
    }

    async function handleSubmit(e){
        e.preventDefault();
        if(formTitle==='Login'){
            try{
                const response = await fetch('http://localhost:8000/login',{
                    method:'POST',
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(loginData)
                })
                const data = await response.json();
                console.log(data);
                console.log(data.message);
                console.log(data.class);
                setMessage(data.message );
                setMessageClass(data.class);
            }catch(error){
                setMessage('Request failed. Try again.');
                setMessageClass("message danger");
                console.error('Error:', error);
            }
        }else if(formTitle==='Sign Up'){
            try{
                const response = await fetch('http://localhost:8000/signup',{
                    method:'POST',
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(signUpData)
                })
                const data = await response.json();
                console.log(data);
                setMessage(data.message );
                setMessageClass(data.class );
                if(response.status===200){
                    setTimeout(()=>{
                        setFormTitle('Login');
                        setMessage('Login to your Account');
                        setMessageClass('success message');
                        setLoginData({
                            email:signUpData.email,
                            password:signUpData.password
                        })
                        setSignUpData({
                            name:'',
                            email:'',
                            password:'',
                            confirmPassword:''
                        })
                    },2000)
                }

            }catch(error){
                setMessage('Request failed. Try again.');
                setMessageClass("message danger");
                console.error('Error:', error);
            }
        }
    }




    
    return (
    <div className='loginpage'>
        <div className="left-container">
            <h1>Welcome Back</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur </p>

        </div>
        <div className="right-container">
            <div className="btn-div">
                <button type='button' className={formTitle==='Login'? 'btn active': 'btn disable'} id="login-btn" onClick={clickLogin}>Login</button>
                <button type='button' className={formTitle==='Sign Up'? 'btn active': 'btn disable'} id="signup-btn" onClick={clickSignUp}>Sign Up</button>
            </div>
       
            <form onSubmit={handleSubmit} className='login-form'>

                {formTitle==='Login'?
                <LoginForm loginData={loginData} handleChange={handleChange} formTitle={formTitle} clickSignUp={clickSignUp} />
                :
                <SignUpForm signUpData={signUpData} handleChange={handleChange} formTitle={formTitle} />
                }
            </form>
            
            <div className={messageClass}>
                {message}
            </div>
        </div>
    </div>
  )
}

