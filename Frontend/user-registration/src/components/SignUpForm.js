
export default function SignUpForm({signUpData, handleChange, formTitle}) {
  return (
    <>
        <input
        type="text"
        name="name"
        value={signUpData.name}
        onChange={handleChange}
        placeholder="Name"
        />
        <input
        type="email"
        name="email"
        value={signUpData.email}
        onChange={handleChange}
        placeholder="Email"
        />
        <input
        type="password"
        name="password"
        value={signUpData.password}
        onChange={handleChange}
        placeholder="Password"
        />
        <input
        type="password"
        name="confirmPassword"
        value={signUpData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password"
        />

        <input 
        type="submit" 
        className='submit-btn' 
        value={formTitle} />

    
    </>
  )
}