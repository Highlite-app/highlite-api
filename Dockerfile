# Use the official Node.js image as the base
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Build the application
RUN npm run build

# Use a smaller base image for the production environment
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the build output and node_modules from the builder stage
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules

# Expose the port your NestJS application listens on
EXPOSE 3000

# Command to start your NestJS application
CMD ["node", "dist/main.js"]
