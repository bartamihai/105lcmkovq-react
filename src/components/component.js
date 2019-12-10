import React from 'react'
import PropTypes from 'prop-types'

import styles from './component.module.css'

const AppComponent = (props) => {
  return (
    <div className={styles.component}>
      <img src={props.src} className={styles['first-image-asset']} />
    </div>
  )
}

AppComponent.defaultProps = {
  src: '/playground_assets/imageAsset.jpg',
}

AppComponent.propTypes = {
  src: PropTypes.string,
}

export default AppComponent
