import { connect } from 'react-redux'
import Clock from '../../components/Clock'
import { clockReset, clockSnap, tapTempo } from '../../store/clock/actions'
import getClockBpm from '../../selectors/getClockBpm'

const mapStateToProps = (state, ownProps) => ({
  beat: (state.clock.beat % 4) + 1,
  bar: (Math.floor(state.clock.beat / 4) % 4) + 1,
  phrase: (Math.floor(state.clock.beat / 16) % 4) + 1,
  bpm: getClockBpm(state),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onResetClick: () => { dispatch(clockReset()) },
  onTapTempoClick: () => { dispatch(tapTempo()) },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {
    // We are mutating state of clock
    // so this means component always updates
    areStatesEqual: () => false,
  }
)(Clock)
