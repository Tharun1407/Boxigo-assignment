import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class ViewMoveDetails extends Component {
  state = {mainData: [], active: 'furniture'}

  componentDidMount() {
    this.getFetchData()
  }

  getFetchData = async () => {
    const response = await fetch('http://test.api.boxigo.in/sample-data/')
    const data = await response.json()
    const fetchedData = data.Customer_Estimate_Flow
    // this.setState({fetchedData: data.Customer_Estimate_Flow})

    const formattedData = fetchedData.map(each => ({
      movingFrom1: each.moving_from,
      movingTo1: each.moving_to,
      distance1: each.distance,
      movingOn1: each.moving_on,
      propertySize1: each.property_size,
      totalItems1: each.total_items,
      estimateId1: each.estimate_id,
      oldFloorNo1: each.old_floor_no,
      newFloorNo1: each.new_floor_no,
      oldElevator1: each.old_elevator_availability,
      newElevator1: each.new_elevator_availability,
      inventory: each.items.inventory,
    }))

    const {match} = this.props
    const {params} = match
    const {id} = params

    const filterd = formattedData.filter(each => each.estimateId1 === id)
    this.setState({mainData: filterd[0]})
  }

  select = e => {
    this.setState({active: e.target.value})
  }

  render() {
    const {mainData, active} = this.state

    console.log(mainData)
    const {
      movingFrom1,
      movingOn1,
      movingTo1,
      distance1,
      propertySize1,
      totalItems1,
      estimateId1,
      oldElevator1,
      newElevator1,
      newFloorNo1,
      oldFloorNo1,
      inventory,
    } = mainData
    // console.log(movingFrom1)
    // console.log(this.props)
    console.log(inventory)
    // const f =
    //   inventory !== undefined && inventory.filter(each => each.name === active)
    return (
      <div className="main-container">
        <div className="move-details">
          <div>
            <h2>From</h2>
            <p className="address">{movingFrom1}</p>
          </div>
          <div>
            <h2>To</h2>
            <p className="address">{movingTo1}</p>
          </div>
          <div>
            <h2>Request#</h2>
            <p className="req_id">{estimateId1}</p>
          </div>
        </div>
        <div className="move-details">
          <p>{propertySize1}</p>
          <p>{totalItems1}</p>
          <p>{distance1}</p>
          <p>{movingOn1}</p>

          <button className="button1" type="button">
            Quotes Awaiting
          </button>
          <Link to="/">
            <button className="button2" type="button">
              Back
            </button>
          </Link>
        </div>
        <p>
          <span className="sub-para">Disclaimer:</span>Please update your move
          date before two days of shifting
        </p>
        <hr />
        <div className="additional-data">
          <div>
            <h3>Additional information</h3>
            <p>Test Data</p>
          </div>
          <div>
            <button type="button" className="btn">
              Edit Adiitional Info
            </button>
          </div>
        </div>
        <div className="additional-data">
          <div>
            <h3>House Details</h3>
          </div>
          <div>
            <button type="button" className="btn">
              Edit House Details
            </button>
          </div>
        </div>
        <div>
          <h2 className="house-heading">Existing House Details</h2>
          <div className="house-details">
            <div>
              <h3>Floor No</h3>
              <p>{oldFloorNo1}</p>
            </div>
            <div>
              <h3>Elevator Available</h3>
              <p>{oldElevator1}</p>
            </div>
            <div>
              <h3>Distance From Elevator/StairCase to Truck</h3>
              <p>11 meters</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="house-heading">New House Details</h2>
          <div className="house-details">
            <div>
              <h3>Floor No</h3>
              <p>{newFloorNo1}</p>
            </div>
            <div>
              <h3>Elevator Available</h3>
              <p>{newElevator1}</p>
            </div>
            <div>
              <h3>Distance From Elevator/StairCase to Truck</h3>
              <p>11 meters</p>
            </div>
          </div>
        </div>
        <div className="inv">
          <h1>Inventory Details</h1>
          <button type="button" className="btn">
            Edit Inventory
          </button>
        </div>
        <select className="select1" onChange={this.select}>
          {inventory !== undefined &&
            inventory.map(each => (
              <option value={each.name}>{each.name}</option>
            ))}
        </select>
        {/* <ul>
          {f.length !== 0 &&
            // eslint-disable-next-line consistent-return
            f.forEach(
              each =>
                each.name === active && (
                  <ul>
                    {each.category.map(ele => (
                      <li>{ele.displayName}</li>
                    ))}
                  </ul>
                ),
            )}
        </ul> */}
      </div>
    )
  }
}
export default ViewMoveDetails
