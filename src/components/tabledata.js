import React, { Component } from 'react';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

class TableData extends Component {
    constructor(props) {
        super(props);
        this.cellvalue = this.cellvalue.bind(this);
        this.currency_format = this.currency_format.bind(this);

    }
    cellvalue(val) {
        let classval;
        if (val > 0 ? classval = "successs" : classval = "failure")
            return classval;

    }

    currency_format(val){
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: this.props.cdata.data.convert, currencyDisplay: 'symbol' }).format(val)
    }

    render() {
        console.log("-----------------");
        console.log(this.props.cdata.data.convert);
        console.log(this.props.cdata);
        let convert = this.props.cdata.data.convert;
        return (this.props.cdata.data.coins_available ? (this.props.cdata.data.coins.data.map((coin) => <tr className="tabledata" key={coin.id}>
            <td>{coin.cmc_rank}</td>
            <td><Link to={`coin/${coin.id}`}><button type="button" className="btn btn-default headerbtn">{coin.symbol}</button></Link></td>
            <td>{coin.name}</td>
            <td>{this.currency_format(coin.quote[convert].price)}</td>
            <td>{this.currency_format(coin.quote[convert].market_cap)}</td>
            <td>{numeral(coin.circulating_supply).format('0,0')}{coin.symbol} </td>
            <td>{numeral(coin.max_supply).format('0,0')}{coin.symbol}</td>
            <td className={this.cellvalue(coin.quote[convert].percent_change_1h)}>{numeral(coin.quote[convert].percent_change_1h).format('0.00')}%</td>
            <td className={this.cellvalue(coin.quote[convert].percent_change_24h)}>{numeral(coin.quote[convert].percent_change_24h).format('0.00')}%</td>
            <td className={this.cellvalue(coin.quote[convert].percent_change_7d)}>{numeral(coin.quote[convert].percent_change_7d).format('0.00')}%</td>
        </tr>)) : "loading")

    }
}
export default TableData;