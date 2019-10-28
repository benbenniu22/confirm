import React from 'react';
import confirm from '../confirm/index'

class Test extends React.Component{
    async componentDidMount(){
        let res = await confirm('确认删除吗');
        if(res) {
            console.log("是")
        } else {
            console.log("否")
        }
    }
    render(){
        return (
            <div>Test</div>
        )
    }
}

export default Test;