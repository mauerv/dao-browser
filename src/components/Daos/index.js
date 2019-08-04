import { connect } from 'react-redux'

import BaseDaos from './BaseDaos'

import { getDaos } from '../../selectors'
import { doDaoListFetch } from '../../actions'

const mapStateToProps = state => ({
  daos: getDaos(state)
})

export default connect(
  mapStateToProps,
  { onDaoListFetch: doDaoListFetch }
)(BaseDaos)
