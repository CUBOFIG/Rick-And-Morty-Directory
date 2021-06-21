import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const CategoryContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [residents, setResidents] = useState([])
  const [dimention, setdimention] = useState([])
  const [modal, setModal] = useState(null)
  const [spinner, setSpinner] = useState(false)
  const [data, setData] = useState({})
  const [act, setAct] = useState({})
  const [home, sethome] = useState("")
  const [afterHome, setAfterhome] = useState("")
  const [episode, setEpisode] = useState([])
  const [init, setInit] = useState(false)

  const datazo = () => {
    if (home !== "") {
      const x = dimention.filter(e => { return e.name === home })
      const z = x[0].residents
      setAct(z)
    } else {
      console.log("jala")
    }
  }

  useEffect(() => {
    const getCategoryss = async () => {
      const urll = "https://rickandmortyapi.com/api/location"
      const categoryss = await axios.get(urll)
      setdimention(categoryss.data.results)
    }

    getCategoryss();

  }, [home]);

  const values = {
    act,
    data,
    afterHome,
    datazo,
    dimention,
    episode,
    home,
    init,
    modal,
    residents,
    spinner,
    setAfterhome,
    setData,
    setEpisode,
    sethome,
    setInit,
    setModal,
    setResidents,
    setSpinner
  }

  return (
    <CategoryContext.Provider value={values}>
      {children}
    </CategoryContext.Provider>
  )

}


