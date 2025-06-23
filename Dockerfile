# Use Node 16
FROM node:16

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Build the Vue frontend
RUN npm run build

# Start the app
CMD ["npm", "start"]