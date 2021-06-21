import React, { Fragment, useContext } from 'react'
import Header from './components/Header/Header.jsx'
import Form from './components/Form/Form.jsx'
import ListRecipe from './components/ListRecipe/ListRecipe.jsx'
import { Row, Col } from 'react-bootstrap'
import Spinner from './components/Spinner/Spinner.jsx'
import { CategoryContext } from './containers/Usercontext.jsx'

function App() {

  const { spinner } = useContext(CategoryContext)

  const component = (spinner) ? <Spinner /> : <ListRecipe />

  return (
    <Fragment>
      <Header />
      <div className="container mt-3">
        <Row>
          <Col>
            <Form />
          </Col>
        </Row>
        {component}
      </div>
    </Fragment>
  );
}

export default App;
