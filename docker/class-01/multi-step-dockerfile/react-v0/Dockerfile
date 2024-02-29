# Build the React application
FROM node:latest

WORKDIR /app

# Copy the application code
COPY . .

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# Start serve the application
CMD ["npm", "run", "preview"]

