import React, {useEffect} from 'react'
import ReactDOM from 'react-dom';
import './index.scss'

const confirm  = (msg) => {
    let node = null;
    return new Promise((resolve, reject) => {
        const Conf = (props) => {
            useEffect(()=>{
                resolve(1)
            },[]);
            return (
                <div className="node-confirm">
                    <p className="node-confirm-msg">{props.msg}</p>
                    <button className="node-confirm-btn" onClick={(e)=>{
                        if(node){
                            ReactDOM.unmountComponentAtNode(node);
                            document.body.removeChild(node);
                        }
                    }}>确认</button>
                </div>
            )
        }
        node = document.createElement('div');
        node.className = 'node';
        document.body.appendChild(node);
        ReactDOM.render(<Conf msg={msg} />, node)
    })
}

export default confirm;