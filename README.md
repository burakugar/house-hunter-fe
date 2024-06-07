# Frontend Documentation

This document provides instructions on how to set up and run the frontend of our application, which is built using React.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- npm

## Getting Started

Follow these steps to get the frontend application up and running:

### 1. Clone the Repository

First, clone the repository to your local machine using Git:

```bash
git clone https://github.com/PCU-SAD/house-hunt-fe.git
cd house-hunt-fe
```

### 2. Install Dependencies

Navigate to the root directory of the project and install the necessary dependencies:

```bash
npm install
```

### 3. Create a `.env` File

In the root of the project, create a `.env` file to configure environment variables. At a minimum, you need to set the following variables:

```env
VITE_API_URL=http://localhost:8080/api/v1
VITE_NODE_ENV=development
```

### 4. Run the Application

Start the development server by running:

```bash
npm run dev
```

This will launch the application in development mode. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Additional Scripts

The following npm scripts are also available:

- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Runs the linter to check for code style issues.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a Pull Request.

## Contact

If you have any questions, feel free to reach out to us at matvii.kharchenko@praguecollege.cz

