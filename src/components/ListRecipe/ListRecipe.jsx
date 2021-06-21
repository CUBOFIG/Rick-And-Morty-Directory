import React, { useContext, useEffect } from 'react'
import { CategoryContext } from '../../containers/Usercontext'
import FontAwesomeIcon from '../../shared/FontAwesomeIcon'
import Card from '../Card/Card'
import { Modal } from 'react-bootstrap'
import axios from 'axios'

const ListRecipe = () => {
  const { act, data, episode, init, modal, residents, setModal, setResidents } = useContext(CategoryContext);

  const datos = () => {
    act.forEach((element) => {
      const getapis = async () => {
        const url = element;
        const categorys = await axios.get(url)
        setResidents((prevState) => {
          return [...prevState, categorys.data]
        })
      }
      getapis();
    })
  }

  const divideString = (cadenaADividir) => {
    var arrayDeCadenas = cadenaADividir.split("/");
    const x = `${arrayDeCadenas[4]}-${arrayDeCadenas[5]}`
    return x
  }

  useEffect(() => {
    if (act.length >= 1) {
      datos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [act])


  const print = (act.length >= 1)
    ? residents.map((e, index) => <Card key={index} resident={e} />)
    : <h1 className="mt-5">Esta dimension no tiene residentes</h1>


  return (
    <>
      <div className="mt-4 row">
        {init ? print : null}
      </div>

      <Modal show={modal} onHide={() => setModal(false)}>
        <Modal.Header>
          <Modal.Title>{data.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mb-2">
            <div className="d-flex">
              <div className="align-items-center">
                <FontAwesomeIcon icon="heart" />
              </div>
              <h5 className="mx-2">
                Estado: {data.status}
              </h5>
            </div>

            <div className="d-flex">
              <div className="align-items-center">
                <FontAwesomeIcon icon="user-tag" />
              </div>
              <h5 className="mx-2">
                Especie: {data.species}
              </h5>
            </div>

            <div className="d-flex">
              <div className="align-items-center">
                <FontAwesomeIcon icon="venus-mars" />
              </div>
              <h5 className="mx-2">
                Genero: {data.gender}
              </h5>
            </div>
          </div>
          <img src={data.image} alt="" className="w-100" />
          <div>
            <h3>Lista de apariciones.</h3>
            <div className="row">
              {episode.map((e, i) => (
                <div className="col-6" key={i}>
                  <li>{divideString(e)}</li>
                </div>
              ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )

}

export default ListRecipe
