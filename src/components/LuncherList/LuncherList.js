import React, { Component } from "react";

const LuncherList = props => {
  return (
    <div>
      {props.lunches.map(e => (
        <div onClick={() => props.lunchSelected(e.id)} key={e.id}>
          <img src={`${e.image}`} alt={`${e.school}`}/>
          <h3>{e.school}</h3>
          <p>{e.donation} needed</p>
          <p>{e.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default LuncherList;
