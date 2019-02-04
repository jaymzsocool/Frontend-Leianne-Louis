import React from 'react';

const Donation = props => {
    console.log(props)
    const donation = props.donations.find(e => `${e.id}` === props.match.params.id)
    return (
        <>
            <h2>{donation.school}</h2>
            <p>{donation.about}</p>
            <p>{donation.donation}</p>
        </>
    )
}

export default Donation;