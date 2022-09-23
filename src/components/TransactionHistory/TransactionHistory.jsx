import PropTypes from 'prop-types';
import { TransactionHistoryTableRow } from 'components/TransactionHistoryTableRow/TransactionHistoryTableRow';
import css from 'components/TransactionHistory/TransactionHistory.module.css'

export function TransactionHistory({ items }) {
   return (
      <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead> 
  <tbody>
    {
            items.map(item => (
               <TransactionHistoryTableRow
                  key={item.id}
                  type={item.type}
                  amount={item.amount}
                  currency={item.currency}
               />
            ))
      }
  </tbody>
</table>
   )
}

TransactionHistory.propTypes = {
   friends: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string.isRequired,
      }),
   ),
};