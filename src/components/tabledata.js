import React, { Component } from 'react';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

class TableData extends Component {
    constructor(props) {
        super(props);
        this.cellvalue = this.cellvalue.bind(this);

    }
    cellvalue(val) {
        let classval;
        if (val > 0 ? classval = "success" : classval = "failure")
            return classval;

    }

    render() {
        console.log(this.props.cdata);
        return (this.props.cdata.data.coins_available ? (this.props.cdata.data.coins.data.map((coin) => <tr className="tabledata" key={coin.id}>
            <td>{coin.cmc_rank}</td>
            <td><Link to={`coin/${coin.id}`}><button type="button" className="btn btn-default headerbtn">{coin.symbol}</button></Link></td>
            <td>{coin.name}</td>
            <td>{numeral(coin.quote.USD.price).format('$0,0.00')}</td>
            <td>{numeral(coin.quote.USD.market_cap).format('$0,0')}</td>
            <td>{numeral(coin.circulating_supply).format('0,0')}{coin.symbol} </td>
            <td>{numeral(coin.max_supply).format('0,0')}{coin.symbol}</td>
            <td className={this.cellvalue(coin.quote.USD.percent_change_1h)}>{numeral(coin.quote.USD.percent_change_1h).format('0.00')}%</td>
            <td className={this.cellvalue(coin.quote.USD.percent_change_24h)}>{numeral(coin.quote.USD.percent_change_24h).format('0.00')}%</td>
            <td className={this.cellvalue(coin.quote.USD.percent_change_7d)}>{numeral(coin.quote.USD.percent_change_7d).format('0.00')}%</td>
        </tr>)) : "loading")

    }
}
export default TableData;