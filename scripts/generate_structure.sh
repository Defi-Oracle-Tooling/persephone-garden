#!/usr/bin/env bash
set -euo pipefail

# Root files
touch .gitignore LICENSE README.md

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
  mkdir -p "$d"
done

# Placeholder files
touch \
  docs/compliance.md \
  docs/distributor_list.md \
  docs/product_catalog.md \
  legal/licensing_requirements.md \
  legal/supply_agreements.md \
  membership/onboarding.md \
  membership/portal_spec.md \
  membership/tiers.md \
  operations/floor_plan.md \
  operations/site_selection.md \
  marketing/launch_plan.md \
  marketing/social_media_strategy.md \
  marketing/branding/logo.svg \
  marketing/branding/style_guide.md \
  tech/inventory_system.md \
  tech/pos_integration.md \
  configs/iso_distributors.yml \
  configs/pos_config.yml

# Make this script executable
chmod +x scripts/generate_structure.sh

echo "Repository scaffold created successfully."
echo "Next: open README.md and start adding project details!"