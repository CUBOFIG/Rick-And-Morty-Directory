import React from 'react'
import Image from '../../img/port.png'
import { Row, Col } from 'react-bootstrap'

const Header = () => {

  return (
    <header className="pt-1 pb-2 wallpaper">
      <Row className="m-0">
        <Col md="12">
          <Col className="d-flex justify-content-center">
            <img src={Image} alt="logo" className="img" />
          </Col>
          <Col >
            <h1 className="title" >BUSCADOR RICK AND MORTY</h1>
          </Col>
        </Col>
      </Row>

    </header>
  )
}

export default Header
