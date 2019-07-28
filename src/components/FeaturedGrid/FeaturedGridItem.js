import React from 'react'

import { MDBMask, MDBView, MDBCol } from "mdbreact";
import { Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

export default ({ item }) => (
  <MDBCol sm='6' md='3' className='col-10 offset-1 offset-sm-0 text-center mb-3'>
    <Link to={`${ROUTES.DAOS}/${item.id}`}>
      <MDBView hover zoom>
        <img src={item.image} alt='' className='img-thumbnail lg-thumbnail' />
        <MDBMask className="flex-center" overlay="stylish-strong">
          <h4 className="white-text font-weight-bolder">{item.title}</h4>
        </MDBMask>
      </MDBView>
    </Link>
  </MDBCol>
)
