import { Component } from "react";
//QUI ABBIAMO IL SINGLE BOOK CON FUNCTION
/*const SingleBook = function (props) {

  return (
    <div className="card h-100 bg-info opacity-75">
    <img
      src={props.book.img}
      alt={"immagine di " + props.book.title}
      className="d-block mx-auto "
      style={{
        width: "100%",
        height: "300px",
        objectFit: "cover",
      }}
    />
    <div className="card-body d-flex flex-column justify-content-between">
    <h5 className="d-flex flex-column  flex-grow-1">{props.book.title}</h5>
    <p className="mb-0">€ {props.book.price}</p>
   <button className="bg-black opacity-75 "><a href={props.book.shoplink}>ACQUISTA ORA</a></button>
  </div>
  </div>
  );
};

export default SingleBook;
/ */

//QUA ANDIAMO A FARE IL SINGLEBOOK CON CLASS (GLI HO DATO GIA' L'IMPOSTAZIONE CON LE CARDS PERSONALIZZATE)

class SingleBook extends Component {
  render() {
    return (
      <div className="card h-100 bg-info opacity-75">
        <img
          src={this.props.book.img}
          alt={"immagine di " + this.props.book.title}
          className="d-block mx-auto"
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="d-flex flex-column flex-grow-1">{this.props.book.title}</h5>
          <p className="mb-0">€ {this.props.book.price}</p>
          <button className="bg-black opacity-75">
            <a href={this.props.book.shoplink} className="text-white text-decoration-none">
              ACQUISTA ORA
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default SingleBook;
