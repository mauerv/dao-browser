import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import ContractGrid from '../ContractGrid'
import SocialIcons from '../SocialIcons'
import TagGroup from '../Tags/TagGroup'
import AuditList from '../AuditList'
import DocumentGrid from '../DocumentGrid'

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
			{dao.assetsGoverned && (
				<MDBRow>
					<div className='col-12 pt-4 pb-4 border-bottom'>
						<h3>Assets Governed</h3>
						<p>{dao.assetsGoverned}</p>
					</div>
				</MDBRow>
			)}
			{dao.decentralizationLevel && (
				<MDBRow>
					<div className='col-12 pt-4 pb-4 border-bottom'>
						<h3>Decentralization Level</h3>
						<p>{dao.decentralizationLevel}</p>
					</div>
				</MDBRow>
			)}
			{dao.centralizationPoints && (
				<MDBRow>
					<div className='col-12 pt-4 pb-4 border-bottom'>
						<h3>Centralization Points</h3>
						<p>{dao.centralizationPoints}</p>
					</div>
				</MDBRow>
			)}
			{dao.contracts.length !== 0 && <ContractGrid contracts={dao.contracts} />}
			<MDBRow>
				{dao.contractProof && (
		      <div className='col-12 pt-4 pb-4 border-bottom'>
		        <h3>Contract Proof</h3>
		        <a href={dao.contractProof} target='_blank' rel="noopener noreferrer" className='wrap-url'>{dao.contractProof}</a>
		      </div>
		    )}
			</MDBRow>
			{dao.audits.length !== 0 && <AuditList audits={dao.audits}/>}
			{dao.documents.length!== 0 && <DocumentGrid documents={dao.documents}/>}
			{dao.podcasts.length !== 0 && (
				<MDBRow className='pt-4 pb-4 border-bottom'>
					<h3 className='col-12'>Podcasts</h3>
					<ul className='col-12 list-group'>
						{dao.podcasts.map(podcast => (
							<li className='list-group-item d-flex justify-content-md-between flex-column flex-md-row align-items-md-center'>
								<a href={podcast.url} target='_blank' rel="noopener noreferrer" ><h6>{podcast.title}</h6></a>
								<p className='ml-'>{podcast.date}</p>
							</li>
						))}
					</ul>
				</MDBRow>
			)}
			{dao.articles.length !== 0 && (
				<MDBRow className='pt-4 pb-4 border-bottom'>
					<h3 className='col-12'>Insightful Articles</h3>
					<ul className='col-12 list-group'>
						{dao.articles.map(article => (
							<li className='list-group-item d-flex justify-content-md-between flex-column flex-md-row align-items-md-center'>
								<a href={article.url} target='_blank' rel="noopener noreferrer" ><h6>{article.title}</h6></a>
								<p className='ml-'>{article.date}</p>
							</li>
						))}
					</ul>
				</MDBRow>
			)}
		</MDBContainer>
	)
}
