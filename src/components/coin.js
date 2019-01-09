import React, { Component } from 'react';
import * as actions from '../redux/actions/fetchActions';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Coin extends Component {
    constructor(props) {
        super(props);
        this.cellvalue = this.cellvalue.bind(this);
       
    }
    cellvalue(val) {
        let classval;
        if (val > 0 ? classval = "successval" : classval = "failure")
            return classval;

    }

    componentWillMount() {
        
            
            this.props.dispatch(actions.fetchonemeta(this.props.match.params.id));
            this.props.dispatch(actions.fetchonequote(this.props.match.params.id));
    

    }

    render() {
        let id = this.props.match.params.id;
        console.log("%%%%%%%%%%%%");
        console.log(this.props.cdata);
       // console.log(this.props.cdata.data.coin.data);
        // console.log(this.props.cdata.data.coins.data?this.props.cdata.data.coins.data[id].cmc_rank:"loading..");
        return (this.props.cdata.data.coin_available && this.props.cdata.data.coin_quote_available ? (<React.Fragment>
            <div className="coinmainDiv">
                <div className="box1">
                    <img src={this.props.cdata.data.coin_meta.data[id] ? this.props.cdata.data.coin_meta.data[id].logo : "#"} className="coinicon" alt={this.props.cdata.data.coin_meta.data[id] ? this.props.cdata.data.coin_meta.data[id].name : "loading..."} />
                    <div className="namesDiv">
                        <p className="coinName">{this.props.cdata.data.coin_meta.data[id] ? this.props.cdata.data.coin_meta.data[id].name : "loading..."}</p>
                        <p className="coinSym">{this.props.cdata.data.coin_meta.data[id] ? this.props.cdata.data.coin_meta.data[id].symbol : "loading..."}</p>
                    </div>
                    <div className="priceData">
                    <p className="price">{numeral(this.props.cdata.data.coin_quote.data[id] ? this.props.cdata.data.coin_quote.data[id].quote.USD.price : "0").format('$0,0.00')}</p>
                    <p className={this.cellvalue(this.props.cdata.data.coin_quote.data[id] ? this.props.cdata.data.coin_quote.data[id].quote.USD.percent_change_24h : "0")}>({numeral(this.props.cdata.data.coin_quote.data[id] ? this.props.cdata.data.coin_quote.data[id].quote.USD.percent_change_24h : "0").format('0.00')}%)</p>
                    </div>
                    <ul className="metaList">
                       <pre><li><i className="fas fa-hashtag hash">&nbsp;Rank&nbsp;{this.props.cdata.data.coin_quote.data[id] ? this.props.cdata.data.coin_quote.data[id].cmc_rank:"loading.."}</i></li>
                        <li><i class="far fa-globe hash"></i><a href={this.props.cdata.data.coin_meta.data[id] ? this.props.cdata.data.coin_meta.data[id].urls.website:"#"} target="_blank">&nbsp;website</a></li>
                        <li><i class="fas fa-file-code hash"></i><a href={this.props.cdata.data.coin_meta.data[id] ? this.props.cdata.data.coin_meta.data[id].urls.source_code:"#"} target="_blank">&nbsp;source code</a></li>
                        <li><i class="fab fa-twitter hash"></i><a href={this.props.cdata.data.coin_meta.data[id] ? this.props.cdata.data.coin_meta.data[id].urls.twitter:"#"} target="_blank">&nbsp;Twitter</a></li>
                        <li><i class="fab fa-reddit hash"></i><a href={this.props.cdata.data.coin_meta.data[id] ? this.props.cdata.data.coin_meta.data[id].urls.reddit:"#"} target="_blank">&nbsp;Reddit</a></li></pre> 
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
                            <td>{numeral(this.props.cdata.data.coin_quote.data[id] ? this.props.cdata.data.coin_quote.data[id].quote.USD.market_cap:"0").format('$0,0')}</td>
                            <td>{numeral(this.props.cdata.data.coin_quote.data[id] ? this.props.cdata.data.coin_quote.data[id].circulating_supply:"0").format('0,0')}
                                        {this.props.cdata.data.coin_quote.data[id] ? this.props.cdata.data.coin_quote.data[id].symbol: " "} </td>
                            <td>{numeral(this.props.cdata.data.coin_quote.data[id] ? this.props.cdata.data.coin_quote.data[id].quote.USD.volume_24h:"0").format('$0,0')}</td>
                        </tr>
                        </tbody>
                        </table>
                        </div>
                </div>
            </div>
        </React.Fragment>) : "loading")
    }
}


function mapStateToProps(state) {

    return {
        cdata: state
    }

}

export default withRouter(connect(mapStateToProps)(Coin))