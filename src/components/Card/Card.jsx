import React, { useContext } from 'react'
import { Col, Card as CardResident } from 'react-bootstrap'
import { CategoryContext } from '../../containers/Usercontext'
import PropTypes from 'prop-types'

const Card = ({ resident }) => {

  const { name, episode, image } = resident;
  const { setData, setEpisode, setModal } = useContext(CategoryContext)

  return (
    <Col md="4" className="mb-2">
      <CardResident>
        <h3 className="card-header">{name}</h3>
        <img src={image} alt={`imageDe${name}`} className="card-img-top" />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-info w-100"
            onClick={() => {
              setData(resident);
              setModal(true);
              setEpisode(episode)
            }}
          >
            Ver Informacion
          </button>
        </div>
      </CardResident>
    </Col>
  )
}

Card.propTypes = {
  resident: PropTypes.object.isRequired
}

export default Card
