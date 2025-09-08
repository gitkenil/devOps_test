# Stage 1: Build Node.js app
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy app source code
COPY index.js ./

# Stage 2: Production image
FROM node:20-alpine

WORKDIR /app

# Copy app and node_modules from builder stage
COPY --from=build /app /app

# Expose the port your app listens on
EXPOSE 8080

# Start the app
CMD ["node", "index.js"]

