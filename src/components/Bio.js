import React from 'react'
import { rhythm } from '../utils/typography'

export default ({ settings }) => (
  <div
    style={{
      display: 'flex',
      marginBottom: rhythm(2.5),
    }}
  >
    <div dangerouslySetInnerHTML={{ __html: settings.author_bio }} />
  </div>
)
