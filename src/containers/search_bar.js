import React from 'react';
import {connect} from 'react-redux';
import  {fetchWeather} from "../actions/index";



class SearchBar extends React.Component {

    constructor(props){
        super(props);

        this.state = {term: 'New York'};
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event){
        this.setState({term: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render(){
        return(
          <form onSubmit={this.onFormSubmit} className="input-group">
            <input
                placeholder="Get a five-day forecast in your favorite cities"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange} />
            <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
          </form>
        );
    }
}
export default connect(null, {fetchWeather})(SearchBar);