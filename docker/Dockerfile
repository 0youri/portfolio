# docker/nuxt.Dockerfile
FROM node:20

WORKDIR /app

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

COPY ./portfolio/frontend/package*.json ./
RUN npm ci --only=production  # Only production dependencies

COPY ./portfolio/frontend/ .

RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi

# Set default command to npm start
CMD ["npm", "start"]