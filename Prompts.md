#  CashFlow Tracker — Prompts_Documentation

This document outlines the structured prompts that used during the development of the **CashFlow Tracker** project. Each prompt is written to achieve specific functionality with clarity and precision.

---

## 1. Responsive Layout (Media Queries)

Refactor the existing layout using CSS Flexbox and media queries for full responsiveness. On screens below 768px, stack the expense list and chart container vertically, maintain consistent spacing, and prevent overflow in the container.

---

##  2. Chart Integration (Chart.js)

Integrate Chart.js by CDN and render a pie chart inside a `<canvas>` element, The chart should display **Total Expenses** and **Remaining Balance** using two distinct colors, initialized with default values.

---

## 3. Data Persistence (localStorage)

Implement localStorage to persist the user's salary and expense list across sessions. Store expense data as a structured JSON array and ensure consistency during both save and retrieval operations.

---

## 4. Restore Data on Page Load

On page load, retrieve and parse stored localStorage data, then reconstruct the UI by repopulating the expense list and recalculating total expenses and remaining balance.

---

## 5. Dynamic Chart Updates

Update the pie chart dynamically whenever an expense is added or deleted. Modify only dataset values and call the chart's update method — do not reinitialize the chart instance.

---

## 6. Delete Expense Functionality

Add a delete button (trash icon) to each expense item. On click, remove the item from the DOM, update the internal data array, sync changes to localStorage, and refresh both the UI and the chart.

---

## 7. Input Validation & Error Handling

Validate all inputs to block empty fields, non-numeric values, and expenses that exceed total salary. Display appropriate alert messageses to guide users on invalid actions.

