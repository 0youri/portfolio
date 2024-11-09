# docker/nuxt.Dockerfile

# Stage 1: Build
FROM node:20 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ARG NODE_ENV=production
RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi

# Stage 2: Serve
FROM node:20
WORKDIR /app
COPY --from=builder /app /app
ENV NODE_ENV=production
CMD ["npm", "run", "start"]