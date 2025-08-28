Project Description :

🖥️ TechHub – A Technology Marketplace

TechHub is a modern technology-based e-commerce platform where users can explore and purchase their preferred gadgets such as laptops, PCs, mobiles, smartwatches, and more. Alongside buyers, sellers can also contribute by adding their own products to the marketplace through a simple form that captures detailed product information.

The platform includes:

🔓 Public Pages – Landing page, product listing, product details.

🔐 Protected Pages – Sellers can log in and add products via a secure form.

📦 Product Management – Products are stored in a database and displayed to users.

🔔 User Experience Enhancements – Toast notifications for actions (e.g., successful product addition).

TechHub provides a seamless experience for both buyers and sellers in the world of technology.



Route Summary : 

Public Routes

/ → src/app/page.js → Landing Page

/login → src/app/login/page.jsx → Login Page

/login/components/SocialLogin.jsx → Social login component

/products → src/app/products/page.js → Products Page

Auth Routes

/auth → src/app/auth/page.jsx → Authentication Page (custom)

Protected (Dashboard) Routes

/dashboard/add-product → src/app/dashboard/add-product/page.jsx
→ Add Product Page (only for logged-in users)

API Routes

/api/addproduct → src/app/api/addproduct/route.js
→ Handles product creation (POST, etc.)

Internal Utility Files (not routes)

src/app/layout.js → Global layout

src/app/loading.js → Loading UI

src/app/globals.css → Global CSS

components/ → Shared components (Navbar, Footer, Hero, ProductHighlights)

lib/dbConnect.js → MongoDB connection helper

providers/NextAuthProvider.jsx → NextAuth.js context provider

middleware.js → Handles auth/session middleware

✅ So, in short, your app currently exposes these main routes:

/

/login

/auth

/products

/dashboard/add-product

/api/addproduct


Setup and Installation Instructions :

Setup & Installation Instructions

Follow the steps below to set up and run the TechHub project locally:

1. Clone the Repository
git clone https://github.com/sikdertanvir007/TechHub.git
cd Techhub

2. Install Dependencies

Make sure you have Node.js (v18+) and npm or yarn installed.

npm install
# or
yarn install

3. Configure Environment Variables

Create a .env.local file in the root directory and add the following variables:

MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000


(Add any other API keys/services your project uses, e.g., Cloudinary, Stripe, etc.)

4. Run the Development Server
npm run dev
# or
yarn dev


Now visit 👉 http://localhost:3000
 to view the app.

5. Build for Production
npm run build
npm start

6. Optional: Lint & Format Code
npm run lint
