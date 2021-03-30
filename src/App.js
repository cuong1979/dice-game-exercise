import './App.css';
import React, { Component } from 'react'
import ShowResult from './Componet/ShowResult';


export default class App extends Component {
  constructor(){
    super();
    
    this.state= { 
    play:'' ,
    data:'',
    winner:''

    }
  }
    // dom tre tärningar 
  randomTärningar = () =>{
      const playRandomNumber1 = Math.ceil(Math.random() * 6 );
      const playRandomNumber2 = Math.ceil(Math.random() * 6 );
      const playRandomNumber3 = Math.ceil(Math.random() * 6 );
      const playRandomsum = playRandomNumber1 + playRandomNumber2 + playRandomNumber3
      console.log(playRandomsum)
      const dataRandomNumber1 = Math.ceil(Math.random() * 6 );
      const dataRandomNumber2 = Math.ceil(Math.random() * 6 );
      const dataRandomNumber3 = Math.ceil(Math.random() * 6 );
      const dataRandomsum = dataRandomNumber1 + dataRandomNumber2 + dataRandomNumber3

      this.setState({
        data: dataRandomsum,
        play: playRandomsum,

        firstKastPlay: playRandomNumber1,
        firstKastData: dataRandomNumber1,

        andraKastPlay: playRandomNumber2,
        andraKastData: dataRandomNumber2,

        tredjeKastPlay: playRandomNumber3,
        tredjeKastData: dataRandomNumber3, 
        
        


      })
      
       
    this.deklareraVinnare()
     
      
  }
   
deklareraVinnare =()=>{
  setTimeout(() => {
    
  if (this.state.play === this.state.data) {
    this.setState({
      winner: 'Lika'
    })

  } else if (this.state.play > this.state.data){
    this.setState({
      winner: ' player vann!'
    })

  }else{
    this.setState({
      winner: 'Data Vann!'
    })
  }
  }, 500);

}

  
  render() {
    return (
      <div className="wrapper">
        <h1 >Tre Tärnings Spel</h1><br />
        <div>
            <p>Play har: </p><br />
            <p> Första Kast = {this.state.firstKastPlay} </p>
            <p> Andra Kast = {this.state.andraKastPlay} </p>
            <p> tredje Kast = {this.state.tredjeKastPlay} </p>
        </div>
        <div className="dataRandom">
            <p> Data har: </p><br />
            <p> Första Kast = {this.state.firstKastData} </p>
            <p> Andra Kast = {this.state.andraKastData} </p>
            <p> tredje Kast = {this.state.tredjeKastData} </p>
        </div>
        <ShowResult play={this.state.play} data={this.state.data}/>
        <h4 className="vinner">{ this.state.winner }</h4>
        <button onClick={this.randomTärningar}>Kasta Tärningar</button>
      </div>
    )
  }
}
