import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "./CSS_primary/analysis.css";

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  console.log(setSidebarOpen);
  const financialData = [
    { name: "Income", users: 2000000000 },
    { name: "Expense", users: 1500000000 },
    { name: "Savings", users: 1000000000 },
  ];

  const expenseCategories = [
    { name: "Baby", value: 500 },
    { name: "Beauty", value: 800 },
    { name: "Bills", value: 1500 },
    { name: "Car", value: 1200 },
    { name: "Clothing", value: 1000 },
    { name: "Education", value: 2000 },
    { name: "Electronics", value: 1800 },
    { name: "Entertainment", value: 1600 },
    { name: "Food", value: 2200 },
    { name: "Health", value: 1300 },
    { name: "Home", value: 1700 },
    { name: "Insurance", value: 1400 },
    { name: "Shopping", value: 1900 },
    { name: "Social", value: 900 },
    { name: "Sport", value: 1100 },
    { name: "Tax", value: 2100 },
    { name: "Telephone", value: 700 },
    { name: "Transportation", value: 2300 },
  ];

  const colors = [
    "#4CAF50",
    "#F44336",
    "#2196F3",
    "#FF9800",
    "#9C27B0",
    "#009688",
    "#795548",
    "#FFEB3B",
    "#E91E63",
    "#3F51B5",
    "#8BC34A",
    "#607D8B",
    "#CDDC39",
    "#FF5722",
    "#03A9F4",
    "#00BCD4",
    "#673AB7",
    "#FFC107",
  ];

  return (
    <div className="app-container">
      <div className={`content ${sidebarOpen ? "content-shifted" : ""}`}>
        <section id="home">
          <h1 className="mainheading">Welcome to Analysis Page.....</h1>
          <h1 className="h-primary">
            Data Speaks, We Listen – Your Financial Overview Awaits!
          </h1>
          <p>
            “Do not save what is left after spending, but spend what is left
            after saving.”
          </p>
          <p className="writer"> – Warren Buffett</p>
        </section>

        <div className="dropdown">
          <button className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
            📌 Notes Section {isOpen ? "▲" : "▼"}
          </button>
          {isOpen && (
            <div className="dropdown-content show">
              <textarea placeholder="Write your notes here..." />
            </div>
          )}
        </div>
        <div className="charts-container">
          <div className="chart-row">
            <div className="Piechart2">
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="users"
                  isAnimationActive={true}
                  animationBegin={0}
                  animationDuration={1200}
                  animationEasing="ease-out"
                  data={financialData}
                  cx={200}
                  cy={200}
                  outerRadius={80}
                  label
                >
                  {financialData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>

            <div className="Piechart1">
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="value"
                  isAnimationActive={true}
                  animationBegin={0}
                  animationDuration={1200}
                  animationEasing="ease-in-out"
                  data={expenseCategories}
                  cx={200}
                  cy={200}
                  outerRadius={80}
                  label
                >
                  {expenseCategories.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </div>

          {/* Bar Chart Row */}
          <div className="chart-row">
            <div className="barchart1">
              <BarChart
                width={500}
                height={300}
                data={financialData}
                barSize={20}
              >
                <XAxis
                  dataKey="name"
                  scale="point"
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar
                  dataKey="users"
                  fill="#8884d8"
                  background={{ fill: "#eee" }}
                />
              </BarChart>
            </div>

            <div className="barchart2">
              <BarChart
                width={500}
                height={300}
                data={expenseCategories}
                barSize={20}
              >
                <XAxis
                  dataKey="name"
                  scale="point"
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar
                  dataKey="value"
                  fill="#FF5733"
                  background={{ fill: "#eee" }}
                />
              </BarChart>
            </div>
          </div>
        </div>

        <section className="lastquote">
          <p>
            "True wealth does not lie in the things we acquire, but in the peace
            we find when we manage our resources wisely..."
          </p>
          <p className="writer">
            – Inspired by Aristotle and modern financial wisdom.
          </p>
        </section>
      </div>
    </div>
  );
};

export default App;
