import React from 'react'

export default ({
  github,
  telegram,
  discord,
  reddit,
  medium,
  twitter,
  youtube,
  rocketchat,
  discourse,
  theme = "dark",
  className }) => (
  <div className={className}>
    {github && (
      <a href={github} target='__blank' rel="noopener noreferrer" className='mr-3 ml-3'>
        <i className={`fab fa-github fa-2x footer-icon-${theme}`} aria-hidden="true"></i>
      </a>
    )}
    {telegram && (
      <a href={telegram} target='__blank' rel="noopener noreferrer" className='mr-3 ml-3'>
        <i className={`fab fa-telegram fa-2x footer-icon-${theme}`} aria-hidden="true"></i>
      </a>
    )}
    {discord && (
      <a href={`https://discordapp.com/invite/${discord}`} target='__blank' rel="noopener noreferrer" className='mr-3 ml-3'>
        <i className={`fab fa-discord fa-2x footer-icon-${theme}`} aria-hidden="true"></i>
      </a>
    )}
    {reddit && (
      <a href={`https://reddit.com/r/${reddit}`} target='__blank' rel="noopener noreferrer" className='mr-3 ml-3'>
        <i className={`fab fa-reddit fa-2x footer-icon-${theme}`} aria-hidden="true"></i>
      </a>
    )}
    {medium && (
      <a href={medium} target='__blank' rel="noopener noreferrer" className='mr-3 ml-3'>
        <i className={`fab fa-medium fa-2x footer-icon-${theme}`} aria-hidden="true"></i>
      </a>
    )}
    {twitter && (
      <a href={`https://twitter.com/${twitter}`} target='__blank' rel="noopener noreferrer" className='mr-3 ml-3'>
        <i className={`fab fa-twitter fa-2x footer-icon-${theme}`} aria-hidden="true"></i>
      </a>
    )}
    {youtube && (
      <a href={youtube} target='__blank' rel="noopener noreferrer" className='mr-3 ml-3'>
        <i className={`fab fa-youtube fa-2x footer-icon-${theme}`} aria-hidden="true"></i>
      </a>
    )}
    {rocketchat && (
      <a href={rocketchat} target='__blank' rel="noopener noreferrer" className='mr-3 ml-3'>
        <i className={`fab fa-rocketchat fa-2x footer-icon-${theme}`} aria-hidden="true"></i>
      </a>
    )}
    {discourse && (
      <a href={discourse} target='__blank' rel="noopener noreferrer" className='mr-3 ml-3'>
        <i className={`fab fa-discourse fa-2x footer-icon-${theme}`} aria-hidden="true"></i>
      </a>
    )}
  </div>
)
