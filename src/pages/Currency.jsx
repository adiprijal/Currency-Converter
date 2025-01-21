import React from "react";
import PageTransition from "../components/shared/PageTransition.jsx";
import SectionTitle from "../components/shared/SectionTitle.jsx";
import styles from "./Currency.module.css";
import currencydata from "../context/currency.json";

const Currency = () => {
  

  return (
    <PageTransition>
    <div className={styles.container}>
      <div className={styles.SectionTitle}>
      <SectionTitle 
        title="Currency" />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Country</th>
            <th>Full Name</th>
            <th>Short Form</th>
          </tr>
        </thead>
        <tbody>
          {currencydata.map((currency, index) => (
            <tr key={index}>
              <td>{currency.country}</td>
              <td>{currency.name}</td>
              <td>{currency.code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </PageTransition>
  );
};

export default Currency;
