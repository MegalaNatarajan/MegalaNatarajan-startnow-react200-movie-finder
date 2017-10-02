import React from 'react';
import { 
  Link
} from 'react-router-dom';
import {
  ClickGo,
  InputFind,
  } from './searchAction';
class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickGo = this.handleClickGo.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(InputFind(value));
  }
    handleClickGo(event) {
      // dispatch was provided by connect()
      //document.getElementById('moreInfo').style.display = "block";
      const { description, dispatch } = this.props;
      dispatch(ClickGo(description));
    }
    
  render() {
    const { description, lineItems } = this.props;
    return (
      <div>
        <h1>Movie Finder</h1>
        <div className="row">
        <div className="col-sm-8">
              <input type="text" className="form-control"  value={ description }
              onChange={ this.handleInput }/>
                </div>
                <div className="col-sm-4">
                <button className="btn btn-info" onClick={this.handleClickGo}>Go!</button>
                </div>
                </div>
        
                
                <div className='row' style={{marginTop:"10px"}}>
                 <div className="col-sm-5">
                 {
                  lineItems.map(lineItem => (
                  <div>
                    <img src={lineItem.Poster} style={{width:'250px',height:'250px'}}/>
                  </div>
                ))}    
        </div>
      
        {
                  lineItems.map(lineItem => (
        <div className="col-sm-6">
          
                <div className='card border-info mb-3'>
                
                  <div className='card-header text-white bg-info'>
                    <h4>Movie Information</h4>
                  </div>
                 <div className='card-body' style={{backgroundColor:"white"}}>
                 
                    <div style={{margin:'10px',fontWeight:'bold'}}>  {lineItem.Title}</div>
                    <div style={{margin:'10px'}}>  {lineItem.Released}</div>
                     <div style={{margin:'10px'}}> {lineItem.Plot}</div>
                    
                    <Link to="/movie/tt3896198">
          <button id="moreInfo" style={{margin:'10px'}} className="btn btn-info">More Information</button></Link>
                
                 </div>
                 </div>
                </div>
              ))
                 }
          </div>
      </div>    
               
                
      
    )
  }
}

export default MovieSearchContainer;