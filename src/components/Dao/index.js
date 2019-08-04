import { connect } from 'react-redux'

import BaseDao from './BaseDao'

import { getDao } from '../../selectors'
import { doDaoFetch } from '../../actions'

const mapStateToProps = (state, ownProps) => ({
  dao: getDao(state, parseInt(ownProps.match.params.id))
})

export default connect(
  mapStateToProps,
  { onDaoFetch: doDaoFetch }
)(BaseDao)
