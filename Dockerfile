# ------------------------------ BUILD ------------------------------
FROM oven/bun AS build

# Set working directory.
WORKDIR /build

# Copy source code.
COPY package.json bun.lock tsconfig.json next.config.ts tailwind.config.js postcss.config.mjs next-env.d.ts ./
COPY app ./app
COPY components ./components
COPY public ./public

# Install dependencies.
RUN bun install --frozen-lockfile

# Build the application.
RUN bun run build

# ------------------------------ APP ------------------------------
FROM oven/bun AS app

# Set working directory.
WORKDIR /app

# Copy everything from the build stage.
COPY --from=build /build .

# Expose the port.
EXPOSE 3000

# Start the application.
CMD ["bun", "run", "start"]
