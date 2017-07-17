import React from 'react'

class RegistrationForm extends React.Component{

  render(){
    return (
      <form>
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
        <button type="submit" value="submit"/>
      </form>
    )
  }
}

export default RegistrationForm
