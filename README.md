# Personal Statement - Inspired by Paytm UPI

## Overview

This project is a small personal statement inspired by the Paytm UPI application. It leverages modern web technologies to provide a seamless user experience while ensuring security and scalability.

## Tech Stack

- **Frontend & Backend**: [Next.js](https://nextjs.org/)
- **Authentication**: [NextAuth](https://next-auth.js.org/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) (Managed using Prisma ORM)
- **Package Manager**: [Bun](https://bun.sh/)
- **Containerization**: [Docker](https://www.docker.com/) (For database in development mode)

## Features

- User authentication using NextAuth
- Secure and efficient database management with Prisma & PostgreSQL
- Full-stack Next.js implementation for better performance
- Dockerize PostgreSQL for consistent development environments

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Recommended for Next.js compatibility)
- [Bun](https://bun.sh/)
- [Docker](https://www.docker.com/)
- PostgreSQL (If not using Docker)

### Steps

1. **Clone the repository**

   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies using Bun**

   ```sh
   bun install
   ```

3. **Set up environment variables.** Create a `.env` file and configure the following:

   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/your_db
   NEXTAUTH_SECRET=your_secret_key
   ```

4. **Run PostgreSQL using Docker (Development Mode)**

   ```sh
   docker-compose up -d
   ```

5. **Run database migrations**

   ```sh
   bun prisma migrate dev
   ```

6. **Start the development server**

   ```sh
   bun dev
   ```

## Usage

- Visit `http://localhost:3000` to access the application.
- Register/Login to see account details.
