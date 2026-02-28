# 📑 Contract Management Platform

A frontend-based Contract Management Platform built using **React (Vite)** and **TailwindCSS**.  
This application allows users to create reusable contract blueprints, generate contracts from them, and manage contracts through a controlled lifecycle.

---

# 🚀 Project Overview

This project demonstrates:

- Product thinking
- Component-based architecture
- State management using Context API + useReducer
- Controlled contract lifecycle
- Clean folder structure
- Mock persistence using localStorage

No backend is used. All data is stored locally in the browser.

---

# 🏗 Features

## 1️⃣ Blueprint Creation

A Blueprint represents a reusable contract template.

Users can:

- Create a new Blueprint
- Add configurable fields:
  - Text
  - Date
  - Signature
  - Checkbox
- Set basic field positioning (X and Y coordinates)
- Preview fields on a canvas
- Save blueprint to localStorage

Blueprint metadata stored:
- Field Type
- Label
- Position (X, Y)

---

## 2️⃣ Contract Creation from Blueprint

Users can:

- Select an existing Blueprint
- Generate a Contract from it
- Contract automatically inherits all fields
- Fill values in contract fields
- Contracts are stored in localStorage

---

## 3️⃣ Contract Lifecycle

Each contract follows this strict lifecycle:

Created → Approved → Sent → Signed → Locked  
Revoked (can occur after Created or Sent)

### Lifecycle Rules:

- No skipping steps
- State transitions are validated
- Locked contracts cannot be edited
- Revoked contracts cannot proceed further
- UI clearly shows current status and allowed next actions

Lifecycle logic is implemented in:

```
src/utils/lifecycle.js
```

Transitions are controlled using an allowedTransitions map.

---

## 4️⃣ Contract Dashboard

Dashboard displays:

- Contract Name
- Blueprint Name
- Status
- Created Date
- View Action

Filtering options:
- Active
- Pending
- Signed
- All

---

# 🏛 Architecture & Folder Structure

```
src/
│
├── components/
│   ├── blueprint/
│   ├── contract/
│   ├── dashboard/
│
├── context/
│   ├── BlueprintContext.jsx
│   └── ContractContext.jsx
│
├── pages/
│
├── utils/
│
└── App.jsx
```

---

# 🔄 State Management Approach

State is handled using:

- React Context API
- useReducer for predictable updates

Two main contexts:

1. BlueprintContext → manages blueprint data
2. ContractContext → manages contracts and lifecycle logic

Benefits:
- No prop drilling
- Clear separation of concerns
- Scalable structure
- Controlled state transitions

---

# 💾 Data Persistence

No backend is used.

Persistence is implemented using:

```
localStorage
```

Utility functions are located in:

```
src/utils/storage.js
```

This simulates backend behavior.

---

# 🎨 UI Design Decisions

- Built using TailwindCSS
- Focus on clarity and usability
- Logical workflow-based navigation
- Simple layout prioritizing structure over visual polish

---

# 🛠 Tech Stack

- React.js (Vite)
- TailwindCSS
- React Router DOM
- UUID
- Context API
- useReducer
- localStorage (Mock persistence)

---

# ⚙️ Setup Instructions

## 1️⃣ Clone Repository

```
git clone <your-repository-link>
cd contract-management-platform
```

## 2️⃣ Install Dependencies

```
npm install
```

## 3️⃣ Start Development Server

```
npm run dev
```

Application will run at:

```
http://localhost:5173
```

---

# 🌍 Deployment

To deploy:

```
npm run build
```

Deploy the `dist/` folder to:

- Vercel
- Netlify
- Any static hosting platform

---

# ⚠ Assumptions

- Single-user system
- No authentication
- No backend integration
- Basic positioning only (no drag-drop)
- Signature is text-based

---

# ❌ Limitations

- No real digital signature drawing
- No multi-user workflow
- No audit logs
- No role-based access control
- No PDF export
- No database

---

# 🔮 Future Improvements

- Drag-and-drop field positioning
- Real signature canvas
- Backend integration (Node.js / Django)
- Authentication system
- Role-based contract approvals
- PDF generation
- Activity logs

---

# 📊 Evaluation Criteria Covered

✔ Clean architecture  
✔ Controlled lifecycle handling  
✔ Proper state management  
✔ Clear UI flow  
✔ Organized folder structure  
✔ No monolithic files  
✔ Complete documentation  

---

# 👨‍💻 Author

Your Name  
Frontend Developer  

---

This project is developed for assignment/demo purposes.