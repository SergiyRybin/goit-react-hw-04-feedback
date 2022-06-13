import PropTypes from 'prop-types'
import React from 'react'

const Notification = ({messege})=>
<>

<p>{messege}</p>
</>

Notification.propTypes ={
    messege: PropTypes.string
}

export default Notification