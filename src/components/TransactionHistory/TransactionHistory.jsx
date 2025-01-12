import css from "./TransactionHistory.module.css";
const TransactionHistory = ({ items }) => {
  return (
    <div>
      <h3>Завдання 3. Історія транзакцій</h3>
      <table className={css.transactionTable}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
