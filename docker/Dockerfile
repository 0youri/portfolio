# portfolio/docker/Dockerfile
FROM nginx:latest

WORKDIR /var/www/portfolio

# Copy the static build files from the frontend directory into Nginx
COPY ./portfolio/frontend/.output/ .

# Expose the default Nginx port
EXPOSE 80