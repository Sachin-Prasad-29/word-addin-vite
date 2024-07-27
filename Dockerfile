# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Create and set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Install http-server
RUN npm install -g http-server

# Expose the port http-server will run on
EXPOSE 3000

# Command to run the application
CMD ["http-server", "dist", "-p", "3000"]

