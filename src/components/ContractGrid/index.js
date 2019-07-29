import React from 'react'

import { MDBRow } from "mdbreact";

import ContractGridItem from './ContractGridItem'

export default ({ contracts }) => (
  <MDBRow className='pt-4 pb-4 border-bottom justify-content-center'>
    <div className='col-12 text-md-center'>
      <h3>Contracts</h3>
    </div>
    {contracts.map(contract => <ContractGridItem key={contract.address} contract={contract}/>)}
  </MDBRow>
)
