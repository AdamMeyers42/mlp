import React, { Component } from 'react';
import deleteSong from './deleteSong'


class MusicTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: this.props.songs
        }
    }
    
    render() { 
        return (
            <table>
                <tr>
                    <th>Title</th>    
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                    <th>Action</th>
                </tr>
                {this.props.songs.map(function(song){
                    return(
                        <tr>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <td><button>Edit</button><button onClick={deleteSong(song.Id)}>Delete</button></td>
                        </tr>
                    )
                    })}
            </table>
          );
    }
}
 
    
export default MusicTable;
