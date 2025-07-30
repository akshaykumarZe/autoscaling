// index.js
const data = [];
console.log("Starting CPU and RAM consumption...");

setInterval(() => {
  // Allocate memory
  const str = "x".repeat(10 ** 6); // ~1MB string
  data.push(str);

  // Burn CPU
  for (let i = 0; i < 1e8; i++) {
    Math.sqrt(i);
  }

  console.log(`Memory blocks: ${data.length} (~${data.length} MB)`);
}, 1000);
