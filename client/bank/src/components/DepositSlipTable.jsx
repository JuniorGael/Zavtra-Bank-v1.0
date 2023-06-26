import React from 'react'
import '../styles/components/DepositSlipTable.css'



const DepositSlipTable = ({months, values, handleChange}) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Months</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {months && (
          Object.keys(months).map((month, index) => {
            return(
              <tr key={index}>
                <td>
                  <p>{month}</p>
                </td>
                <td>
                  <input 
                    type='number'
                    id={month}
                    name={month}
                    value={months[month]}
                    className='amountField'
                    onChange={handleChange}
                  />
                </td>
              </tr>
            )
          }))}
        <tr>
          <td>Total</td>
          <td>
            <input style={{border: 'none'}}
              type='number'
              name='total'
              value={values.total}
              className='amountField'
              onChange={handleChange}
              readOnly
            />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default DepositSlipTable