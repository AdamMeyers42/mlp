import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from './components/musicTable';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
      }
  }
  
  componentDidMount(){
    this.getAllSongs();
  }

  getAllSongs = async () => {
    let response = await axios.get('http://127.0.0.1:8000/music/');
    this.setState({
      songs: response.data
    })
  }

  render() { 
    console.log(this.state.songs)
    return (
      <div>
      <MusicTable songs={this.state.songs}/>
      </div>
      );
  }
}
 
export default App;