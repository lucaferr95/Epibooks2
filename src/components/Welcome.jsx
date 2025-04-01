import Alert from "react-bootstrap/Alert";

function AlertWelcome() {
  return (
    <Alert
      variant="warning"
      className="bg-black w-100 m-0" // Assicurati che abbia w-100 e m-0 per non avere margini
      style={{ fontFamily: "'Special Elite', cursive" }}
    >
      <Alert.Heading className="fw-bold fs-4 text-white">Welcome in Epibooks</Alert.Heading>
      <p className="text-warning">Troverai qui il libro dei tuoi incubi</p>
      <hr />
      <p className="mb-0">
        <span className="text-info opacity-75">
          “Alcuni pensano che io sia una persona orribile, ma non è vero. - <br />
        </span>
     
        <span className="text-success opacity-75">
          Io ho il cuore di un bambino - 
        </span>
        <span className="fw-bold text-danger"> <br />
          in un barattolo sulla mia scrivania.” (Stephen King)
        </span>
      </p>
    </Alert>
  );
}

export default AlertWelcome;
