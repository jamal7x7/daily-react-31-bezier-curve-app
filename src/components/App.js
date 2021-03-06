import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Bezier Curve App</h1>
  </header>
)

const Items = (props) => (
  <div className=' artboard ' onMouseMove={props.handleMouseMove} onClick={props.handleClick}>

    <svg className='svg' viewBox='0 0 1000 700'  height= '700' width= '1000' >

      {/* <path d='M 10 20 C 100 150 200 200 130 280 ' 
        stroke='pink' 
        fill='none' 
      />

      <path d='M 10 20 L 100 150  ' 
        stroke='white' 
        fill='none' 
      />

      <circle cx='100' cy='150' r='5' fill='purple'/>
      <circle cx='200' cy='200' r='5' fill='purple'/>
    <circle cx='130' cy='280' r='5' fill='purple'/> */}
    { (props.points.length > 0) && <circle cx={props.points[0][0]} cy={props.points[0][1]} r='5' fill='violet'/>}
       
       
    <path d={ props.start.join(' ') + props.straight.join(' ')} stroke='none' fill='#041A3E' opacity='0.3'/>
    <path d={ props.start.join(' ') + props.straight.join(' ')} stroke='white' fill='none' />


    { props.verticesAdded.map( (v, i) => {
      return <circle key= {i} cx={v[0]} cy={v[1]} r='5' fill='violet' />
    })}

    
   
      
      
      
    </svg>
  </div>
)

const Menu = (props) => (
  <div className='side-bar'>
    <div className='menu-icones'>

      <div className="reset" onClick={props.reset}>reset</div>

    </div>
  </div>
)

class BezierCurveApp extends Component {
  
  state = {
    pointX: 0,
    points: [],
    verticesAdded: [],
    straight: [],
    start: []

  }
  


  handleMouseMove = (e) => {
    e.persist()
    // console.log(
    //   'onMouseMove',
    //   e.nativeEvent.clientX, e.nativeEvent.clientY
    // )

    const svg = document.body.querySelector('svg')
    const rect = svg.getBoundingClientRect()

    let x = e.nativeEvent.clientX - rect.left
    let y = e.nativeEvent.clientY - rect.top
    this.setState( (prevState) =>  ({
            points: [
              [x, y]
            ]
          })
    )
    
    
    // this.updateCState (this, e)
  }

  componentDidMount() {
    const svg = document.body.querySelector('svg')
    const rect = svg.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);

  }

  handleClick =(e) => {
    console.log('click')
    const svg = document.body.querySelector('svg')
    const rect = svg.getBoundingClientRect()

    let x = e.nativeEvent.clientX - rect.left
    let y = e.nativeEvent.clientY - rect.top
    this.setState( (prevState) =>  ({
            verticesAdded: [...prevState.verticesAdded, [x, y]]
          })
    )
    this.setState( (prevState) =>  ({
            straight: [...prevState.straight, 'L', x, y]
          })
    )
    this.setState( () =>  ({
            start: ['M', x, y]
          })
    )
    console.log(this.state.straight)


  }

  reset = (e) => {

    e.preventDefault()
    this.setState( () =>  ({
      verticesAdded: [],
      straight: [],
      start:[]
    }))
    
    console.log('reset')
  }


  render () {
    return (
      <div 
      className='App-container'>

        <Menu 
          reset={this.reset}
        />
        <Items 
          points={this.state.points}
          verticesAdded={this.state.verticesAdded}
          straight={this.state.straight}
          start={this.state.start}
          handleMouseMove={this.handleMouseMove}
          handleClick={this.handleClick}
          
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

