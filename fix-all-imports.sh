#!/bin/bash

echo "Fixing all import statements with version numbers..."

# Fix class-variance-authority imports
find components/ui -name "*.tsx" -type f -exec sed -i 's/class-variance-authority@[0-9]\+\.[0-9]\+\.[0-9]\+/class-variance-authority/g' {} \;

# Fix lucide-react imports
find components/ui -name "*.tsx" -type f -exec sed -i 's/lucide-react@[0-9]\+\.[0-9]\+\.[0-9]\+/lucide-react/g' {} \;

# Fix input-otp imports
find components/ui -name "*.tsx" -type f -exec sed -i 's/input-otp@[0-9]\+\.[0-9]\+\.[0-9]\+/input-otp/g' {} \;

# Fix react-resizable-panels imports
find components/ui -name "*.tsx" -type f -exec sed -i 's/react-resizable-panels@[0-9]\+\.[0-9]\+\.[0-9]\+/react-resizable-panels/g' {} \;

# Fix recharts imports
find components/ui -name "*.tsx" -type f -exec sed -i 's/recharts@[0-9]\+\.[0-9]\+\.[0-9]\+/recharts/g' {} \;

# Fix next-themes imports
find components/ui -name "*.tsx" -type f -exec sed -i 's/next-themes@[0-9]\+\.[0-9]\+\.[0-9]\+/next-themes/g' {} \;

# Fix sonner imports
find components/ui -name "*.tsx" -type f -exec sed -i 's/sonner@[0-9]\+\.[0-9]\+\.[0-9]\+/sonner/g' {} \;

# Fix react-hook-form imports
find components/ui -name "*.tsx" -type f -exec sed -i 's/react-hook-form@[0-9]\+\.[0-9]\+\.[0-9]\+/react-hook-form/g' {} \;

# Fix vaul imports
find components/ui -name "*.tsx" -type f -exec sed -i 's/vaul@[0-9]\+\.[0-9]\+\.[0-9]\+/vaul/g' {} \;

# Fix react-day-picker imports
find components/ui -name "*.tsx" -type f -exec sed -i 's/react-day-picker@[0-9]\+\.[0-9]\+\.[0-9]\+/react-day-picker/g' {} \;

# Fix cmdk imports
find components/ui -name "*.tsx" -type f -exec sed -i 's/cmdk@[0-9]\+\.[0-9]\+\.[0-9]\+/cmdk/g' {} \;

# Fix embla-carousel-react imports
find components/ui -name "*.tsx" -type f -exec sed -i 's/embla-carousel-react@[0-9]\+\.[0-9]\+\.[0-9]\+/embla-carousel-react/g' {} \;

echo "All import statements fixed!"
