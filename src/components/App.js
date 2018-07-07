import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Bezier Curve App</h1>
  </header>
)

const Items = (props) => (
  <div className=' artboard '>

    <svg height= '300' width= '700' >
      <path d='M 10 20 C 100 150 200 200 130 280 ' 
        stroke='pink' 
        fill='none' 
      />
      <circle cx='100' cy='150' r='5' fill='purple'/>
      <circle cx='200' cy='200' r='5' fill='purple'/>
      <circle cx='130' cy='280' r='5' fill='purple'/>

      {/* <polygon points={'50,300 300,10 650,300'} /> */}
    </svg>
  </div>
)

const Menu = () => (
  <div className='side-bar'>
    <div className='menu-icones'>

      Menu

    </div>
  </div>
)

class BezierCurveApp extends Component {
  
  state = {
    
    currentPrice: 6677,
    points: []
  }

  

  componentDidMount() {
     
    
  }

 

  render () {
    return (
      <div 
      className='App-container'>

        <Menu />
        <Items 
       
        />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <BezierCurveApp />

  </div>
)

export default App

