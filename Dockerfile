FROM node:18

WORKDIR /app
COPY index.js .

# Override Node's default memory limit
CMD ["node", "--max-old-space-size=256", "index.js"]
