import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import * as actions from '../redux/actions/fetchActions';
import TableHeader from './tableHeader';
import styles from '../styles/styles.css';
import {Route} from 'react-router-dom';
import Coin from './coin.js';
class Main extends Component {
    
    componentDidMount() {
        console.log("mounted");
    }
    render() {
        console.log("rendered");
        //  console.log(this.props.cdata);
        //  console.log(this.props.cdata.data.data_available);

        return <div className="">
            <Route exact path="/" component={TableHeader}/>
            <Route path="/coin/:id" component={Coin}/>
            
        </div>
    }
}

export default Main;

/*function mapStateToProps(state) {

    return {
        cdata: state
    }

}

export default connect(mapStateToProps)(Main) */