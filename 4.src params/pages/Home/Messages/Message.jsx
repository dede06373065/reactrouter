import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
    state={
        messageArr:[
            {
                id:'1',
                title:'message 01'
            },
            {
                id:'2',
                title:'message 02'
            },
            {
                id:'3',
                title:'message 03'
            },
        ]
    }
    render() {
        const {messageArr}=this.state
        return (
            <div>
                <ul>
                    {
                    messageArr.map((msgObj)=>{
                        return (
                            <li key={msgObj.id}>
                                <Link to ={`/home/messages/detail/${msgObj.id}/${msgObj.title}`} >{msgObj.title}</Link>
                            </li>
                        )
                    })
                    }
                </ul>
                <hr/>
                <Route path="/home/messages/detail/:id/:title" component={Detail}/>
            </div>
        )
    }
}
