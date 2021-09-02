import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = { categorias: [] };
  }

  componentDidMount() {
    this.props.categorias.inscrever(this.novasCategorias.bind(this));
  }

  novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  handleEventoInput(evento) {
    if (evento.key === "Enter") {
      let valorCategoria = evento.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => (
            <li key={index} className="lista-categorias_item">
              {" "}
              {categoria}{" "}
            </li>
          ))}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar uma categoria.."
          onKeyUp={this.handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
