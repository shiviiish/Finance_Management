import React, { useState, useEffect } from "react";
import "./CSS_primary/budgets.css";
import "./CSS_primary/budgetsphone.css";

interface Category {
  id: number;
  name: string;
  icon: string;
  type: "Income" | "Expense";
}

interface Budget {
  limit: number;
  spent: number;
}

const categories: Category[] = [
  { id: 1, icon: "💰", name: "Salary", type: "Income" },
  { id: 2, icon: "🎟️", name: "Coupons", type: "Income" },
  { id: 3, icon: "🎓", name: "Grants", type: "Income" },
  { id: 4, icon: "💵", name: "Refunds", type: "Income" },
  { id: 5, icon: "🎰", name: "Lottery", type: "Income" },
  { id: 6, icon: "🧑‍💻", name: "Freelance", type: "Income" },
  { id: 7, icon: "🛒", name: "Sale", type: "Income" },
  { id: 8, icon: "🏠", name: "Rental", type: "Income" },
  { id: 9, icon: "🏆", name: "Awards", type: "Income" },
  { id: 10, icon: "🍔", name: "Food", type: "Expense" },
  { id: 11, icon: "🏠", name: "Rent", type: "Expense" },
  { id: 12, icon: "🍼", name: "Baby", type: "Expense" },
  { id: 13, icon: "💄", name: "Beauty", type: "Expense" },
  { id: 14, icon: "💡", name: "Bills", type: "Expense" },
  { id: 15, icon: "🚗", name: "Car", type: "Expense" },
  { id: 16, icon: "👕", name: "Clothing", type: "Expense" },
  { id: 17, icon: "📚", name: "Education", type: "Expense" },
  { id: 18, icon: "📱", name: "Electronics", type: "Expense" },
  { id: 19, icon: "🎭", name: "Entertainment", type: "Expense" },
  { id: 20, icon: "⚕️", name: "Health", type: "Expense" },
  { id: 21, icon: "🏡", name: "Home", type: "Expense" },
  { id: 22, icon: "🛡️", name: "Insurance", type: "Expense" },
  { id: 23, icon: "🛍️", name: "Shopping", type: "Expense" },
  { id: 24, icon: "🎉", name: "Social", type: "Expense" },
  { id: 25, icon: "⚽", name: "Sports", type: "Expense" },
  { id: 26, icon: "💸", name: "Tax", type: "Expense" },
  { id: 27, icon: "📞", name: "Telephone", type: "Expense" },
  { id: 28, icon: "🚌", name: "Transportation", type: "Expense" },
];

const BudgetPage: React.FC = () => {
  const [budgets, setBudgets] = useState<{ [key: number]: Budget }>({});

  useEffect(() => {
    const storedBudgets = localStorage.getItem("budgets");
    let parsedBudgets: { [key: number]: Budget } = storedBudgets
      ? JSON.parse(storedBudgets)
      : {};

    const updatedBudgets: { [key: number]: Budget } = {};
    categories.forEach((category) => {
      updatedBudgets[category.id] = parsedBudgets[category.id] || {
        limit: 0,
        spent: 0,
      };
    });

    setBudgets(updatedBudgets);
  }, []);

  useEffect(() => {
    localStorage.setItem("budgets", JSON.stringify(budgets));
  }, [budgets]);

  const handleSetBudget = (categoryId: number) => {
    const limit = parseFloat(prompt("Enter Budget Limit:") || "0");
    if (limit > 0) {
      setBudgets((prev) => ({
        ...prev,
        [categoryId]: { limit, spent: 0 },
      }));
    }
  };

  const handleResetBudget = (categoryId: number) => {
    if (!budgets[categoryId]) return;

    const limit = parseFloat(prompt("Enter New Budget Limit:") || "0");
    if (limit > 0) {
      setBudgets((prev) => ({
        ...prev,
        [categoryId]: { limit, spent: prev[categoryId].spent },
      }));
    }
  };

  return (
    <div className="back">
      <div className="budget-container">
        <h2 className="head">Budget Management</h2>
        <div className="budget-list">
          {categories.map((category) => {
            const budget = budgets[category.id] || { limit: 0, spent: 0 };
            return (
              <div key={category.id} className="budget-card">
                <div className="category-header">
                  <span className="icon">{category.icon}</span>
                  <span className="category-name">{category.name}</span>
                </div>

                <p className="hk">Limit: ₹{budget.limit.toFixed(2)}</p>
                <p className="hk">Spent: ₹{budget.spent.toFixed(2)}</p>
                <p className="hk">
                  Remaining:{" "}
                  <span
                    className={
                      budget.spent > budget.limit
                        ? "over-budget"
                        : "under-budget"
                    }
                  >
                    ₹{(budget.limit - budget.spent).toFixed(2)}
                  </span>
                </p>

                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{
                      width: `${(budget.spent / (budget.limit || 1)) * 100}%`,
                      backgroundColor:
                        budget.spent > budget.limit ? "red" : "green",
                    }}
                  ></div>
                </div>

                {budget.limit > 0 ? (
                  <button
                    onClick={() => handleResetBudget(category.id)}
                    className="bhu"
                  >
                    Reset Budget
                  </button>
                ) : (
                  <button
                    onClick={() => handleSetBudget(category.id)}
                    className="bhu"
                  >
                    Set Budget
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <section className="lastquote">
        <p>
          "A wise person should have money in their head, but not in their
          heart..."
        </p>
        <p className="writer">
          – Inspired by Jonathan Swift and ethical wealth management.
        </p>
      </section>
    </div>
  );
};

export default BudgetPage;
