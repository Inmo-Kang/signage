#!/bin/bash

# Define the source directory for images
IMAGE_DIR="public/images/portfolio"

# Define the output file path
OUTPUT_FILE="app/data/portfoliolist.js"

# Check and create the output directory if it doesn't exist
mkdir -p "$(dirname "$OUTPUT_FILE")"

# Start the JavaScript array content
echo "export const portfolioImages = [" > "$OUTPUT_FILE"

# Find image files and format their paths for macOS
find "$IMAGE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \) -print0 | while IFS= read -r -d $'\0' file; do
  # Remove the 'public' prefix and add a leading '/' for the final web path
  cleaned_path="/${file#public/}"
  printf "  '%s',\n" "${cleaned_path}" >> "$OUTPUT_FILE"
done

# Remove the trailing comma from the last entry (sed for macOS)
sed -i '' -e '$s/,//' "$OUTPUT_FILE"

# End the JavaScript array content
echo "];" >> "$OUTPUT_FILE"

echo "Successfully generated $OUTPUT_FILE"