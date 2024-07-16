FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application(For production and optimized performance)
RUN npm run build

# Expose the port that the Next.js application will run on
EXPOSE 3000

# Start the Next.js application(For Development)
# CMD ["npm", "run", "dev"]
# Start the Next.js application(For Production and optimized performance)
# Use along with RUN npm run build; Comment out npm run dev during this
CMD ["npm","run","start"]
