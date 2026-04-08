# Robotronics 🤖

A comprehensive web platform for exploring, comparing, and tracking robotics components. Robotronics helps hobbyists and engineers find the best prices, compare technical specifications, and estimate project costs.

**Github Repository:** [https://github.com/arnavmadaan/robotronics-webp](https://github.com/arnavmadaan/robotronics-webp)

---

## Features

### Price Comparison and Tracking
- **Multi-Seller Tracking**: Compare real-time prices for robotics parts across major Indian sellers.
- **Price History**: Visualize price trends over time using interactive line charts powered by Chart.js.
- **Best Deal Identification**: Highlights the most cost-effective options for each component.

### Project-Based Discovery
- **Project Categories**: Browse components tailored for specific builds like Drones, Rovers, Line Followers, and Humanoids.
- **Smart Recommendations**: View curated lists of essential parts required for various robotics projects.

### Hardware Specification Comparison
- **Side-by-Side Analysis**: Compare technical specifications (voltage, torque, speed, etc.) of similar components.
- **Visual Spec Bars**: Quick evaluation of component performance through visual data representations.

### Project Tools
- **Build Calculator**: Select parts to automatically calculate the total estimated cost of a project.
- **Community Builds**: Explore and learn from curated project configurations shared by other creators.
- **AI Assistant**: An integrated chat interface to help with component Selection and technical queries.

### Shopping Experience
- **Persistent Cart**: Manage selected components with a full checkout flow supported by LocalStorage.
- **Wishlist**: Save components for future reference and project planning.

---

## Technical Stack

- **Frontend**: Semantic HTML5, Vanilla CSS (Modern CSS variables and Grid/Flexbox).
- **Logic**: Vanilla JavaScript (ES6+) with asynchronous data fetching.
- **Data Storage**: Client-side JSON management.
- **Charts**: Chart.js for data visualization.
- **Persistence**: Browser LocalStorage for cart and wishlist state.

---

## Directory Structure

```text
robotronics-webp/
├── index.html          # Main landing page
├── builds.html         # Community projects showcase
├── calculator.html      # Build cost estimator
├── cart.html           # Shopping cart
├── category.html       # Item browsing by project type
├── checkout.html       # Payment and order flow
├── compare.html        # Side-by-side spec comparison
├── product.html        # Detailed product view and charts
├── wishlist.html       # Saved items storage
├── CSS/                # Style definitions
├── JS/                 # Application logic and systems
└── DATA/               # Mock backend JSON data
```

---
