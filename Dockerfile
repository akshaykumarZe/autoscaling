# Use a lightweight base image
FROM alpine:3.20

# Step 1: Print some build logs
RUN echo "===== Starting Docker build =====" && \
    echo "Step 1: Updating package index" && \
    apk update && \
    echo "Step 2: Installing curl" && \
    apk add --no-cache curl && \
    echo "Step 3: Checking curl version" && \
    curl --version && \
    echo "===== Build is about to fail ====="

# Step 2: Force a failure
RUN echo "Forcing a failure now..." && exit 1

