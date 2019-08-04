import { connect } from 'react-redux'

import { getBlockchains } from '../../selectors'
import {
  doBlockchainListFetch,
  doCreateBlockchain,
  doDeleteBlockchain,
  doEditBlockchain
} from '../../actions'

import BasicResource from './BasicResource'

const mapStateToProps = state => ({
  resourceList: getBlockchains(state)
})

export default connect(
  mapStateToProps,
  {
    onResourceListFetch: doBlockchainListFetch,
    onCreateResource: doCreateBlockchain,
    onDeleteResource: doDeleteBlockchain,
    onEditResource: doEditBlockchain
  }
)(BasicResource)
