// index.js
const memoryHog = [];
console.log("Starting aggressive CPU and RAM consumption...");

setInterval(() => {
  const fiveMB = 'x'.repeat(5 * 1024 * 1024); // ~5MB
  memoryHog.push(fiveMB); // Store permanently
  for (let i = 0; i < 5e7; i++) {
    Math.sqrt(i); // Burn CPU
  }
  console.log(`Allocated memory: ${memoryHog.length * 5} MB`);
}, 1000);
