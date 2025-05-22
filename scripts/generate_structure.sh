#!/usr/bin/env bash
set -euo pipefail

# Set the project root dynamically
PROJECT_ROOT="$(pwd)"

# Enhanced script usability
if [ "${1:-}" == "--help" ]; then
  echo "Usage: ./generate_structure.sh [options]"
  echo "Options:"
  echo "  --help       Show this help message"
  echo "  --reset      Reset the project structure"
  exit 0
fi

if [ "${1:-}" == "--reset" ]; then
  echo "Resetting project structure..."
  rm -rf configs docs legal membership operations marketing tech scripts
  echo "Project structure reset."
  exit 0
fi

# Add error handling and logging
LOG_FILE="generate_structure.log"
exec > >(tee -i "$LOG_FILE")
exec 2>&1

# Log start of script
echo "Script started at $(date)"

# Root files
touch "$PROJECT_ROOT/.gitignore" "$PROJECT_ROOT/LICENSE" "$PROJECT_ROOT/README.md"

# Directories to create
dirs=(
  "configs"
  "docs"
  "legal"
  "membership"
  "operations"
  "marketing/branding"
  "marketing"
  "marketing/social_media"
  "tech/website/public"
  "tech/website/src"
  "tech"
  "scripts"
)

# Create directories
for d in "${dirs[@]}"; do
  mkdir -p "$PROJECT_ROOT/$d"
done

# Placeholder files
touch "$PROJECT_ROOT/docs/compliance.md" \
      "$PROJECT_ROOT/docs/distributor_list.md" \
      "$PROJECT_ROOT/docs/product_catalog.md" \
      "$PROJECT_ROOT/legal/licensing_requirements.md" \
      "$PROJECT_ROOT/legal/supply_agreements.md" \
      "$PROJECT_ROOT/membership/onboarding.md" \
      "$PROJECT_ROOT/membership/portal_spec.md" \
      "$PROJECT_ROOT/membership/tiers.md" \
      "$PROJECT_ROOT/operations/floor_plan.md" \
      "$PROJECT_ROOT/operations/site_selection.md" \
      "$PROJECT_ROOT/marketing/launch_plan.md" \
      "$PROJECT_ROOT/marketing/social_media_strategy.md" \
      "$PROJECT_ROOT/marketing/branding/logo.svg" \
      "$PROJECT_ROOT/marketing/branding/style_guide.md" \
      "$PROJECT_ROOT/tech/inventory_system.md" \
      "$PROJECT_ROOT/tech/pos_integration.md" \
      "$PROJECT_ROOT/configs/iso_distributors.yml" \
      "$PROJECT_ROOT/configs/pos_config.yml" \
      "$PROJECT_ROOT/tech/website/public/index.html" \
      "$PROJECT_ROOT/tech/website/src/app.js"

# Populate index.html with initial content
echo "<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <title>Persephone's Garden</title>
</head>
<body>
    <h1>Welcome to Persephone's Garden</h1>
    <p>Explore the mythic and modern sanctuary.</p>
</body>
</html>" > "$PROJECT_ROOT/tech/website/public/index.html"

# Populate app.js with initial content
echo "// JavaScript entry point for the website
console.log(\"Welcome to Persephone's Garden!\");" > "$PROJECT_ROOT/tech/website/src/app.js"

# Make this script executable
chmod +x "$PROJECT_ROOT/scripts/generate_structure.sh"

echo "Repository scaffold created successfully."
echo "Next: open README.md and start adding project details!"

# Log end of script
echo "Script completed at $(date)"