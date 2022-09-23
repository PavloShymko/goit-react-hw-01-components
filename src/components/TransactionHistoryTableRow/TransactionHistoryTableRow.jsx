import PropTypes from 'prop-types';

export function TransactionHistoryTableRow( {type, amount, currency}) {
   return (
      <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
   )
}

TransactionHistoryTableRow.propTypes = {
   type: PropTypes.string.isRequired,
   amount: PropTypes.string.isRequired,
   currency: PropTypes.string.isRequired,
}