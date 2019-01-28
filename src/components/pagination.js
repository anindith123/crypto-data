import React,{Component} from 'react';
import * as actions from '../redux/actions/fetchActions';
class Pagination extends Component{
    constructor(props){
        super(props);
        this.pageClick = this.pageClick.bind(this);
}

pageClick(e){
   this.props.dispatch(actions.fetchall(this.props.cdata.data.sort,this.props.cdata.data.convert,e));

}


render(){

    return <div className="pageno">
        <ul className="pagination">
  <li><button className="btn pagebtn" type="button"  onClick={() => this.pageClick("0")}>1</button></li>
  <li><button className="btn pagebtn" type="button" onClick={() => this.pageClick("1")}>2</button></li>
  <li><button className="btn pagebtn" type="button" onClick={() => this.pageClick("2")}>3</button></li>
  <li><button className="btn pagebtn" type="button" onClick= {() => this.pageClick("3")}>4</button></li>
  <li><button className="btn pagebtn" type="button" onClick={() => this.pageClick("4")}>5</button></li>
</ul>
    </div>
}
}
export default Pagination;