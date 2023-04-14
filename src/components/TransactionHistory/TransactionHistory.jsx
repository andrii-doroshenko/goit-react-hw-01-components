import * as TransactionHistoryStyled from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryStyled.Table>
      <TransactionHistoryStyled.Thead>
        <TransactionHistoryStyled.Tr>
          <TransactionHistoryStyled.Th>Type</TransactionHistoryStyled.Th>
          <TransactionHistoryStyled.Th>Amount</TransactionHistoryStyled.Th>
          <TransactionHistoryStyled.Th>Currency</TransactionHistoryStyled.Th>
        </TransactionHistoryStyled.Tr>
      </TransactionHistoryStyled.Thead>

      <TransactionHistoryStyled.Tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionHistoryStyled.Tr key={id}>
              <TransactionHistoryStyled.Td>{type}</TransactionHistoryStyled.Td>
              <TransactionHistoryStyled.Td>
                {amount}
              </TransactionHistoryStyled.Td>
              <TransactionHistoryStyled.Td>
                {currency}
              </TransactionHistoryStyled.Td>
            </TransactionHistoryStyled.Tr>
          );
        })}
      </TransactionHistoryStyled.Tbody>
    </TransactionHistoryStyled.Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
