import React from 'react';
import { withPrefix } from 'gatsby';

export default ({ src }) => {
    return (
      <section
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          overflow: 'hidden',
          zIndex: '-100'
        }}
        >
        <video
            className="video"
            autoPlay
            muted
            loop
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                bottom: 0,
                right: 0,
                height: 'auto',
                width: 'auto',
                minHeight: '100%',
                minWidth: '100%',
                zIndex: '-1',
                transform: 'translate(-50%, -50%)',
                objectFit: 'fill',
                objectPosition: 'center'
            }}
            src={withPrefix(src)}
        >
            <source src={withPrefix(src)} type="video/mp4" />
            Your device does not support playing 'video/mp4' videos
        </video>
      </section>
    )
}
