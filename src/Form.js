import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            title: '',
            artist: '',
            album: '',
            release_date:'',
            genre: '',
            errors: {
                title: '',
                artist: '',
                album: '',
                release_date:'',
                genre: ''
            }
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(`Song Title: ${this.state.title} Song Artist: ${this.state.artist} Album: ${this.state.album} Release Date: ${this.state.release_date} Genre: ${this.state.genre}`)
    };

    render() { 
        return (  
            <form onSubmit={(event) => this.handleSubmit(event)}>
            <label>Song Title</label>
            <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
            <br/>
            <label>Song Arist</label>
            <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist}/>
            <br/>
            <label>Album</label>
            <input type="text" name="album" onChange={this.handleChange} value={this.state.album}/>
            <br/>
            <label>Release Date</label>
            <input type="text" name="release_date" onChange={this.handleChange} value={this.state.release_date}/>
            <br/>
            <label>Genre</label>
            <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre}/>
            <button type="submit" onClick={()=> alert("devCodeCamp!")}>Submit Song</button>
            </form>
        );
    }
}


export default Form;