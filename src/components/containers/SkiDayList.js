import SkiDayList from '../ui/SkiDayList'
import { connect } from "react-redux"
import { removeDay } from '../../actions'

// original hardcoded info that was provided
// const sample = [
//     {
//     "resort": "Stowe",
//     "date": "2017-1-28",
//     "powder": false,
//     "backcountry": false
//   },
//   {
//     "resort": "Tuckerman's Ravine",
//     "date": "2017-1-31",
//     "powder": false,
//     "backcountry": true
//   },
//   {
//     "resort": "Mad River Glen",
//     "date": "2017-2-12",
//     "powder": true,
//     "backcountry": false
//   }
// ]

// export default (props) =>
//     <SkiDayList days={sample}
//                 filter={props.params.filter}
//                 onRemoveDay={date => console.log('remove day on', date)} />

const mapStateToProps = (state, props) =>
  ({
    days: state.allSkiDays,
    filter: props.params.filter
  })

const mapDispatchToProps = dispatch =>
  ({
    onRemoveDay(date){
      dispatch(removeDay(date))
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(SkiDayList)
