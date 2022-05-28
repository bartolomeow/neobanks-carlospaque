import { AiOutlineEllipsis } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
    Cell,
    Legend,
    Line,
    Pie,
    PieChart,
    ResponsiveContainer
} from "recharts";
import "./graphic-conversions.css";

const data_users = [
    {
        name: "Screens",
        value: 45
    },
    {
        name: "PCs",
        value: 10
    },
    {
        name: "Phones",
        value: 27
    },
    {
        name: "TVs",
        value: 18
    }
];

const COLORS = ["#9013fe", "#e6e5e6", "#fb8832", "#007aff"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    _index
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const Graphic_conversions = () => {
    return (
        <div className="graphic-conversions-container">
            <div className="card card-big">
                <div className="graphic-conversions-title"><h3>Conversion</h3>
                <Link to="#">
                    <div className="conversion-icon">
                        <AiOutlineEllipsis size={25} color="black" />
                    </div>
                </Link>
                </div>
                <div className="graphic-conversions">
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={data_users}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data_users.map((_entry, _index) => (
                                    <Cell
                                        key={`cell-${_index}`}
                                        fill={COLORS[_index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="pv"
                                stroke="#8884d8"
                                activeDot={{ r: 8 }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Graphic_conversions;
