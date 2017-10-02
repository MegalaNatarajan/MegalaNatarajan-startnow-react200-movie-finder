import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';
function mapStoreToProps(store) {
    
  return {
    description: store.search.description,
    lineItems: store.search.lineItems,
    
  };
}
export default connect(mapStoreToProps)(MovieSearchContainer);