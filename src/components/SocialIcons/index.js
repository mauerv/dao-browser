import React from 'react'
import PropTypes from 'prop-types'

import SocialIconItem from './SocialIconItem'

const SocialIcons = ({
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
  className
}) => (
  <div className={className}>
    {github && <SocialIconItem network='github' id={github} theme={theme} />}
    {telegram && <SocialIconItem network='telegram' id={telegram} theme={theme} />}
    {discord && <SocialIconItem network='discord' id={discord} theme={theme} extraUrl='https://discordapp.com/invite/' />}
    {reddit && <SocialIconItem network='reddit' id={reddit} theme={theme} extraUrl='https://reddit.com/r/' />}
    {medium && <SocialIconItem network='medium' id={medium} theme={theme} />}
    {twitter && <SocialIconItem network='twitter' id={twitter} theme={theme} extraUrl='https://twitter.com/' />}
    {youtube && <SocialIconItem network='youtube' id={youtube} theme={theme} />}
    {rocketchat && <SocialIconItem network='rocketchat' id={rocketchat} theme={theme} />}
    {discourse && <SocialIconItem network='discourse' id={discourse} theme={theme} />}
  </div>
)

SocialIcons.propTypes = {
  github: PropTypes.string,
  telegram: PropTypes.string,
  discord: PropTypes.string,
  reddit: PropTypes.string,
  medium: PropTypes.string,
  twitter: PropTypes.string,
  youtube: PropTypes.string,
  rocketchat: PropTypes.string,
  discourse: PropTypes.string,
  theme: PropTypes.string,
  className: PropTypes.string
}

export default SocialIcons
