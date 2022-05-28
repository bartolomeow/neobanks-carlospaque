import React, { lazy, useEffect } from "react";
import "./home.css";
const Header = lazy(() => import("../../components/header/Header"));
const Graphic_conversions = lazy(() =>
    import("../../components/graphic-conversions/Graphic-conversions.jsx")
);
const Graphic_expenses = lazy(() =>
    import("../../components/graphic-expenses/Graphic-expenses.jsx")
);
const Graphic_transactions = lazy(() =>
    import("../../components/graphic-transactions/Graphic-transactions.jsx")
);
const Navbar = lazy(() => import("../../components/navbar/Navbar"));
const Totalrevenue_count = lazy(() =>
    import("../../components/totalrevenue-count/Totalrevenue-count")
);
const TransactionsCount = lazy(() =>
    import("../../components/transactions-count/Transactions-count")
);

const Home = () => {
    useEffect(() => {
        function handleResize() {
            const title = document.getElementById("title");
            const titlecontainer = document.getElementById("titlecontainer");
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
            } else {
                if (title) {
                    title.innerHTML = `
                    <h1 class="title-landscape">
                    Dashboard
                    </h1>  
                    `;
                    titlecontainer.classList.add("bg-gray");
                }
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();
    }, []);

    return (
        <>
            <Header />
            <div id="titlecontainer">
                <div id="title">
                    {" "}
                    <h1 className="title-landscape">Dashboard</h1>
                </div>
            </div>
            <section className="column1">
                <TransactionsCount />
            </section>
            <section className="column2"></section>
        </>
    );
};

export default Home;
