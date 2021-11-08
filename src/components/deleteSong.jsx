import axios from 'axios';




const deleteSong = async (props) => {
   await axios.delete('http://127.0.0.1:8000/music/{this.props.songId}')
  }

export default deleteSong;