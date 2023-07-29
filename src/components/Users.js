import React, { Component } from 'react'

export default class Users extends Component {
    render() {
        if (true) {
            // throw new console.error('custom error..');
            throw new Error('custom error..');
        }
        return (
            <div>
                <h1>User Component</h1>
            </div>
        )
    }
}
