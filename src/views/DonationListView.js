import React, { Component } from 'react';
import DonationList from '../components/DonationList/DonationList';

import { connect } from 'react-redux';

class DonationListView extends Component {

    donationSelected = id => {
        this.props.history.push(`/donations/${id}`)
    }

    render() {
        console.log(this.props)
        return (
            <DonationList donationSelected={this.donationSelected} donations={this.props.donations}/>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        donations: state.donations
    }
}
export default connect(mapStateToProps, {})(DonationListView);