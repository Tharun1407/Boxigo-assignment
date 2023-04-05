import './index.css'
import {Link} from 'react-router-dom'

const MainInfo = props => {
  const {
    estimateId,
    movingFrom,
    movingTo,
    distance,
    movingOn,
    propertySize,
    totalItems,
  } = props

  console.log(props)

  return (
    <div className="main-container">
      <div className="move-details">
        <div>
          <h2>From</h2>
          <p className="address">{movingFrom}</p>
        </div>
        <div>
          <h2>To</h2>
          <p className="address">{movingTo}</p>
        </div>
        <div>
          <h2>Request#</h2>
          <p className="req_id">{estimateId}</p>
        </div>
      </div>
      <div className="move-details">
        <p>{propertySize}</p>
        <p>{totalItems}</p>
        <p>{distance}</p>
        <p>{movingOn}</p>
        <Link to={`vmd/${estimateId}`}>
          <button className="button1" type="button">
            View Move Details
          </button>
        </Link>
        <button className="button2" type="button">
          Quotes Awaiting
        </button>
      </div>
      <p>
        <span className="sub-para">Disclaimer:</span>Please update your move
        date before two days of shifting
      </p>
      <hr />
    </div>
  )
}

export default MainInfo
