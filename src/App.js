import React, { Component } from 'react'
import Navbar from './Component/Navbar';
// import Hello from './Component/Hello'
import Footer from './Component/Footer'
// import Article from './Component/Article';
import Parent from './Component/Parent'
//import proposal
import Proposal from './komponen/props'

class App extends Component {
  constructor(){
    super();
    // this.state = {name: 'Andi', age: 21}
    // Konsep state : ada nama state, setstate
    this.state = {name: 'Andi'}
  }

  render(){
    setTimeout(() => {
      this.setState({ name: 'Fateh' });
    }, 3000)
    let teks = '@Copyright By Ano'
    let data = {id:'gembelmasalalu', email:'gembel@mail.com',pwd:'123'}
    var text = 'Copyright 2021'
    var user = {username: 'User 1', email: 'user@mail.com'}
    return (
      <div>
        <Navbar />
        <h1>Hi {this.state.name}</h1>
        {/* <h1>{this.state.age} Years Old</h1> */}
        {/* <Hello text='Welcome Reactjs 1' /> */}
        {/* <Hello text='Welcome Reactjs 2' /> */}
        {/* <Article userLogin='sudah login' /> */}
        <Parent />
        <Footer content={text} username={user.username} email={user.email} />
        <Proposal konten={teks} ID={data.id} Email={data.email} Pwd={data.pwd}/>
      </div>
    )
  }
}

export default App;
