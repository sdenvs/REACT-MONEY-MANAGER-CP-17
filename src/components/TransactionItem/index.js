// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details, deleteFun} = props
  const {id, title, amount, type} = details
  const deleteIcon = () => {
    deleteFun(id)
  }
  return (
    <tr>
      <td>{title}</td>
      <td>{amount}</td>
      <td>{type}</td>
      <td>
        <button testid="delete" onClick={deleteIcon} className="deletebtn">
          <img
            alt="delete"
            className="deleteIcon"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          />
        </button>
      </td>
    </tr>
  )
}

export default TransactionItem
