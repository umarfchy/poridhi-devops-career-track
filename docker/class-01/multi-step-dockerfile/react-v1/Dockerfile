# Build the React application
FROM node:20-alpine

WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 4173

# Start serve the application
CMD ["npm", "run", "preview"]

