import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const [count,setCount]=React.useState(0)

    function add(){
        setCount(count=>count+1)
    }
    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    React.useEffect(()=>{
        let timer=setInterval(()=>{
            setCount(count=>count+1)
        },1000)  
        return (()=>{
            clearInterval(timer)
        })
    },[])
//useEffect()componentDidMount,componentDidUpdate,componentUnmount;
    return (
        <div>
            <h2>当前求和为：{count}</h2>
            <button onClick={add}>press me plus one</button> 
            <button onClick={unmount}>Unmount Components</button>      
        </div>
    )
}

export default App
