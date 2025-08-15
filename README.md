# Aluuna Website

A React/TypeScript website for Aluuna, an AI therapy companion app.

## Docker Setup

This project includes Docker configuration for both development and production environments.

### Prerequisites

- Docker
- Docker Compose

### Development

To run the development environment:

```bash
# Start development server
docker-compose -f docker-compose.dev.yml up --build

# Or use the main compose file
docker-compose up app-dev
```

The development server will be available at `http://localhost:3000`

### Production

To run the production environment:

```bash
# Start production server
docker-compose -f docker-compose.prod.yml up --build

# Or use the main compose file
docker-compose up app-prod
```

The production server will be available at `http://localhost:80`

### All Services

To run all services (development and production):

```bash
docker-compose up --build
```

## Local Development (without Docker)

If you prefer to develop locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

- `components/` - React components including UI components
- `imports/` - Imported assets and components
- `styles/` - CSS and styling files
- `App.tsx` - Main application component
- `main.tsx` - Application entry point

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Docker Commands

### Build images
```bash
docker-compose build
```

### View logs
```bash
docker-compose logs -f app-dev
```

### Stop services
```bash
docker-compose down
```

### Remove containers and volumes
```bash
docker-compose down -v
```
