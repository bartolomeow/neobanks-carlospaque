import { AiOutlineCalendar } from "react-icons/ai";
import { GoArrowUp } from "react-icons/go";
import { Link } from "react-router-dom";
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import "./graphic-expenses.css";

const data_daily = [
    {
        Date: "2022-05-20",
        Open: "8464.900391",
        High: "8546.900391",
        Low: "8456.099609",
        Close: "8484.500000",
        AdjClose: "8484.500000",
        Volume: "172383300"
    },
    {
        Date: "2022-05-23",
        Open: "8600.400391",
        High: "8625.799805",
        Low: "8514.700195",
        Close: "8625.799805",
        AdjClose: "8625.799805",
        Volume: "166876400"
    },
    {
        Date: "2022-05-24",
        Open: "8537.799805",
        High: "8654.000000",
        Low: "8534.299805",
        Close: "8631.200195",
        AdjClose: "8631.200195",
        Volume: "207033000"
    },
    {
        Date: "2022-05-25",
        Open: "8723.099609",
        High: "8773.900391",
        Low: "8652.200195",
        Close: "8760.200195",
        AdjClose: "8760.200195",
        Volume: "203488200"
    },
    {
        Date: "2022-05-26",
        Open: "8787.500000",
        High: "8901.200195",
        Low: "8780.000000",
        Close: "8888.799805",
        AdjClose: "8888.799805",
        Volume: "203819800"
    },
    {
        Date: "2022-05-27",
        Open: "8904.000000",
        High: "8937.700195",
        Low: "8873.000000",
        Close: "8933.599609",
        AdjClose: "8933.599609",
        Volume: "194951400"
    }
];

const Graphic_expenses = () => {
    return (
        <div className="graphic-expenses-container">
            <div className="card card-big">
                <div className="graphic-expenses-title">
                    <h3>Weekly expenses</h3>
                    <Link to="#">
                        <div className="expenses-icon">
                            <span className="temp-expenses">
                                Oct - Nov 2019
                            </span>
                            <AiOutlineCalendar size={15} color="black" />
                        </div>
                    </Link>
                </div>
                <div className="graphic-expenses">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            width={500}
                            height={400}
                            data={data_daily}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 10,
                                bottom: 0
                            }}
                        >
                            <defs>
                                <linearGradient
                                    id="colorUv"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#2D14C4"
                                        stopOpacity={0.8}
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="#ffffff"
                                        stopOpacity={1}
                                    />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="Date" />
                            <YAxis />
                            <Tooltip />
                            <Area
                                type="monotone"
                                dataKey="Close"
                                stroke="#8884d8"
                                fillOpacity={1}
                                fill="url(#colorUv)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className="totalrevenue-container">
                    <div className="totalrevenue-title">
                        <h3>Total Revenue</h3>
                    </div>
                    <div className="totalrevenue-num">
                        <span>$76685.41</span>
                    </div>
                    <div className="totalrevenue-benefits">
                        <GoArrowUp size={15} color="4AAF05" />
                        <span>7,00%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Graphic_expenses;
