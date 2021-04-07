import React from 'react';
import clases from './Char.module.css';

class Person extends React.Component {
    componentDidMount(){
        console.log('<Char> se ha montado');
    }

    componentWillUnmount(){
        console.log('<Char> se va a demsontar');
    }
    render() {
        return (
            <div className={clases.Char}>
                <p onClick={this.props.borrando}>{this.props.letra}</p>
            </div>
        )
    }
}

export default Person;