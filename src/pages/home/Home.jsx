import React, { lazy, useEffect } from "react";
import "./home.css";
const Header = lazy(() => import("../../components/header/Header"));
const GraphicConversions = lazy(() =>
    import("../../components/graphic-conversions/Graphic-conversions.jsx")
);
const GraphicExpenses = lazy(() =>
    import("../../components/graphic-expenses/Graphic-expenses.jsx")
);
const GraphicTransactions = lazy(() =>
    import("../../components/graphic-transactions/Graphic-transactions.jsx")
);
const Navbar = lazy(() => import("../../components/navbar/Navbar"));
const TransactionsCount = lazy(() =>
    import("../../components/transactions-count/Transactions-count")
);

const Home = () => {
    useEffect(() => {
        function handleResize() {
            const title = document.getElementById("title");
            const titlecontainer = document.getElementById("titlecontainer");
            const cards = document.getElementsByClassName("card");
            if (window.innerHeight >= window.innerWidth) {
                if (title) {
                    title.innerHTML = `
                            <h1 class="title-mobile">
                                Transactions history
                            </h1>
                            <h2 class="subtitle-mobile">
                                These are your monthly and daily actions. 📊
                            </h2>
                    `;
                    titlecontainer.classList.remove("bg-gray");
                }
                for (let i = 0; i < cards.length; i++) {
                    cards[i].classList.add("boxshadow");
                }
            } else {
                if (title) {
                    title.innerHTML = `
                    <h1 class="title-landscape">
                    Dashboard
                    </h1>  
                    `;
                    titlecontainer.classList.add("bg-gray");
                }
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
            <Header />
            <Navbar />
            <div id="titlecontainer">
                <div id="title">
                    {" "}
                    <h1 className="title-landscape">Dashboard</h1>
                </div>
            </div>
            <section className="content">
                <section className="column1">
                    <TransactionsCount />
                    <GraphicTransactions />
                    <GraphicConversions />
                </section>
                <section className="column2">
                    <GraphicExpenses />
                </section>
            </section>
        </>
    );
};

export default Home;
