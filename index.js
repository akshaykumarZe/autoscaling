
// Simulate memory load
const memoryHog = [];
setInterval(() => {
  const buffer = Buffer.alloc(50 * 1024 * 1024); // Allocate 50MB
  memoryHog.push(buffer);
  console.log(`Allocated 50MB. Total allocations: ${memoryHog.length * 50}MB`);
}, 5000); // Allocate every 5 seconds

// Simulate CPU load
function cpuHog() {
  const start = Date.now();
  while (Date.now() - start < 500) {
    // Busy loop for 500ms every second
    Math.sqrt(Math.random() * Math.random());
  }
  setTimeout(cpuHog, 500);
}
cpuHog();

console.log("CPU and memory load simulation started.");
