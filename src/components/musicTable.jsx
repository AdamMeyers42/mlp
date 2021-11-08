import React, { Component } from 'react';


class MusicTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: this.props.songs
        }
    }
    
    render() { 
        return (
            for (i=0; i < this.props.songs.length; i++){
                 <tr>
                    <th>{this.props.songs[0].title}</th>
                    <th>{this.props.songs[0].artist}</th>
                    <th>{this.props.songs[0].album}</th>
                    <th>{this.props.songs[0].release_date}</th>
                    <th>{this.props.songs[0].genre}</th>
                </tr>
          )};
    }
}
 
export default MusicTable;
