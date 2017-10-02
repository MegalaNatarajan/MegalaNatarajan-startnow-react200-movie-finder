import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';
function mapStoreToProps(store) {
    
  return {
    description: store.search.description,
    lineItems: store.search.lineItems,
    text: store.search.text
  };
}
export default connect(mapStoreToProps)(MovieSearchContainer);