import { connect } from 'react-redux'

import { getBlockchains } from '../../../selectors'
import {
  doFetchBlockchainList,
  doCreateBlockchain,
  doDeleteBlockchain,
  doEditBlockchain
} from '../../../actions'

import BaseResource from '../BaseResource'

const mapStateToProps = state => ({
  resourceList: getBlockchains(state)
})

export default connect(
  mapStateToProps,
  {
    onFetchResourceList: doFetchBlockchainList,
    onCreateResource: doCreateBlockchain,
    onDeleteResource: doDeleteBlockchain,
    onEditResource: doEditBlockchain
  }
)(BaseResource)
