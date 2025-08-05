# Use Node.js LTS base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy application file
COPY index.js .

# Run the app with Node
CMD ["node", "index.js"]
