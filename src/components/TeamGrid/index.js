import React from 'react'

export default ({ team }) => {
  if (team.length !== 0) {
    return (
      <div className='row pt-4 pb-4 border-bottom justify-content-center'>
        <h3 className='col-12'>Contributors</h3>
        {team.map(teamMember => (
          <a
            href={`https://twitter.com/${teamMember.twitter}`}
            className='col-md-2 col-sm-3 col-4 text-center'
            target='__blank' rel="noopener noreferrer"
            key={teamMember.twitter}
          >
            <img
              className='img-thumbnail sm-thumbnail img-round'
              src={`http://avatars.io/twitter/${teamMember.twitter}`}
            />
            <p>@{teamMember.twitter}</p>
          </a>
        ))}
      </div>
    )
  } else return null
}
