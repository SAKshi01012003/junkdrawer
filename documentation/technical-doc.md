
# Product Management System - Technical Documentation

## Project Overview

The Product Management System is a web application that allows users to manage products across different organizations. The main features include:

1. Cloning products from one organization to another
2. Updating existing products
3. Listing products by organization

## Architecture

The application follows a client-server architecture:

- **Frontend**: React with TypeScript, utilizing shadcn/ui components and Tailwind CSS
- **Backend**: Node.js with Express, providing RESTful API endpoints

### System Architecture Diagram

```
┌────────────────┐         ┌────────────────┐         ┌────────────────┐
│                │         │                │         │                │
│  React Client  │ ◄─────► │  Express API   │ ◄─────► │  Apigee API    │
│                │         │                │         │                │
└────────────────┘         └────────────────┘         └────────────────┘
```

## Frontend

### Technologies Used

- **Vite**: Fast build tool for modern web development
- **React**: UI library for building component-based interfaces
- **TypeScript**: Static type-checking for JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Component library built on Radix UI primitives
- **Framer Motion**: Animation library for React
- **React Router Dom**: Client-side routing
- **Tanstack React Query**: Data fetching and state management
- **Sonner**: Toast notification library

### Key Components

- **CloneProduct**: Allows users to clone products between organizations
- **UpdateProduct**: Enables users to modify existing products
- **MainLayout**: Provides consistent layout with sidebar navigation

## Backend

### Technologies Used

- **Express.js**: Web framework for Node.js
- **Axios**: HTTP client for making API requests
- **Express Validator**: Middleware for request validation
- **CORS**: Cross-Origin Resource Sharing middleware
- **Morgan**: HTTP request logger middleware
- **Dotenv**: Environment variable loader

### API Endpoints

- `POST /api/products/clone`: Clone a product from one organization to another
- `PUT /api/products/update`: Update an existing product
- `GET /api/products/organizations`: Get list of organizations
- `GET /api/products/by-organization/:orgId`: Get products by organization ID
- `GET /api/health`: Check API health status

## Communication Flow

1. User interacts with the React UI
2. Frontend makes HTTP requests to the Express backend API
3. Backend validates requests and processes them
4. Backend communicates with the Apigee API for product operations
5. Results are returned to the frontend
6. UI updates to reflect changes

## Data Flow

### Product Cloning Process

1. User selects source and target organizations
2. User enters source and target tokens
3. User selects product to clone and enters new product details
4. Frontend sends request to backend API
5. Backend validates request data
6. Backend fetches product data from source organization via Apigee API
7. Backend modifies product data as specified
8. Backend creates new product in target organization via Apigee API
9. Success or error notification is displayed to user

### Product Update Process

1. User selects organization and product
2. User enters authorization token
3. User enters new product details
4. Frontend sends request to backend API
5. Backend validates request data
6. Backend updates product in organization via Apigee API
7. Success or error notification is displayed to user

## Security Considerations

- CORS is configured to restrict access to allowed origins
- Input validation is performed on all API endpoints
- Authorization tokens are required for API operations
- Error messages are sanitized in production environment

## Development Setup

### Prerequisites

- Node.js (v14+)
- npm or yarn package manager

### Frontend Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file from example
cp .env.example .env

# Start development server
npm run dev
```

## Deployment Considerations

- Frontend can be deployed as static files on any web server
- Backend requires Node.js environment
- Environment variables should be properly configured in production
- API URL in frontend should point to deployed backend
- CORS configuration should be updated for production domains

## Future Enhancements

- User authentication and authorization
- Role-based access control
- Improved error handling and reporting
- Pagination for large result sets
- Automated testing
