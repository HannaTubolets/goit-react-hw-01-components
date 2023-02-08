import PropTypes from 'prop-types';
import css from './Transactions.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.thead}>
        <tr className={css.headerContainer}>
          <th className={css.headerTitle}>
            Type
          </th>
          <th className={css.headerTitle}>
            Amount
          </th>
          <th className={css.headerTitle}>
            Currency
          </th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr
              key={item.id}
              className={css.headerContainer}
            >
              <td className={css.data}>
                {item.type}
              </td>
              <td className={css.data}>
                {item.amount}
              </td>
              <td className={css.data}>
                {item.currency}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
