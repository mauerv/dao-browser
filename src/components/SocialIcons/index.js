import React from 'react'

export default ({ social, theme = "dark", className }) => (
  <div className={className}>
    {social.github && (
      <a href={social.github} target='__blank' rel="noopener noreferrer" className='mr-3 ml-3'>
        <i className={`fab fa-github fa-2x footer-icon-${theme}`} aria-hidden="true"></i>
      </a>
    )}
    {social.telegram && (
      <a href={social.telegram} target='__blank' rel="noopener noreferrer" className='mr-3 ml-3'>
        <i className={`fab fa-telegram fa-2x footer-icon-${theme}`} aria-hidden="true"></i>
      </a>
    )}
    {social.discord && (
      <a href={`https://discordapp.com/invite/${social.discord}`} target='__blank' rel="noopener noreferrer" className='mr-3 ml-3'>
        <i className={`fab fa-discord fa-2x footer-icon-${theme}`} aria-hidden="true"></i>
      </a>
    )}
    {social.reddit && (
      <a href={`https://reddit.com/r/${social.reddit}`} target='__blank' rel="noopener noreferrer" className='mr-3 ml-3'>
        <i className={`fab fa-reddit fa-2x footer-icon-${theme}`} aria-hidden="true"></i>
      </a>
    )}
    {social.medium && (
      <a href={social.medium} target='__blank' rel="noopener noreferrer" className='mr-3 ml-3'>
        <i className={`fab fa-medium fa-2x footer-icon-${theme}`} aria-hidden="true"></i>
      </a>
    )}
    {social.twitter && (
      <a href={`https://twitter.com/${social.twitter}`} target='__blank' rel="noopener noreferrer" className='mr-3 ml-3'>
        <i className={`fab fa-twitter fa-2x footer-icon-${theme}`} aria-hidden="true"></i>
      </a>
    )}
    {social.youtube && (
      <a href={social.youtube} target='__blank' rel="noopener noreferrer" className='mr-3 ml-3'>
        <i className={`fab fa-youtube fa-2x footer-icon-${theme}`} aria-hidden="true"></i>
      </a>
    )}
    {social.rocketchat && (
      <a href={social.rocketchat} target='__blank' rel="noopener noreferrer" className='mr-3 ml-3'>
        <i className={`fab fa-rocketchat fa-2x footer-icon-${theme}`} aria-hidden="true"></i>
      </a>
    )}
    {social.discourse && (
      <a href={social.discourse} target='__blank' rel="noopener noreferrer" className='mr-3 ml-3'>
        <i className={`fab fa-discourse fa-2x footer-icon-${theme}`} aria-hidden="true"></i>
      </a>
    )}
  </div>
)
