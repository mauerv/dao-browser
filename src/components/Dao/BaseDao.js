import React, { Component } from 'react'
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
import ContributorGrid from '../ContributorGrid'

class Dao extends Component {
	componentDidMount() {
		this.props.onFetchDao(this.props.match.params.id)
	}

	render() {
		const { dao } = this.props

		if (!dao || !dao.contributors) {
			return <div />
		}

		return (
			<MDBContainer>
				<MDBRow className='text-center pt-4 pb-4 border-bottom'>
					<MDBCol className='col-6 col-md-2 offset-3 offset-md-5'>
						<img src={dao.image_url} alt='' className='img-thumbnail' />
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
						<SocialIcons
							github={dao.github}
							telegram={dao.telegram}
							discord={dao.discord}
							reddit={dao.reddit}
							medium={dao.medium}
							twitter={dao.twitter}
							youtube={dao.youtube}
							rocketchat={dao.rocketchat}
							discourse={dao.discourse}
						/>
					</MDBCol>
				</MDBRow>
				<TagGroup
					blockchain={dao.blockchain.name}
					framework={dao.framework.name}
					status={dao.status.name}
				/>
				{dao.contributors.length != 0 && <ContributorGrid contributors={dao.contributors} />}
				{dao.assets_governed && <TextBlock title='Assets Governed' text={dao.assets_governed} />}
				{dao.decentralization_level && <TextBlock title='Decentralization Level' text={dao.decentralization_level} />}
				{dao.centralization_points && <TextBlock title='Centralization Points' text={dao.centralization_points} />}
				<ContractGrid contracts={dao.contracts} />
				{dao.contract_proof && <LinkBlock title='Contract Proof' url={dao.contract_proof} />}
				{dao.audits.length !== 0 && <AuditList audits={dao.audits}/>}
				<DocumentGrid documents={dao.documents}/>
				<LinkList title='Podcasts' list={dao.podcasts} />
				<LinkList title='Insightful Articles' list={dao.articles} />
				<TagGrid tags={dao.tags} />
			</MDBContainer>
		)
	}
}

export default Dao
