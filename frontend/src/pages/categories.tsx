//categories
import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import "./categories.css";

interface Category {
  name: string;
  type: "Income" | "Expense";
  symbol: string;
}

const initialCategories: Category[] = [
  { symbol: "💰", name: "Salary", type: "Income" },
  { symbol: "🎟️", name: "Coupons", type: "Income" },
  { symbol: "🎓", name: "Grants", type: "Income" },
  { symbol: "💵", name: "Refunds", type: "Income" },
  { symbol: "🎰", name: "Lottery", type: "Income" },
  { symbol: "🧑‍💻", name: "Freelance", type: "Income" },
  { symbol: "🛒", name: "Sale", type: "Income" },
  { symbol: "🏠", name: "Rental", type: "Income" },
  { symbol: "🏆", name: "Awards", type: "Income" },
  { symbol: "🍔", name: "Food", type: "Expense" },
  { symbol: "🏠", name: "Rent", type: "Expense" },
  { symbol: "🍼", name: "Baby", type: "Expense" },
  { symbol: "💄", name: "Beauty", type: "Expense" },
  { symbol: "💡", name: "Bills", type: "Expense" },
  { symbol: "🚗", name: "Car", type: "Expense" },
  { symbol: "👕", name: "Clothing", type: "Expense" },
  { symbol: "📚", name: "Education", type: "Expense" },
  { symbol: "📱", name: "Electronics", type: "Expense" },
  { symbol: "🎭", name: "Entertainment", type: "Expense" },
  { symbol: "⚕️", name: "Health", type: "Expense" },
  { symbol: "🏡", name: "Home", type: "Expense" },
  { symbol: "🛡️", name: "Insurance", type: "Expense" },
  { symbol: "🛍️", name: "Shopping", type: "Expense" },
  { symbol: "🎉", name: "Social", type: "Expense" },
  { symbol: "⚽", name: "Sports", type: "Expense" },
  { symbol: "💸", name: "Tax", type: "Expense" },
  { symbol: "📞", name: "Telephone", type: "Expense" },
  { symbol: "🚌", name: "Transportation", type: "Expense" }
];

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [newCategory, setNewCategory] = useState<string>("");
  const [categoryType, setCategoryType] = useState<"Income" | "Expense">("Income");

  const toggleDropdown = (categoryName: string) => {
    setDropdownOpen(dropdownOpen === categoryName ? null : categoryName);
  };

  const handleDelete = (categoryName: string) => {
    setCategories(categories.filter((category) => category.name !== categoryName));
    setDropdownOpen(null);
  };

  const handleEdit = (categoryName: string) => {
    const newName = prompt("Enter new category name:", categoryName);
    if (newName) {
      setCategories(
        categories.map((category) =>
          category.name === categoryName ? { ...category, name: newName } : category
        )
      );
    }
    setDropdownOpen(null);
  };

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCategory.trim() === "") return;
  
    // Assign a default symbol or let the user choose one
    const defaultSymbol = "🆕"; // You can change this or add symbol selection logic
  
    setCategories([...categories, { symbol: defaultSymbol, name: newCategory.trim(), type: categoryType }]);
    setNewCategory("");
  }; 
  
  return (
    <div className="container">
      <h2 className="heading">Income & Expense Categories</h2>

      {/* Income Categories */}
      <div className="section">
        <h3 className="section-title income-title">Income Categories</h3>
        <ul className="category-list">
          {categories
            .filter((category) => category.type === "Income")
            .map((category) => (
              <li key={category.name} className="category-item">
                <span className="category-name">{category.symbol} {category.name}</span>
                <button onClick={() => toggleDropdown(category.name)} className="options-button">
                  <FaEllipsisV />
                </button>
                {dropdownOpen === category.name && (
                  <div className="dropdown">
                    <button onClick={() => handleEdit(category.name)} className="dropdown-button">Edit</button>
                    <button onClick={() => handleDelete(category.name)} className="dropdown-button delete-button">Delete</button>
                  </div>
                )}
              </li>
            ))}
        </ul>
      </div>

      {/* Expense Categories */}
      <div className="section">
        <h3 className="section-title expense-title">Expense Categories</h3>
        <ul className="category-list">
          {categories
            .filter((category) => category.type === "Expense")
            .map((category) => (
              <li key={category.name} className="category-item">
                <span className="category-name">{category.symbol} {category.name}</span>
                <button onClick={() => toggleDropdown(category.name)} className="options-button">
                  <FaEllipsisV />
                </button>
                {dropdownOpen === category.name && (
                  <div className="dropdown">
                    <button onClick={() => handleEdit(category.name)} className="dropdown-button">Edit</button>
                    <button onClick={() => handleDelete(category.name)} className="dropdown-button delete-button">Delete</button>
                  </div>
                )}
              </li>
            ))}
        </ul>
      </div>
        {/* Add New Category Form */}
        <div className="form-container">
        <h3 className="form-title">Add New Category</h3>
        <form onSubmit={handleAddCategory} className="form">
          <div className="ctgry">
          <input 
            type="text"
            placeholder="Category name"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="form-input"
            required
          />
          </div>
          <select value={categoryType} onChange={(e) => setCategoryType(e.target.value as "Income" | "Expense")} className="form-select">
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
          <button type="submit" className="form-button">Add</button>
        </form>
      </div>
      <div className="last">
      <p> A successful life is built on the foundations of both discipline and freedom—discipline in managing our resources wisely and freedom in using those resources to foster personal growth, innovation, and meaningful experiences...
      </p>
      <p className="writer">– Inspired by Stephen Covey’s philosophy of time and resource management.

      </p>
      </div>
    </div>
  );
};

export default Categories;