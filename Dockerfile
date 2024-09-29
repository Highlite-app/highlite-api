# Use the official Node.js 18-alpine image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Set the memory limit for Node.js to avoid out of memory issues
ENV NODE_OPTIONS=--max-old-space-size=4096

# Copy the rest of the application source code to the container
COPY . .

# Run the build
RUN npm run build

# Expose the port your Nest.js application is listening on
EXPOSE 3000

# Command to start your Nest.js application
CMD ["node", "dist/main.js"]
