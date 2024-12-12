![Logo](images/logo.png)


# Medication Reminder App

A full-stack web application to help users manage their medication schedules and track their doses. Built with React, TypeScript, and Node.js.

## Features

- **User Authentication**
  - Secure login and registration
  - JWT-based authentication
  - Role-based access control (User/Admin)

- **Medicine Management**
  - Add, edit, and delete medications
  - Set medication schedules
  - Track medication doses
  - Acknowledge taken/missed medications

- **Admin Dashboard**
  - View medication acknowledgment logs
  - Filter logs by date range and user
  - Monitor user compliance

## Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- React Router DOM
- React Hook Form + Zod
- Lucide React (icons)
- Axios
- date-fns

### Development Tools
- Vite
- ESLint
- PostCSS
- Autoprefixer

## Project Structure

```
src/
├── components/
│   ├── medicines/
│   │   ├── MedicineForm.tsx
│   │   └── MedicineList.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── Input.tsx
│   ├── Layout.tsx
│   └── PrivateRoute.tsx
├── context/
│   └── AuthContext.tsx
├── pages/
│   ├── AdminDashboard.tsx
│   ├── Dashboard.tsx
│   ├── Login.tsx
│   └── Register.tsx
├── types/
│   └── index.ts
├── utils/
│   ├── api.ts
│   └── cn.ts
├── App.tsx
└── main.tsx
```

## Getting Started

1. **Clone the repository**

```bash
git clone <repository-url>
cd medication-reminder-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure Details

### Components

- `components/medicines/`: Medicine-related components
  - `MedicineForm.tsx`: Form for adding/editing medicines
  - `MedicineList.tsx`: Table display of medicines with actions

- `components/ui/`: Reusable UI components
  - `Button.tsx`: Custom button component
  - `Input.tsx`: Form input component

- `Layout.tsx`: Main application layout with navigation
- `PrivateRoute.tsx`: Route protection component

### Pages

- `Dashboard.tsx`: User's main medicine management interface
- `AdminDashboard.tsx`: Admin interface for viewing logs
- `Login.tsx`: User authentication
- `Register.tsx`: New user registration

### Context

- `AuthContext.tsx`: Authentication state management

### Utils

- `api.ts`: API client setup and endpoints
- `cn.ts`: Utility for managing class names

## Features in Detail

### Authentication

- Secure login/register system
- JWT token management
- Protected routes
- Role-based access control

### Medicine Management

- CRUD operations for medicines
- Schedule setting
- Dose tracking
- Acknowledgment system

### Admin Features

- View all medication logs
- Filter by date range
- Filter by user
- Track medication adherence

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
