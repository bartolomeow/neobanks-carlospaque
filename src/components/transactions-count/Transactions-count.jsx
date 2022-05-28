import React, { useEffect } from "react";
import "./transactions-count.css";

const Transactions_count = () => {
    useEffect(() => {
        function handleResize() {
            const cards = document.getElementsByClassName("transactions-card");
            if (window.innerHeight >= window.innerWidth) {
                for (let i = 0; i < cards.length; i++) {
                    cards[i].classList.add("boxshadow");
                }
            } else {
                for (let i = 0; i < cards.length; i++) {
                    cards[i].classList.remove("boxshadow");
                }
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();
    }, []);

    return (
        <>
            <div className="transactions-count-container">
                <div className="transactions-card">
                    <span className="transactions-title">Transactions</span>
                    <div className="num-transactions">35</div>
                    <span className="time-transactions">Last month</span>
                </div>
                <div className="transactions-card">
                    <span className="transactions-title">Transactions</span>
                    <div className="num-transactions">3</div>
                    <span className="time-transactions">Today</span>
                </div>
            </div>
        </>
    );
};

export default Transactions_count;
