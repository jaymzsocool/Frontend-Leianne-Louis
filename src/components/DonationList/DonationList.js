import React, { Component } from "react";

const DonationList = props => {
  return (
    <div>
      {props.donations.map(e => (
        <div onClick={() => props.donationSelected(e.id)} key={e.id}>
          <img src={`${e.image}`} alt={`${e.school}`}/>
          <h3>{e.school}</h3>
          <p>{e.donation} needed</p>
          <p>{e.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default DonationList;
