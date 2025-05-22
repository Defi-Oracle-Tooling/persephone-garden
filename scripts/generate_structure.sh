#!/usr/bin/env bash
set -euo pipefail

# Set the project root dynamically
PROJECT_ROOT="$(pwd)"

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
      "$PROJECT_ROOT/configs/pos_config.yml"

# Make this script executable
chmod +x "$PROJECT_ROOT/scripts/generate_structure.sh"

echo "Repository scaffold created successfully."
echo "Next: open README.md and start adding project details!"