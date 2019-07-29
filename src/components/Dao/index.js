import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import ContractGrid from '../ContractGrid'
import SocialIcons from '../SocialIcons'
import TagGroup from '../Tags/TagGroup'
import TagGrid from '../Tags/TagGrid'
import AuditList from '../AuditList'
import DocumentGrid from '../DocumentGrid'
import TextBlock from '../TextBlock'
import LinkList from '../LinkList'
import LinkBlock from '../LinkBlock'
import TeamGrid from '../TeamGrid'

import daos from '../../data/daos'

export default ({ match }) => {
	const dao = daos[match.params.id]
	return (
		<MDBContainer>
			<MDBRow className='text-center pt-4 pb-4 border-bottom'>
				<MDBCol className='col-6 col-md-2 offset-3 offset-md-5'>
					<img src={`../${dao.image}`} alt='' className='img-thumbnail' />
				</MDBCol>
				<MDBCol className='col-12'>
					<h1 className='mb-0'>{dao.title}</h1>
					<a
						href={dao.website}
						target='_blank'
						rel="noopener noreferrer"
						className='break-words'
					>
						{dao.website}
					</a>
				</MDBCol>
				<MDBCol className='col-12 mt-1'>
					<p className='pt-3'>{dao.description}</p>
				</MDBCol>
				<MDBCol>
					<SocialIcons social={dao.social}/>
				</MDBCol>
			</MDBRow>
			<TagGroup
				blockchain={dao.blockchain}
				framework={dao.framework}
				status={dao.status}
			/>
			<TeamGrid team={dao.team} />
			<TextBlock title='Assets Governed' text={dao.assetsGoverned} />
			<TextBlock title='Decentralization Level' text={dao.decentralizationLevel} />
			<TextBlock title='Centralization Points' text={dao.centralizationPoints} />
			<ContractGrid contracts={dao.contracts} />
			<LinkBlock title='Contract Proof' url={dao.contractProof} />
			<AuditList audits={dao.audits}/>
			<DocumentGrid documents={dao.documents}/>
			<LinkList title='Podcasts' list={dao.podcasts} />
			<LinkList title='Insightful Articles' list={dao.articles} />
			<TagGrid tags={dao.tags} />
		</MDBContainer>
	)
}
