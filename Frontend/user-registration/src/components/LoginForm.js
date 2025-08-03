export default function LoginForm({loginData, handleChange, formTitle, clickSignUp}) {
  return (
    <>
        <input
        type="email"
        name="email"
        value={loginData.email}
        onChange={handleChange}
        placeholder="Email"
        />

        <input
        type="password"
        name="password"
        value={loginData.password}
        onChange={handleChange}
        placeholder="Password"
        />

        <div className="forget-pass">Forget Password ?</div>

        <input 
        type="submit" 
        className='submit-btn' 
        value={formTitle} />

        <div className="no-account">Don't have an account?  <span id='register' onClick={clickSignUp} >Register</span></div>

    </>
  )
}