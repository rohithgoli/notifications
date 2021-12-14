// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotificatons = () => (
  <div className="bg-container">
    <h1 className="main-heading">Alert Notifications</h1>
    <Notification>
      <AiFillCheckCircle className="success icon" />
      <div className="info-container">
        <h1 className="notification-name success">Success</h1>
        <p className="notification-message">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
    <Notification>
      <RiErrorWarningFill className="icon error" />
      <div className="info-container">
        <h1 className="notification-name error">Error</h1>
        <p className="notification-message">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
    <Notification>
      <MdWarning className="icon warning" />
      <div className="info-container">
        <h1 className="notification-name warning">Warning</h1>
        <p className="notification-message">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
    <Notification>
      <MdInfo className="icon info" />
      <div className="info-container">
        <h1 className="notification-name info">Info</h1>
        <p className="notification-message">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  </div>
)

export default AlertNotificatons
