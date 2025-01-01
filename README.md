# Next.js Dynamic Route Data Fetching Error

This repository demonstrates a common error in Next.js applications involving dynamic routes and data fetching.  The `bug.js` file showcases the problematic code, where errors during data fetching aren't properly handled. This leads to an incomplete or broken user experience when accessing dynamic routes.  The solution, provided in `bugSolution.js`, illustrates how to implement robust error handling to gracefully manage potential issues during data retrieval.  This ensures a more reliable and user-friendly application.

## Setup

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd nextjs-data-fetching-error
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Usage

Access the dynamic route with a sample ID (e.g., `/post/1`).  Observe the difference in behavior between the `bug.js` and `bugSolution.js` implementations, highlighting the importance of proper error handling.