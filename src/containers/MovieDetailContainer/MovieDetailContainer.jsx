import React from 'react';
import axios from 'axios';
import { 
  Link
} from 'react-router-dom';
class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      item :'',
    }
  }
  componentWillMount() {
    axios.get("http://www.omdbapi.com/?apikey=8730e0e&i="+this.props.match.params.id)
    .then(response => {console.log(response.data)
      return response.data;})
      .then(item => this.setState({ item }))
    .catch(error => {console.log(error)})
   
  }
  render() {
    const { description, lineItems } = this.props;
    return (
      <div>
        <h1>Movie Finder</h1>
        <p>Viewing movie {this.props.match.params.id}</p>
        <Link to="/">
        Goback</Link>
        <div className='row' style={{margin:'15px'}}>
          <div className="col-sm-6">
        <div><img src={this.state.item.Poster} style={{width:'300px',height:'300px'}}/></div>
        </div>
        <div className="col-sm-6">
        <div className='card border-info mb-3'>
                  <div className='card-header text-white bg-info'>
                    <h4>Movie Details</h4>
                  </div>
                 <div className='card-body' style={{backgroundColor:"white"}}>
                  <div style={{margin:'15px',fontWeight:'bold'}}>{this.state.item.Title}</div>
                  <div style={{margin:'15px'}} className='bg-success'>Released {this.state.item.Year}</div>
                  <div style={{margin:'15px'}} className='bg-success'>{this.state.item.Runtime}</div>
                  <div style={{margin:'15px'}} className='bg-success'>{this.state.item.Genre}</div>
                  <div style={{margin:'15px'}}>{this.state.item.Plot}</div>
                  <div style={{margin:'15px'}}>{this.state.item.Awards}</div>
                  <div style={{margin:'15px'}}><b>MetaScore: </b>{this.state.item.Metascore}/100</div>
                  <div style={{margin:'15px'}}><b>IMDB:</b> {this.state.item.imdbRating}</div>
        </div>
        </div>
        </div>
        </div>
      </div>
    )
  }
}

export default MovieDetailContainer;