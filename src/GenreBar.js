import React, { Component } from 'react';
import CheckBox from './CheckBox.js';
import './GenreBar.css'


export default class GenreBar extends Component {
    constructor(props) {
        super(props);
        this.state = {genresToFilter: []}
    }
    updateGenres = () => {
        let checked = [];
        const checkboxes = document.querySelectorAll('.genreCheckBox:checked')
            checkboxes.forEach((elem) => {
            checked.push(elem.value)
    })
    this.setState({genresToFilter: checked});
    this.props.updateState({genresToFilter: this.state.genresToFilter})
    }
    render() {
        return (
            <div className="genre-bar search-section">
                <form onChange={this.updateGenres} className="genre-check">
                {
                    this.props.platforms.map((val, i) => {
                        return <CheckBox {...this.props}
                        />
                    })
                }
                </form>
                <button className="button">GENRES</button>
            </div>
        )
    }
}