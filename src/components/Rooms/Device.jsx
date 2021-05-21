import React from 'react'

const Device = (props) => {
  return (
    <div className="devices-item">
      {props.deviceIcon}
      <span>{props.deviceName}</span>
    </div>
  )
}

export default Device
