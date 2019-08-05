import { connect } from 'react-redux'

import { getBlockchains } from '../../selectors'
import {
  doFetchBlockchainList,
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
    onResourceListFetch: doFetchBlockchainList,
    onCreateResource: doCreateBlockchain,
    onDeleteResource: doDeleteBlockchain,
    onEditResource: doEditBlockchain
  }
)(BasicResource)
