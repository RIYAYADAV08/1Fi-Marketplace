# 🛍️ 1Fi Marketplace

A responsive **EMI-based product marketplace** built with **React and Vite** as part of the **1Fi SDE Intern Assignment**.

The project extends a Shop experience with a dedicated **1Fi Marketplace** tab, where users can browse products, view details, choose a variant, compare EMI plans and proceed with the plan they like.

---

## 📌 Project Overview

1Fi Marketplace is a frontend application that focuses on a clean product-discovery and EMI-selection flow. Product data is kept separate from the UI and served through a mock service layer that simulates an API call, complete with loading and error states.

---

## ✨ Features

- Shop page with **Brands**, **Nearby** and **1Fi Marketplace** tabs
- Product listing with image, name, price and **starting monthly EMI**
- Product details view
- Variant selection (storage / colour options)
- Multiple EMI plans per product (6, 12 and 18 months)
- EMI plan selection with highlighted active plan
- **Proceed with selected plan** call-to-action
- Loading state while products are being fetched
- Error handling for failed product loading
- Fully responsive layout for desktop, tablet and mobile
- Reusable components and clean state management with React Hooks
- Product data separated from UI components

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI library |
| Vite | Build tool and dev server |
| JavaScript (ES6+) | Programming language |
| HTML5 | Markup |
| CSS3 | Styling and responsive design |
| ESLint | Code quality |

---

## 📂 Project Structure

```text
1fi-marketplace/
├── public/
├── src/
│   ├── data/
│   │   └── products.js          # Mock product data (variants, EMI plans)
│   ├── services/
│   │   └── productService.js    # Mock API with simulated delay
│   ├── App.jsx                  # Main UI and state logic
│   ├── App.css                  # Component styles
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔄 How It Works

1. `getProducts()` in the service layer returns product data after a short delay, simulating a real API call.
2. `App.jsx` fetches the products on load and shows a **loading state**, or an **error message** if the request fails.
3. The user opens a product, picks a **variant** and selects an **EMI plan**.
4. Clicking **Proceed** confirms the selected plan for that product.

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/1Fi-Marketplace.git
cd 1Fi-Marketplace

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```


### Other Scripts

```bash
npm run build     # Create a production build
npm run preview   # Preview the production build
npm run lint      # Run ESLint
```

---

## 🚀 Future Improvements

- Connect to a real backend API
- Product search, sorting and filters
- Cart and checkout flow
- EMI calculator with interest and down payment
- Unit and UI tests

---

## 👩‍💻 Author

**Riya Yadav**

🔗 [LinkedIn](https://www.linkedin.com/in/riyayadav0803/)

---
