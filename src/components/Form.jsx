/*  import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
class FormInput extends Component {
    state= {
        reservation: {
            name: '',
            phone: '',
            dateTime: ''
    }
    render () {
  return (
    <Container>
    <Row className='justify-content-center'
    <Col xs={12}, md{8}, lg{6}
    <Form>
    <Form.Group className="mb-3" "formBasicEmail">
      <Form.Label>Il tuo nome</Form.Label>
      <Form.Control type="text" required value={this.state.reservation.name}
      onChange={e} => this.setState({
        reservation: {
            this.state.reservation
            name: e.target.value
        }
      })/>
    </Form.Group>

    <Form.Group className="mb-3" "formBasicPassword">
      <Form.Label>Il tuo numero</Form.Label>
      <Form.Control type="tel" placeholder="Il tuo numero" required />
    </Form.Group>
    <Form.Group className="mb-3" "formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button> 

  </Form>
  <Col />
  <Row/>
    <Container/>
  );

}}

export default FormExample; --!>