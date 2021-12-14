import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const {Component} = require('react/cjs/react.development')

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    historyList: [
      {id: uuidv4(), title: 'Salary', amount: 12000, type: 'INCOME'},
      {id: uuidv4(), title: 'rent', amount: 1000, type: 'INCOME'},
      {id: uuidv4(), title: 'market', amount: 12000, type: 'EXPENSES'},
    ],
    title: '',
    amount: '',
    type: 'INCOME',
  }

  titleChange = event => {
    this.setState({title: event.target.value})
  }

  amountChange = event => {
    this.setState({amount: event.target.value})
  }

  typeChange = event => {
    this.setState({type: event.target.value})
  }

  formSubmit = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    if (title === '' || amount === '') {
      alert('Input should not be blank')
    } else {
      console.log(typeof title)
      console.log(typeof amount)
      this.setState(prev => ({
        historyList: [
          ...prev.historyList,
          {
            id: uuidv4(),
            title,
            amount,
            type,
          },
        ],
        title: '',
        amount: '',
      }))
    }
  }

  deleteFun = id => {
    this.setState(prev => ({
      historyList: prev.historyList.filter(eachItem => eachItem.id !== id),
    }))
  }

  render() {
    const {historyList, title, amount} = this.state
    let income = 0
    let expense = 0
    if (historyList.length !== 0) {
      historyList.forEach(eachItem => {
        if (eachItem.type === 'INCOME') {
          income += parseFloat(eachItem.amount)
        } else {
          expense += parseFloat(eachItem.amount)
        }
      })
    }
    console.log(income, expense)

    return (
      <div className="bgContainer">
        <div className="top-container">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your <span className="style1">Money Manager</span>
          </p>
        </div>
        <div className="detailsContainer">
          <div className="details-card balance">
            <MoneyDetails
              key={1}
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              text="Your Balance"
              value={income - expense}
              test="balanceAmount"
              altr="balance"
            />
          </div>
          <div className="details-card income">
            <MoneyDetails
              key={2}
              src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              text="Your Income"
              value={income}
              test="incomeAmount"
              altr="income"
            />
          </div>
          <div className="details-card expensses">
            <MoneyDetails
              key={3}
              src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
              text="Your Expensses"
              value={expense}
              test="expensesAmount"
              altr="expenses"
            />
          </div>
        </div>
        <div className="bottomContainer">
          <form onSubmit={this.formSubmit} className="formContainer">
            <h1 className="form-heading">Add Transaction</h1>
            <label htmlFor="title">TITLE</label>
            <br />
            <input
              value={title}
              onChange={this.titleChange}
              placeholder="TITLE"
              id="title"
            />
            <br />
            <label htmlFor="amount">AMOUNT</label>
            <br />
            <input
              type="number"
              value={amount}
              onChange={this.amountChange}
              placeholder="AMOUNT"
              id="amount"
            />
            <br />
            <label htmlFor="type">TYPE</label>
            <br />
            <select onChange={this.typeChange} id="type">
              {transactionTypeOptions.map(eachItem => (
                <option value={eachItem.optionId}>
                  {eachItem.displayText}
                </option>
              ))}
            </select>
            <br />
            <button type="submit">Add</button>
          </form>
          <div className="history-container">
            <h1 className="form-heading">History</h1>
            <table className="table1">
              <tr>
                <th>Title</th>
                <th>Amount</th>
                <th>Type</th>
                <th>{}</th>
              </tr>

              {historyList.map(eachItem => (
                <TransactionItem
                  deleteFun={this.deleteFun}
                  key={eachItem.id}
                  details={eachItem}
                />
              ))}
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
