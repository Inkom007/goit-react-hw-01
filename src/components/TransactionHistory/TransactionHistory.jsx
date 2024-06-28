import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.header}>
        <tr className={s.headerRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={s.tableBody}>
        {items.map((item) => {
          return (
            <tr className={s.tableRow} key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
