import React from 'react';
import Entrada from '../components/Entrada/Entrada';
import clases from './App.module.css';
import Header from '../components/Header/Header';
import Validation from '../components/Validation/Validation';
import Char from '../components/Char/Char';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parrafo: '',
      tamaño: '0',
      validar: '',
      char: [
        { letra: '' }
      ],
      array: [],
      textoValidation: [
        { nombre: 'Texto demasiado corto' },
        { nombre: 'Texto suficientemente largo' }
      ]
    }
  }

  cambiaParrafo = (event) => {
    this.setState({
      parrafo: event.target.value
    })
    if (this.state.parrafo.length < 5) {
      this.setState({
        validar: this.state.textoValidation[0].nombre
      })
      this.partirString(event);
    } else {
      this.setState({
        validar: this.state.textoValidation[1].nombre
      })
      this.partirString(event);
    }
  }

  borraChar = (id) => {
    let caracteres = [...this.state.array];
    caracteres.splice(id,1)
    let reducir = caracteres.join("");
    console.log(reducir);
    this.setState({
      array: caracteres,
      parrafo: reducir
    })
  }

  partirString = (event) => {
    const string = event.target.value;
    const aux = string.split("");
    this.setState({
      array: aux
    })
  }

  render() {

    let listachars = null;
    listachars = (
      <div>
        {this.state.array.map((caracter, id) => {
          return <Char letra={caracter}
            key={id}
            borrando={() => this.borraChar(id)}
          />
        })}
      </div>
    )

    return (
      <div className={clases.App}>
        <Header titulo={this.props.titulo} />
        <Entrada parrafo={this.state.parrafo} cambiandoparrafo={this.cambiaParrafo} />
        <Validation tamaño={this.state.parrafo.length} validar={this.state.validar} />
        {listachars}
      </div>
    )
  }

}

export default App;
