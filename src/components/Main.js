import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TableHeader from './tableHeader';
import styles from '../styles/styles.css';
import { Route, Link } from 'react-router-dom';
import Coin from './coin.js';
import DropDown from './dropdown';
import Pagination from './pagination';

class Main extends Component {


    render() {

        return <div className="parentdiv">
        <div className="header">
        <Link to="/"><p className="headerTag">CRYPTOCOINS</p></Link>
        </div>
            <Route exact path="/" render={() => (
                <React.Fragment>
                    <DropDown {...this.props}/>
                    <TableHeader {...this.props} />
                    <Pagination {...this.props}/>
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