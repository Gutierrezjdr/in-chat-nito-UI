import React, { Component } from 'react';

import styles from '../App.css';

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const message = {
            from: this.props.name,
            text: this.state.text
        };
        this.props.onMessageSubmit(message);
        this.setState({
            text: ''
        });
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    render() {
        return (
            <form 
                onSubmit = { e => this.handleSubmit(e)}
            >
                <input 
                    
                    onChange = { e => this.handleChange(e)}
                    value = { this.state.text}
                    placeholder = 'Message'
                />
            </form>
        );
    }    
}

export default MessageForm;