import React, { Component } from 'react';
import TableData from './tabledata';
import * as actions from '../redux/actions/fetchActions';


class TableHeader extends Component {
   
    componentDidMount() {
       // this.props.dispatch(actions.fetchall("market_cap"));
    }

    render() {
        return <div className="table-responsive mainTable">
            <table className="table table-striped">
                <tbody>
                    <tr className="tableheaders">
                        <th><button type="button" className="btn btn-default headerbtn" onClick={() => this.props.dispatch(actions.fetchall("market_cap")) }>Rank</button></th>
                        <th><button type="button" className="btn btn-default headerbtn" onClick={() => this.props.dispatch(actions.fetchall("symbol")) }>symbol</button></th>
                        <th><button type="button" className="btn btn-default headerbtn" onClick={() => this.props.dispatch(actions.fetchall("name")) }>Name</button></th>
                        <th><button type="button" className="btn btn-default headerbtn" onClick={() => this.props.dispatch(actions.fetchall("price")) }>Price</button></th>
                        <th><button type="button" className="btn btn-default headerbtn" onClick={() => this.props.dispatch(actions.fetchall("market_cap")) }>Market Cap</button></th>
                        <th><button type="button" className="btn btn-default headerbtn" onClick={() => this.props.dispatch(actions.fetchall("circulating_supply")) }>Circulating supply</button></th>
                        <th><button type="button" className="btn btn-default headerbtn" onClick={() => this.props.dispatch(actions.fetchall("max_supply")) }>Max supply</button></th>
                        <th><button type="button" className="btn btn-default headerbtn" onClick={() => this.props.dispatch(actions.fetchall("percent_change_1h")) }>change 1hr</button></th>
                        <th><button type="button" className="btn btn-default headerbtn" onClick={() => this.props.dispatch(actions.fetchall("percent_change_24h")) }>change 24hrs</button></th>
                        <th><button type="button" className="btn btn-default headerbtn" onClick={() => this.props.dispatch(actions.fetchall("percent_change_7d")) }>change 7days</button></th>
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
