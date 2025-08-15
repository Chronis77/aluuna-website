#!/bin/bash

# Fix import statements by removing version numbers
find components/ui -name "*.tsx" -type f -exec sed -i 's/@\([^@]*\)@[0-9]\+\.[0-9]\+\.[0-9]\+/@\1/g' {} \;

echo "Import statements fixed!"
