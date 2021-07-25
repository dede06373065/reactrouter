import React, { Component } from 'react'
const dataDetails = [
    {
        id: '1',
        title: 'message 01',
        content: 'hello,dear!'
    },
    {
        id: '2',
        title: 'message 02',
        content: 'hello,my skills!'
    },
    {
        id: '3',
        title: 'message 03',
        content: 'hello, your future!'
    },
]
export default class Detail extends Component {
    render() {
        const { id } = this.props.match.params
        const findResult = dataDetails.find((findObj) => {
            return findObj.id === id

        })
        console.log(this.props)
        return (
            <ul>
                <li>{findResult.id}</li>
                <li>{findResult.title}</li>
                <li>{findResult.content}</li>
            </ul>
        )
    }
}
