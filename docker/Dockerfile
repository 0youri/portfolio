# docker/nuxt.Dockerfile
FROM node:20

WORKDIR /app

# Copy package files and install dependencies with npm ci for consistency
COPY package*.json ./
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the Nuxt3 app
RUN npm run build

# Start the Nuxt3 application
CMD ["npm", "run", "start"]