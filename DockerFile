# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy files
COPY index.js .

# Run the script
CMD ["node", "index.js"]
