import React from 'react';

class Entrada extends React.Component {
    componentDidMount(){
        console.log('<Entrada> se ha montado');
    }

    componentWillUnmount(){
        console.log('<Entrada> se va a demsontar');
    }
    render() {
        return (
            <div>
                <p>Introduce un frase:</p>
                <input type="text" onChange={this.props.cambiandoparrafo} value={this.props.parrafo} />
            </div>
        )
    }
}

export default Entrada;