 # Company Portfolio Website
 

This project is a modern, responsive company portfolio website built with Next.js, designed to showcase services, team, and projects in a professional and engaging manner.

## Features

-   **Responsive Design**: Optimized for various screen sizes, from mobile devices to large desktops.
-   **Interactive Contact Form**: Allows visitors to send inquiries directly, with backend integration to MongoDB Atlas for data storage.
-   **Professional UI/UX**: Clean and intuitive user interface using Tailwind CSS.
-   **Dynamic API Routes**: Secure API endpoints for handling form submissions.
-   **MongoDB Integration**: Persistent storage for contact messages using Mongoose and MongoDB Atlas.
-   **Toast Notifications**: Enhanced user feedback for form submissions using `react-toastify`.

## Technologies Used

-   **Next.js**: React framework for production.
-   **React**: Frontend library for building user interfaces.
-   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
-   **Mongoose**: MongoDB object data modeling (ODM) for Node.js.
-   **MongoDB Atlas**: Cloud-hosted MongoDB service.
-   **react-toastify**: For professional and animated notifications.
-   **react-icons**: For scalable vector icons.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have Node.js and npm (or yarn/pnpm/bun) installed.

-   Node.js (v18 or later)
-   npm (v8 or later)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd comany-portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

### Environment Variables

Create a `.env.local` file in the root directory of your project and add the following environment variable:

```
MONGODB_URI=your_mongodb_atlas_connection_string
```

Replace `your_mongodb_atlas_connection_string` with your actual MongoDB Atlas connection string. You can obtain this from your MongoDB Atlas dashboard.

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To build the application for production, run:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

Then, to start the production server:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

## Project Structure

-   `src/app/`: Next.js App Router pages and API routes.
    -   `api/contact/route.js`: API endpoint for handling contact form submissions.
-   `src/components/`: Reusable React components.
    -   `contactUs.jsx`: The contact form component with client-side logic.
-   `src/lib/db.js`: Database connection utility using Mongoose.
-   `src/models/Contact.js`: Mongoose schema for contact messages.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
