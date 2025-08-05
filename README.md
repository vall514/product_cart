## 🍰 Dessert Menu Cart

A responsive React app that displays a list of dessert products with a dynamic shopping cart. Users can browse desserts, view details (image, name, price), and add/remove them from the cart. Built with React and styled using custom CSS (can be extended with Tailwind or CSS Modules).


### 🛠️ Features

* 🍩 List of desserts loaded from a JSON file
* 🛒 Functional shopping cart:

  * Add items
  * Remove items
  * Adjust quantity
  * Display total cost
* 🧁 Responsive layout for mobile, tablet, and desktop
* 📦 Modular React components (Product, ProductList, Cart)
* 🎨 Clean and customizable CSS layout

---

### 📁 Project Structure

```
project-root/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/
│   │   └── images/                # Dessert images
│   ├── components/
│   │   ├── Product.jsx            # Individual product display
│   │   ├── ProductList.jsx        # Grid of products
│   │   └── Cart.jsx               # Cart component
│   ├── data/
│   │   └── data.json              # Dessert products
│   ├── App.jsx                    # Main component
│   ├── App.css                    # Global styles
│   └── main.jsx                   # React entry point
│
├── package.json
└── README.md
```

---

### 📦 Tech Stack

* **React** (Vite)
* **CSS** for styling
* **JavaScript (ES6+)**
* Optional: Tailwind CSS or Bootstrap (not used here)

---

### 📊 Data Structure

Your product data is stored in `data.json`:

```json
{
  "id": 1,
  "name": "Vanilla Panna Cotta",
  "price": 6.5,
  "category": "Panna Cotta",
  "image": {
    "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg"
  }
}
```

---

### 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/product_cart.git
cd product_cart
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser**

Visit: [http://localhost:5173](http://localhost:5173)

---

### 🧪 Functionality

#### Product Display

* Dynamically loops through JSON data
* Shows thumbnail, name, category, and price

#### Cart Behavior

* Add item → increases quantity
* Re-adding same item → increments count
* Remove button → decreases quantity
* Total updates live

---

### 🧱 Styling

All custom styles are defined in `App.css`. Components use classNames like:

```css
.product-card {
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
```

You can modularize styles by:

* Splitting each component's CSS into its own file (e.g., `Product.css`)
* Or using a framework like Tailwind

---

### 🖼 Image Usage

Each dessert uses a thumbnail image defined in the JSON:

```jsx
<img src={product.image.thumbnail} alt={product.name} />
```

Make sure your images are located in `public/assets/images/` and properly referenced.

