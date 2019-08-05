import { connect } from 'react-redux'

import BaseDao from './BaseDao'

import { getDao } from '../../selectors'
import { doFetchDao } from '../../actions'

const mapStateToProps = (state, ownProps) => ({
  dao: getDao(state, parseInt(ownProps.match.params.id))
})

export default connect(
  mapStateToProps,
  { onFetchDao: doFetchDao }
)(BaseDao)
