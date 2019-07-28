import React from 'react'

import newsList from '../../data/news'

export default () => (
	<div className='container'>
		<ul className='list-group'>
			{newsList.map(news => (
				<a
					href={news.url}
					className='list-group-item list-group-item-action'
					target='_blank'
					rel="noopener noreferrer"
				>
					{news.title}
				</a>
			))}
		</ul>
	</div>
)
