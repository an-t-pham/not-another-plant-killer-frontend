import React from 'react';

export default class CollectionInput extends React.Component {
    state = {
        name: ""
    }

    handleChange = (e) => {
        this.setState({
          name: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState({
            name: ""
         })
    }


    render() {
        return (
            <form onSubmit={this.onSubmit}>
                 <label>Collection Name: </label>
                 <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
                 <input type="submit" value="Submit" />
           </form>
        )
    }
}