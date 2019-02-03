import React, { Component } from 'react';
import LuncherList from '../components/LuncherList/LuncherList';

import { connect } from 'react-redux';

class LuncherListView extends Component {

    lunchSelected = id => {
        console.log(true)
        console.log(id)
    }

    render() {
        return (
            <LuncherList lunchSelected={this.lunchSelected} lunches={this.props.lunches}/>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        lunches: state.lunches
    }
}
export default connect(mapStateToProps, {})(LuncherListView);