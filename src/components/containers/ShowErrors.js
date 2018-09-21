import ShowErrors from '../ui/ShowErrors'
import { clearError } from '../../actions'
import { connect } from 'react-redux'

// original code to just log a message when trying to clear the error
// export default () =>
// 	<ShowErrors errors={['sample error']}
// 						  onClearError={index => console.log('todo: clear error at', index)} />

const mapStateToProps = state => {
  return {
    errors: state.errors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    //we added the onClearError function, and this takes in the index of the error that we wish to clear. 
    //So what we're doing is we're returning an object that contains an onClearError function, 
    //and when that function is invoked, when the user clicks on an X, this onClearError function will also be invoked.
    onClearError(index) {
      //now we can just dispatch a new clearError action. And I will use the index that's being passed to this function.
      dispatch(
        clearError(index)
      )
    }
  }
}

//connect function is a higher order function so it needs another function (ShowErrors)
//we have created a container component using the connect function that will map the state of errors to the ShowErrors, 
//and it will also map the dispatch function to any onClearError events
export default connect(mapStateToProps, mapDispatchToProps)(ShowErrors)