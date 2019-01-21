import React, { Component } from 'react';
import TableData from './tabledata';
import * as actions from '../redux/actions/fetchActions';


class TableHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            convert : 'USD'
        }
    }
    componentDidMount() {
         this.props.dispatch(actions.fetchall("market_cap",this.props.cdata.data.convert,"0"));
    }

    render() {
        let convert = this.props.cdata.data.convert;
        let start = this.props.cdata.data.start;
        
        return <div className="table-responsive mainTable">
            <table className="table table-striped">
                <tbody>
                    <tr className="tableheaders">
                        <th><button type="button" className="btn btn-default headerbtn" onClick={() => this.props.dispatch(actions.fetchall("market_cap",convert,start))}>Rank</button></th>
                        <th><button type="button" className="btn btn-default headerbtn" onClick={() => this.props.dispatch(actions.fetchall("symbol",convert,start))}>symbol</button></th>
                        <th><button type="button" className="btn btn-default headerbtn" onClick={() => this.props.dispatch(actions.fetchall("name",convert,start))}>Name</button></th>
                        <th><button type="button" className="btn btn-default headerbtn" onClick={() => this.props.dispatch(actions.fetchall("price",convert,start))}>Price</button></th>
                        <th><button type="button" className="btn btn-default headerbtn" onClick={() => this.props.dispatch(actions.fetchall("market_cap",convert,start))}>Market Cap</button></th>
                        <th><button type="button" className="btn btn-default headerbtn" onClick={() => this.props.dispatch(actions.fetchall("circulating_supply",convert,start))}>Circulating supply</button></th>
                        <th><button type="button" className="btn btn-default headerbtn" onClick={() => this.props.dispatch(actions.fetchall("max_supply",convert,start))}>Max supply</button></th>
                        <th><button type="button" className="btn btn-default headerbtn" onClick={() => this.props.dispatch(actions.fetchall("percent_change_1h",convert,start))}>change 1hr</button></th>
                        <th><button type="button" className="btn btn-default headerbtn" onClick={() => this.props.dispatch(actions.fetchall("percent_change_24h",convert,start))}>change 24hrs</button></th>
                        <th><button type="button" className="btn btn-default headerbtn" onClick={() => this.props.dispatch(actions.fetchall("percent_change_7d",convert,start))}>change 7days</button></th>
                    </tr>
                    {!this.props.cdata.data.coins_available ? <tr><td>loading</td></tr> :
                        <TableData {...this.props} />
                    }
                </tbody>
            </table>
        </div>
    }
}


export default TableHeader;
