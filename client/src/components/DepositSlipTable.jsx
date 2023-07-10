import React from 'react'
import '../styles/components/DepositSlipTable.css'



const DepositSlipTable = ({months, values, handleChange}) => {

  return (
    <table className='tableForm'>
      <thead className='tableHeader'>
        <tr className='slipItems'>
          <th className='slipItem'>Months</th>
          <th className='slipItem'>Amount</th>
        </tr>
      </thead>
      <tbody className='tableBody'>
        {months && (
          Object.keys(months).map((month, index) => {
            return(
              <tr key={index} className='slipItems'>
                <td className='slipItem'>
                  <label aria-label='twelve months'>{month}</label>
                </td>
                <td className='slipItem'>
                  <input 
                    type='number'
                    id={month}
                    name={month}
                    value={months[month]}
                    className='amountField'
                    onChange={handleChange}
                    title='amount'
                  />
                </td>
              </tr>
            )
          }))}
        <tr className='slipItems'>
          <td className='slipItem'>Total</td>
          <td className='slipItem'>
            <input style={{border: 'none'}}
              type='number'
              name='total'
              value={values.total}
              className='amountField'
              onChange={handleChange}
              readOnly
              title='total amount'
            />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default DepositSlipTable