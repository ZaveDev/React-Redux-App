import React, {useEffect, useState} from 'react';
import axios from 'axios'

const Spell = ({spell}) => {
  const [desc, setDesc]= useState({
    list:[],
    display: false,
  });

  useEffect(() => {
    axios.get(`https://www.dnd5eapi.co${spell.url}`)
      .then(res => {
        setDesc({...desc, list: res.data.desc});
      })
  }, []);

  const toogleDisplay = () => {
    setDesc({...desc, display: !desc.display})
  }

  return (
    <div onClick={toogleDisplay} className={desc.display ? "spell-wide" : "spell"}>
      <h4>{spell.name}</h4>
      <div className={desc.display ? "show" : "hide"}>
        {desc.list && desc.list.map(D => {
          return <p>{D}</p>
        })}
      </div>
    </div>
  )
}

export default Spell 