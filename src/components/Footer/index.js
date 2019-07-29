import React from 'react'

import SocialIcons from '../SocialIcons'

const social = {
	github: "https://github.com/mauerv/dao-browser",
	twitter: "daobrowser",
	telegram: "https://t.me/joinchat/Mrz4fVjr60sJ8xNImnC6xw",
	medium: "dao-browser",
	reddit: "daobrowser"
}

export default () => (
	<div className='fixed-bottom bg-primary d-flex justify-content-between p-3 pl-5 pr-5 flex-column flex-md-row'>
		<p className='text-light m-0 align-self-center d-none d-md-block'>DAO Browser by <strong><a className='text-light' href='https://twitter.com/emivelazquez6' target='_blank' rel="noopener noreferrer">emi</a></strong> and <strong><a className='text-light' href='https://twitter.com/MauroVelazquezz' target='_blank' rel="noopener noreferrer" >mauerv</a></strong>
		</p>
		<SocialIcons className="d-flex justify-content-center" social={social} theme="light" />
	</div>
)
