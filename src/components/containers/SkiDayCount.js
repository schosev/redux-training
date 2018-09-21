import SkiDayCount from '../ui/SkiDayCount'
import { connect } from 'react-redux'

// original file content for displaying hardcoded values
// export default () =>
// 	<SkiDayCount total={100} powder={25} backcountry={10} />

const mapStateToProps = (state) => {
  return {
    total: state.allSkiDays.length,
    //filter will create new array with items where day.powder is true
    powder: state.allSkiDays.filter(day => day.powder).length,
    backcountry: state.allSkiDays.filter(day => day.backcountry).length
  }
}

//sending mapStateToProps to the connect function
//the connect function is a higher order function so, it will return a function and what we want to 
//send to that function is the UI component that we wish to wrap
const Container = connect(mapStateToProps)(SkiDayCount)

export default Container
