import { connect } from 'react-redux'

import BaseDaos from './BaseDaos'

import { getDaos } from '../../selectors'
import { doFetchDaoList } from '../../actions'

const mapStateToProps = state => ({
  daos: getDaos(state)
})

export default connect(
  mapStateToProps,
  { onFetchDaoList: doFetchDaoList }
)(BaseDaos)
