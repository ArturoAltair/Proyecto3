import React from 'react';

class Validation extends React.Component {
    componentDidMount(){
        console.log('<Validation> se ha montado');
    }

    componentWillUnmount(){
        console.log('<Validation> se va a demsontar');
    }
    render() {
        return (
            <div>
                <p>El tamaño del parrafo es de: {this.props.tamaño}</p>
                <p>Este {this.props.validar}</p>
            </div>
        )
    }
}

export default Validation;