import React,{Component} from 'react';

class Coin extends Component{
    render(){
        console.log(this.props.match.params.id);
        return <div>
            wassup
        </div>
    }
}
export default Coin;