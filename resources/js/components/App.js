import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            body: ''
        }
        //bind
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        this.postdata()
        console.log(this.state.body)
    }

    handleChange(e) {
        this.setState({
            body: e.target.value
        });
    }

    postdata() {
        axios.post('/posts', {
            body: this.state.body
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">tweet something..</div>

                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <textarea
                                            onChange={this.handleChange}
                                            className="form-control"
                                            rows="5"
                                            maxLength="140"
                                            placeholder="whats up?"
                                            required
                                        />
                                    </div>
                                    <input
                                        type="submit"
                                        value="POST"
                                        className="form-control"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">App Component</div>

                            <div className="card-body">I'm an App component!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
