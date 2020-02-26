import React, { Component } from 'react'
import 'es6-promise';
import 'isomorphic-fetch';

export class Page1 extends Component {

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then((obj) => console.log(obj));
    }
    render() {
        return (
 <h1>This is page 1</h1>
        )
    }
}

export default Page1

