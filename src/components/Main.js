import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TableHeader from './tableHeader';
import styles from '../styles/styles.css';
import { Route } from 'react-router-dom';
import Coin from './coin.js';
import DropDown from './dropdown';

class Main extends Component {

    componentDidMount() {
        console.log("mounted");
    }
    render() {
        console.log("rendered");
        //  console.log(this.props.cdata);
        //  console.log(this.props.cdata.data.data_available);

        return <div className="parentdiv">
        <DropDown {...this.props}/>
            <Route exact path="/" render={() => (
                <React.Fragment>
                    <TableHeader {...this.props} />
                </React.Fragment>
            )} />
            <Route path="/coin/:id" render={(match) => (
                <React.Fragment>
                    <Coin {...this.props} match={match}/>
                </React.Fragment>
            )} />

        </div>
    }
}



function mapStateToProps(state) {

    return {
        cdata: state
        
    }

}

export default withRouter(connect(mapStateToProps)(Main))