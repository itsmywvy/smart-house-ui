import React from 'react';
import styles from './Table.module.scss';

const Table = ({ data }) => {
  const tableElems = data.map((elem, i) => {
    const isPaid = elem.status ? (
      <td data-label="Status">
        <span style={{ background: 'rgba(101, 189, 192, 0.51', width: 71 }}>Paid</span>
      </td>
    ) : (
      <td data-label="Status">
        <span style={{ background: 'rgba(238, 119, 127, 0.46', width: 71 }}>Unpaid</span>
      </td>
    );
    return (
      <tr key={`${elem}${i}`}>
        <td data-label="Number">{elem.number}</td>
        <td data-label="Category">{elem.category}</td>
        <td data-label="Month">{elem.month}</td>
        <td data-label="Due Data">{elem.dueData}</td>
        <td data-label="Amount Due">{elem.amountDue}</td>
        {isPaid}
      </tr>
    );
  });

  return (
    <table className={styles.table}>
      <thead className={styles.tableHead}>
        <tr>
          <td>Number</td>
          <td>Category</td>
          <td>Month</td>
          <td>Due Date</td>
          <td>Amount Due</td>
          <td>Status</td>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>{tableElems}</tbody>
    </table>
  );
};

export default Table;
