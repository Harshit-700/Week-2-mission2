# CashFlow Tracker — Expense Tracker

A clean, responsive expense tracking web app that helps you  to manage your salary, log expenses, and visualize your spending. Built with the help of vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies beyond Chart.js and Font Awesome.

🔗 **Live Demo:** [https://your-live-demo-link.vercel.app/](https://week-2-mission2-97fe.vercel.app/)

---

## 📸  Screenshot

![App Screenshot](screenshot(412).png)

---

## 📁 Project Structure

```
cashflow-tracker/
├── index.html       # Main HTML structure
├── style.css        # All styling + responsive layout
└── script.js        # Logic, localStorage, Chart.js integration
```

---

## ✨ Features

- **Set Salary** — Enter your total monthly salary and display it instantly on screen
- **Add Expenses** — Log expense name and amount; added to a live scrollable list
- **Delete Expenses** — Remove any expense with a 🗑️ trash icon; balance updates instantly
- **Real-time Balance** — `Remaining Balance = Total Salary − Total Expenses`, auto-calculated
- **Pie Chart** — Visual breakdown of Expenses vs Savings using Chart.js
- **LocalStorage Persistence** — Data survives page refreshes; no data loss on reload
- **Input Validation** — Prevents empty fields, negative amounts, and over-budget expenses
- **Responsive Design** — Works across desktop, tablet, and mobile screens
- **No Build Tools** — Pure HTML/CSS/JS, zero dependencies (except CDN libraries)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Harshit-700/Week-2-mission2.git
cd cashflow-tracker
```

### 2. Open in browser

Just open `index.html` directly in your browser — no server required.

```bash
# Or use VS Code Live Server / any static server
npx serve .
```

---

## 🧩 Sections

| Section | Description |
|---------|-------------|
| **Header** | App title with gradient blue background |
| **Summary Cards** | 3 cards showing Total Salary 🟢, Total Expense 🔴, Remaining Balance 🔵 |
| **Add Expense Form** | Inputs for salary, expense name, and amount with action buttons |
| **Expense List** | Scrollable list of all expenses with individual delete buttons |
| **Pie Chart** | Real-time Chart.js pie chart — Expenses vs Savings |

---

## 🎨 Design Tokens

| Property | Value |
|----------|-------|
| Primary Font | System default (sans-serif) |
| Primary Color | `rgb(66, 133, 244)` — Blue |
| Salary Card | `rgb(52, 168, 83)` — Green |
| Expense Card | `rgb(234, 67, 53)` — Red |
| Balance Card | `rgb(66, 133, 244)` — Blue |
| Header Gradient | `rgb(58, 110, 196)` → `rgb(67, 114, 196)` |
| Background | `rgb(240, 242, 245)` |

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| `> 768px` | Expense list and chart side by side (40% each) |
| `≤ 768px` | Expense list and chart stack vertically (100% width) |
| `≤ 600px` | Container adjusts padding and margin for mobile |

---

## 🔒 Validation Rules

| Scenario | Behavior |
|----------|----------|
| Salary field empty / not a number | Alert: *"Enter valid salary"* |
| Expense name or amount missing | Alert: *"Required to fill all fields"* |
| Expense exceeds remaining balance | Alert: *"Don't have enough balance!"* |

---

## 🧠 localStorage Keys

| Key | Type | Description |
|-----|------|-------------|
| `salary` | Number | Stores the total salary set by the user |
| `expenses` | JSON Array | Stores all expense objects `{ name, amount }` |

---

## 🛠️ Built With

- **HTML5** — Semantic markup and structure
- **CSS3** — Flexbox, media queries, border-radius, transitions
- **Vanilla JavaScript** — DOM manipulation, event listeners, localStorage
- **[Chart.js](https://www.chartjs.org/)** — Pie chart visualization (CDN)
- **[Font Awesome 6](https://fontawesome.com/)** — Trash icon on delete buttons (CDN)
- **[Vercel](https://vercel.com/)** — Deployment

---

## 💡 Future Improvements

- Add expense categories (Food, Travel, Bills, etc.)
- Monthly tracking with history view
- Dark mode toggle

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
