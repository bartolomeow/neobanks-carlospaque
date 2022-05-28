import React from "react";
import "./transactions-count.css";

const Transactions_count = () => {
    return (
        <>
            <div className="transactions-count-container">
                <div className="card">
                    <span className="transactions-title">Transactions</span>
                    <div className="num-transactions">35</div>
                    <span className="time-transactions">Last month</span>
                </div>
                <div className="card">
                    <span className="transactions-title">Transactions</span>
                    <div className="num-transactions">3</div>
                    <span className="time-transactions">Today</span>
                </div>
            </div>
        </>
    );
};

export default Transactions_count;
