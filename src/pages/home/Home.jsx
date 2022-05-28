import React, { lazy, Suspense } from "react";
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
const Transactions_count = lazy(() =>
    import("../../components/transactions-count/Transactions-count")
);

const Home = () => {
    return (
        <>
            <Suspense fallback={<div className="loader"></div>}>
                <Header />
            </Suspense>
        </>
    );
};

export default Home;
