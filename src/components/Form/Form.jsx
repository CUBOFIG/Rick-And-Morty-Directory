import React, { useContext } from 'react'
import { CategoryContext } from '../../containers/Usercontext'
import { Row, Col } from 'react-bootstrap'

const Form = () => {

  const {
    afterHome,
    datazo,
    dimention,
    home,
    setAfterhome,
    sethome,
    setInit,
    setResidents,
    setSpinner
  } = useContext(CategoryContext);

  const submitForm = (e) => {
    e.preventDefault();
    setSpinner(true)
    setInit(true);

    setTimeout(() => {
      if (afterHome !== home) {
        setResidents([])
        datazo();
        setAfterhome(home)
      }
      setSpinner(false)
    }, 3000);
  }

  return (

    <form className="col-12" onSubmit={submitForm}
    >
      <fieldset className="text-center">
        <legend>Busca por dimension.</legend>
      </fieldset>
      <Row className="mt-4">
        <Col md="6 mb-2">
          <select
            className="form-control"
            name="category"
            id="category"
            onChange={(e) => { sethome(e.target.value) }}
          >
            <option>-- Selecciona Categoría --</option>
            {dimention.map((drink, index) => (
              <option
                key={index}
                value={drink.name}
              >
                {drink.name} </option>
            ))}
          </select>
        </Col>
        <Col md="6 mb-2" >
          <input
            type="submit"
            value="Buscar Residentes"
            className="btn btn-block btn-info w-100"
          />
        </Col>
      </Row>
    </form>

  )
}

export default Form
