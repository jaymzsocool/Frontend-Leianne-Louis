import React from 'react';
import { connect } from 'react-redux';

import Donation from '../components/Donation/Donation';

const DonationView = props => {
    console.log(props)
    return (
        <Donation {...props} donations={props.donations} />
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        donations: state.donations
    }
}
export default connect(mapStateToProps, {})(DonationView);