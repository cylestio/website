#!/bin/bash

# Install dependencies
npm install

# Create necessary directories
mkdir -p app/components
mkdir -p public/images

# Initialize git if not already initialized
if [ ! -d .git ]; then
  git init
fi

# Create .gitignore
echo "node_modules
.next
.env
.env.local
.DS_Store" > .gitignore

# Make the script executable
chmod +x setup.sh

echo "Setup complete! Run 'npm run dev' to start the development server." 