import { connect } from 'react-redux'
import EditingOverlay from '../../components/EditingOverlay'
import { uiEditingClose } from '../../store/ui/actions'
import getUiIsEditingNode from '../../selectors/getUiIsEditingNode'
import getUiIsEditingMode from '../../selectors/getUiIsEditingMode'

const mapStateToProps = (state, ownProps) => {
  const isEditing = state.ui.isEditing
  const node = getUiIsEditingNode(state)
  const isPopup = getUiIsEditingMode(state) === 'popup'

  return {
    id: isEditing ? isEditing.id : undefined,
    type: isEditing ? isEditing.type : undefined,
    isVisible: isPopup,
    title: node ? `Editing: ${node.title}` : undefined,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCancelClick: () => {
    dispatch(uiEditingClose())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditingOverlay)
