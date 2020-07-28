import * as React from 'react'
import { Blob } from 'react-blob'

const BackgroundBlob = ({ style, props }) => (
  <Blob
    size="50vh"
    style={{
      position: 'absolute',
      top: '20%',
      left: '65%',
      zIndex: -3,
      backgroundColor: '#9D8676',
      color: '#9D8676',
      fontSize: '50vh',
      ...style,
    }}
    {...props}
  />
)

export default BackgroundBlob;
