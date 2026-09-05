# 1Fi Marketplace

A responsive marketplace section built as part of the 1Fi SDE Intern Assignment.

The project extends the Shop experience with a dedicated **1Fi Marketplace** where users can browse products, view product details, explore available variants, select an EMI plan, and proceed with the selected plan.

## Features

- 1Fi Marketplace integrated within the Shop experience
- Product listing with:
  - Product image
  - Product name
  - Product price
  - Starting monthly EMI
- Product details view
- Product variant selection
- Multiple EMI plan options
- EMI plan selection
- Proceed with selected EMI plan CTA
- Loading state while fetching products
- Error handling for product loading
- Responsive design for different screen sizes
- Reusable React components and state management
- Product data separated from UI components
- Mock service layer for dynamic product data retrieval

## Tech Stack

- React.js
- Vite
- JavaScript
- HTML5
- CSS3

## Project Structure

```text
1fi-marketplace/
│
├── public/
│
├── src/
│   ├── data/
│   │   └── products.js
│   │
│   ├── services/
│   │   └── productService.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
