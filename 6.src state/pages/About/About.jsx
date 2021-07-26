import React, { Component } from 'react'

export default class About extends Component {
    render() {
        console.log('路由组件其实收到东西了：',this.props)
        return (
            <div>
               <h2>About</h2>
            </div>
        )
    }
}
