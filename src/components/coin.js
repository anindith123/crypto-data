import React, { Component } from 'react';
import * as actions from '../redux/actions/fetchActions';
import numeral from 'numeral';
class Coin extends Component {
    constructor(props) {
        super(props);
        this.cellvalue = this.cellvalue.bind(this);
        this.currency_format = this.currency_format.bind(this);
    }


    cellvalue(val) {
        let classval;
        if (val > 0 ? classval = "successval" : classval = "failure")
            return classval;

    }

    currency_format(val){
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: this.props.cdata.data.convert, currencyDisplay: 'symbol' }).format(val)
    }

    componentDidMount() {

        console.log("mounted coin");
        this.props.dispatch(actions.getcoin(this.props.match.match.params.id,this.props.cdata.data.convert));
    }

    componentWillUnmount() {
        console.log("unmounted");
        this.props.dispatch(actions.reset());
    }





    render() {
        console.log(coin);
        let id = this.props.match.match.params.id;
        let coin = this.props.cdata.data.coin;
        let coin_meta = this.props.cdata.data.coin[1];
        let coin_quote = this.props.cdata.data.coin[0];
        let convert = this.props.cdata.data.convert;
        return <div>
            {coin[1] === undefined || coin[0] === undefined ?
                (<div>Loading...</div>) :
                <div className="coinmainDiv">
                    <div className="box1">
                        <img src={coin_meta.data.data[id].logo} className="coinicon" alt={coin_meta.data.data[id].name} />
                        <div className="namesDiv">
                            <p className="coinName">{coin_meta.data.data[id].coiname}</p>
                            <p className="coinSym">{coin_meta.data.data[id].symbol}</p>
                        </div>
                        <div className="priceData">
                            <p className="price">{this.currency_format(coin_quote.data.data[id].quote[convert].price)}</p>
                            <p className={coin_quote.data.data[id].quote[convert].percent_change_24h}>({numeral(coin_quote.data.data[id].quote[convert].percent_change_24h).format('0.00')}%)</p>
                        </div>
                        <ul className="metaList">
                            <pre><li><i className="fas fa-hashtag hash">&nbsp;Rank&nbsp;{coin_quote.data.data[id].cmc_rank}</i></li>
                                <li><i className="fa fa-globe hash" aria-hidden="true"></i><a href={coin_meta.data.data[id].urls.website} target="_blank">&nbsp;website</a></li>
                                <li><i className="fas fa-file-code hash"></i><a href={coin_meta.data.data[id].urls.source_code} target="_blank">&nbsp;source code</a></li>
                                <li><i className="fab fa-twitter hash"></i><a href={coin_meta.data.data[id].urls.twitter} target="_blank">&nbsp;Twitter</a></li>
                                <li><i className="fab fa-reddit hash"></i><a href={coin_meta.data.data[id].urls.reddit} target="_blank">&nbsp;Reddit</a></li></pre>

                        </ul>
                    </div>
                    <div className="box2">
                        <div className="table-responsive metaTable">
                            <table className="table table-striped">
                                <tbody>
                                    <tr className="metaTableHeader">
                                        <th>Market Cap</th>
                                        <th>Circulating supply</th>
                                        <th>volume 24h</th>
                                    </tr>
                                    <tr className="metaTableData">
                                        <td>{this.currency_format(coin_quote.data.data[id].quote[convert].market_cap)}</td>
                                        <td>{this.currency_format(coin_quote.data.data[id].circulating_supply)}
                                            {coin_quote.data.data[id].symbol} </td>
                                        <td>{this.currency_format(coin_quote.data.data[id].quote[convert].volume_24h)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>}
        </div>

    }
}

export default Coin;