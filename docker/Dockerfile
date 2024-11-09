# docker/nuxt.Dockerfile
FROM node:20

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the application
COPY . .

# Set default environment to production if not provided
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# Only build in production mode
RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi