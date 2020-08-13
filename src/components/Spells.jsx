import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSpells } from "../store";

import Spell from './Spell'

const Spells = props => {
 
  useEffect(() => {
    props.fetchSpells()
  }, []);


  return(
    <>
    <h1>🔥DND SPELLS🔥</h1>
      {props.isLoading ? <h4>Loading spells now...</h4> : null}

      {props.error ? (
        <p style={{ color: "red" }}>
          {props.error}
        </p>
      ) : null}

      {props.spells.length > 0 ? (
        <div className='spell-container' >
          {props.spells.map((spell) => {
            return(
              <Spell key={spell.index} spell={spell}/>
            )
          })}
        </div>
      ) : null}
    </>
  )
}
const mapStateToProps = state => {
  return {
    spells: state.spells,
    isLoading: state.isLoading,
    error: state.error,
  }
}
export default connect(mapStateToProps, {fetchSpells})(Spells)