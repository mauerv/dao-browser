import React from 'react'

import { Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

export default () => (
	<div className='container'>
		<div className='text-center p-5 row'>
			<h1 className='col-12'>How Can I Create a DAO?</h1>
			<h5 className='col-md-8 offset-md-2'>There are multiple frameworks to use, or vetted code to leverage when creating your organization.</h5>
		</div>

		<div className='row border-top border-bottom pt-5 pb-5 align-items-center'>
			<div className='col-12 col-sm-8'>
				<h2>Fork MolochDAO</h2>
				<p>The <a href='https://github.com/MolochVentures/moloch' target="_blank" rel="noopener noreferrer">code repo</a> for the MolochDAO opens with "STEAL THIS CODE". This initiative to further ethereum development, created a simple, but generalized contract structure to create an organization, add vetted members, create proposals, and manage funding.</p>
				<p>The original <a href='https://molochdao.com/' target="_blank" rel="noopener noreferrer">DAO</a> currently manages more than $1,500,000 and there are multiple initiatives that forked the code and are building from it. <Link to={`${ROUTES.DAOS}/5`}>MetaCartel</Link>, <Link to={`${ROUTES.DAOS}/6`}>YangDAO</Link> and <Link to={`${ROUTES.DAOS}/22`}>KittyDAO</Link> are some examples.</p>
			</div>
			<div className='col-sm-3 offset-sm-1 d-none d-sm-block'>
				<img className='lg-thumbnail' alt='moloch' src='moloch.png' />
			</div>
			<hr/>
		</div>

		<div className='row border-top border-bottom pt-5 pb-5 align-items-center'>
			<div className='col-sm-3 d-none d-sm-block'>
				<img className='lg-thumbnail' src='aragon.jpg' alt='aragon' />
			</div>
			<div className='col-12 col-sm-8 offset-sm-1 col-lg-8 offset-lg-0'>
				<h2>Aragon</h2>
				<p>With a slick UI and a strong team behind it. <a href="https://aragon.org/" target="_blank" rel="noopener noreferrer">Aragon</a> is the platform with the greatest track record when it comes to providing tools to create a DAO.</p>
				<p>More than 15,000 organizations have launched using their stack. The <a href="https://hack.aragon.org/" target="_blank" rel="noopener noreferrer">developer portal</a> has all the info you need to get started with building on aragonOS or deploying your own custom organization using the aragonCLI. You can also use the Aragon <a href="https://app.aragon.org/" target="_blank" rel="noopener noreferrer">web</a> or <a href="https://github.com/aragon/aragon-desktop/releases" target="_blank" rel="noopener noreferrer">desktop</a> clients to create and manage a DAO with no coding skills necessary.</p>
			</div>
		</div>

		<div className='row border-top border-bottom pt-5 pb-5 align-items-center'>
			<div className='col-12 col-sm-8'>
				<h2>DAOStack</h2>
				<p><a href="https://daostack.io/" target="_blank" rel="noopener noreferrer">DAOStack</a> currently lets you create DAOs that follow <a href='https://medium.com/daostack/holographic-consensus-part-1-116a73ba1e1c'>holographic consensus</a> on top of the Ethereum blockchain. More consensus mechanisms will be added in the future and possibly support for other blockchains.</p>
				<p>Well known projects in the community are launching experiments using this framework, from polkadot's <Link to={`${ROUTES.DAOS}/9`}>PolkaDAO</Link>, to <Link to={`${ROUTES.DAOS}/13`}>Prague DAO</Link> the first physical incubator run as a DAO. Learn more about using their tech <a href="https://github.com/daostack/DAOstack-Hackers-Kit" target='_blank' rel="noopener noreferrer">here</a>.</p>
			</div>
			<div className='col-sm-3 offset-sm-1 d-none d-sm-block'>
				<img className='lg-thumbnail' src='daostack.png' alt='daostack' />
			</div>
		</div>

		<div className='row border-top border-bottom pt-5 pb-5 align-items-center'>
			<div className='col-sm-3 d-none d-sm-block'>
				<img className='lg-thumbnail' src='colony.png' alt='colony' />
			</div>
			<div className='col-12 col-sm-8 offset-sm-1 col-lg-8 offset-lg-0'>
				<h2>Colony</h2>
				<p>For now in private Beta, you need an invite to create a DAO with them. But it's a very powerful framework, 4 years in the making.</p>
			</div>
		</div>

		<div className='row border-top border-bottom pt-5 pb-5 align-items-center'>
			<div className='col-12 col-sm-8'>
				<h2>Giveth</h2>
				<p><a href='https://giveth.io/'>Giveth</a> specializes in letting you create decentralized autonomous charities. These are DAOs optimized to run non-profit organizations.</p>
			</div>
			<div className='col-sm-3 offset-sm-1 d-none d-sm-block'>
				<img className='lg-thumbnail' src='giveth.png' alt='giveth' />
			</div>
		</div>
	</div>
)
