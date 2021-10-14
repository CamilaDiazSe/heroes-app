import React from 'react'

export const LoginScreen = ({history}) => {

    const handleLogin =  () =>{
      history.push('/');
      // history.replace('/');
    }

    return (
        <>
          <h1>Login Screen</h1>
          <hr/>

          <button
            className="btn btn-primary"
            onClick= { handleLogin }
          >
              Login
          </button>  
        </>
    )
}
