// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {altr, src, text, value, test} = props

  return (
    <>
      <div>
        <img alt={altr} className="imgIcon" src={src} />
      </div>
      <div>
        <p className="text">{text}</p>
        <h1 className="amount">
          Rs <span testid={test}>{value}</span>
        </h1>
      </div>
    </>
  )
}

export default MoneyDetails
