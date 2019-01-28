import React,{Component} from 'react';
import {MenuItem, DropdownButton, ButtonToolbar} from 'react-bootstrap';
import * as actions from '../redux/actions/fetchActions';

class DropDown extends Component{
    constructor(props){
        super(props);
        this.state = {
            currency : "USD"

        }
this.dropdownclick = this.dropdownclick.bind(this);

    }
    dropdownclick(e,c){
        console.log(e);
        this.setState({
            currency : e
        })
        this.props.dispatch(actions.fetchall(this.props.cdata.data.sort,e,this.props.cdata.data.start));
    }
    render(){

        return<div>
            <ButtonToolbar>
                <DropdownButton title={this.state.currency} id="dropdown-size-medium" onSelect={(e, c) => { this.dropdownclick(e,c)}}>
                <MenuItem eventKey="USD" active>USD</MenuItem>
                    <MenuItem eventKey="ALL" >ALL</MenuItem>
                    <MenuItem eventKey="DZD" >DZD</MenuItem>
                    <MenuItem eventKey="ARS" >ARS</MenuItem>
                    <MenuItem eventKey="AMD" >AMD</MenuItem>
                    <MenuItem eventKey="AUD">AUD</MenuItem>
                    <MenuItem eventKey="AZN">AZN</MenuItem>
                    <MenuItem eventKey="BHD">BHD</MenuItem>
                    <MenuItem eventKey="BDT">BDT</MenuItem>
                    <MenuItem eventKey="BYN">BYN</MenuItem>
                    <MenuItem eventKey="BMD">BMD</MenuItem>
                    <MenuItem eventKey="BOB">BOB</MenuItem>
                    <MenuItem eventKey="BAM">BAM</MenuItem>
                    <MenuItem eventKey="BRL">BRL</MenuItem>
                    <MenuItem eventKey="BGN">BGN</MenuItem>
                    <MenuItem eventKey="KHR">KHR</MenuItem>
                    <MenuItem eventKey="CAD">CAD</MenuItem>
                    <MenuItem eventKey="CLP">CLP</MenuItem>
                    <MenuItem eventKey="CNY">CNY</MenuItem>
                    <MenuItem eventKey="COP">COP</MenuItem>
                   
                    <MenuItem eventKey="CRC">CRC</MenuItem>
                    <MenuItem eventKey="HRK">HRK</MenuItem>
                    <MenuItem eventKey="CUP">CUP</MenuItem>
                    
                    <MenuItem eventKey="CZK">CZK</MenuItem>
                    <MenuItem eventKey="DKK">DKK</MenuItem>
                    <MenuItem eventKey="DOP">DOP</MenuItem>
                    <MenuItem eventKey="EGP">EGP</MenuItem>
                    <MenuItem eventKey="EUR">EUR</MenuItem>
                    <MenuItem eventKey="GEL">GEL</MenuItem>
                    <MenuItem eventKey="GHS">GHS</MenuItem>
                    <MenuItem eventKey="GTQ">GTQ</MenuItem>
                    <MenuItem eventKey="HNL">HNL</MenuItem>
                    <MenuItem eventKey="HKD">HKD</MenuItem>
                    <MenuItem eventKey="HUF">HUF</MenuItem>
                    <MenuItem eventKey="ISK">ISK</MenuItem>
                    <MenuItem eventKey="INR">INR</MenuItem>
                    <MenuItem eventKey="IDR">IDR</MenuItem>
                    <MenuItem eventKey="IRR">IRR</MenuItem>
                    <MenuItem eventKey="IQD">IQD</MenuItem>
                    <MenuItem eventKey="ILS">ILS</MenuItem>
                    <MenuItem eventKey="JMD">JMD</MenuItem>

                    <MenuItem eventKey="JPY">JPY</MenuItem>
                    <MenuItem eventKey="JOD">JOD</MenuItem>
                    <MenuItem eventKey="KZT">KZT</MenuItem>
                    <MenuItem eventKey="KES">KES</MenuItem>
                    <MenuItem eventKey="KWD">KWD</MenuItem>
                    <MenuItem eventKey="KGS">KGS</MenuItem>
                    <MenuItem eventKey="LBP">LBP</MenuItem>
                    <MenuItem eventKey="MKD">MKD</MenuItem>
                    <MenuItem eventKey="MYR">MYR</MenuItem>

                    <MenuItem eventKey="MUR">MUR</MenuItem>
                    <MenuItem eventKey="MXN">MXN</MenuItem>
                    <MenuItem eventKey="MDL">MDL</MenuItem>
                    <MenuItem eventKey="MNT">MNT</MenuItem>
                    <MenuItem eventKey="MAD">MAD</MenuItem>
                    <MenuItem eventKey="MMK">MMK</MenuItem>
                    <MenuItem eventKey="NAD">NAD</MenuItem>
                    <MenuItem eventKey="NPR">NPR</MenuItem>
                    <MenuItem eventKey="TWD">TWD</MenuItem>
                    <MenuItem eventKey="NZD">NZD</MenuItem>

                    <MenuItem eventKey="NIO">NIO</MenuItem>
                    <MenuItem eventKey="NGN">NGN</MenuItem>
                    <MenuItem eventKey="NOK">NOK</MenuItem>
                    <MenuItem eventKey="OMR">OMR</MenuItem>

                    <MenuItem eventKey="PKR">PKR</MenuItem>
                    <MenuItem eventKey="PAB">PAB</MenuItem>
                    <MenuItem eventKey="PEN">PEN</MenuItem>
                    <MenuItem eventKey="PHP">PHP</MenuItem>

                    <MenuItem eventKey="PLN">PLN</MenuItem>
                    <MenuItem eventKey="GBP">GBP</MenuItem>
                    <MenuItem eventKey="QAR">QAR</MenuItem>
                    <MenuItem eventKey="RON">RON</MenuItem>

                    <MenuItem eventKey="RUB">RUB</MenuItem>
                    <MenuItem eventKey="SAR">SAR</MenuItem>
                    <MenuItem eventKey="RSD">RSD</MenuItem>
                    <MenuItem eventKey="SGD">SGD</MenuItem>
                    <MenuItem eventKey="ZAR">ZAR</MenuItem>
                    <MenuItem eventKey="KRW">KRW</MenuItem>
                    <MenuItem eventKey="SSP">SSP</MenuItem>

                    <MenuItem eventKey="VES">VES</MenuItem>
                    <MenuItem eventKey="LKR">LKR</MenuItem>
                    <MenuItem eventKey="SEK">SEK</MenuItem>

                    <MenuItem eventKey="CHF">CHF</MenuItem>
                    <MenuItem eventKey="THB">THB</MenuItem>
                    <MenuItem eventKey="TTD">TTD</MenuItem>
                    <MenuItem eventKey="TND">TND</MenuItem>
                    <MenuItem eventKey="TRY">TRY</MenuItem>
                    <MenuItem eventKey="UGX">UGX</MenuItem>
                    <MenuItem eventKey="UAH">UAH</MenuItem>
                    <MenuItem eventKey="AED">AED</MenuItem>
                    <MenuItem eventKey="UYU">UYU</MenuItem>
                    <MenuItem eventKey="UZS">UZS</MenuItem>
                    <MenuItem eventKey="VND">VND</MenuItem>
                </DropdownButton>
            </ButtonToolbar>
            
</div>
        }
    }


export default DropDown;