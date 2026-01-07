#!/bin/bash

ROOT_DIR="src/pages"
mkdir -p "$ROOT_DIR"

# Convert kebab-case to PascalCase
to_pascal_case () {
  echo "$1" | sed -E 's/(^|-)([a-z])/\U\2/g'
}

create_files () {
  local folder=$1
  shift
  local routes=("$@")

  folder_lower=$(echo "$folder" | tr '[:upper:]' '[:lower:]')
  folder_path="$ROOT_DIR/$folder_lower"

  mkdir -p "$folder_path"

  for route in "${routes[@]}"; do
    slug=$(basename "$route")
    component_name=$(to_pascal_case "$slug")
    file_path="$folder_path/$component_name.jsx"

    if [ ! -f "$file_path" ]; then
      cat <<EOF > "$file_path"
import React from 'react';

const $component_name = () => {
  return (
    <div>
      <h1>$component_name</h1>
    </div>
  );
};

export default $component_name;
EOF
      echo "✔ Created: $file_path"
    else
      echo "⚠ Skipped: $file_path already exists"
    fi
  done
}

# ---------------- ROUTES ----------------

create_files "CORPORATE_OVERVIEW" \
  "/corporate-overview/gulf-oil-india-at-a-glance" \
  "/corporate-overview/hinduja-group" \
  "/corporate-overview/gulf-oil-international" \
  "/corporate-overview/board-of-directors" \
  "/corporate-overview/from-the-chairmans-desk" \
  "/corporate-overview/strategic-insights-from-the-md-and-ceo" \
  "/corporate-overview/senior-management-team" \
  "/corporate-overview/our-robust-business-model" \
  "/corporate-overview/gulf-oil-lubricants-india-limited" \
  "/corporate-overview/cfos-review-of-financial-performance" \
  "/corporate-overview/leadership-team" \
  "/corporate-overview/manufacturing-and-rd-prowess" \
  "/corporate-overview/marketing-initiatives" \
  "/corporate-overview/strategic-partnerships" \
  "/corporate-overview/intellectual-strength-digital" \
  "/corporate-overview/integrated-e-mobility-solutions" \
  "/corporate-overview/our-people" \
  "/corporate-overview/sustainability" \
  "/corporate-overview/communities" \
  "/corporate-overview/awards"

create_files "STATUTORY_REPORTS" \
  "/statutory-reports/management-discussion-and-analysis" \
  "/statutory-reports/boards-reports" \
  "/statutory-reports/business-responsibility-and-sustainability-reports" \
  "/statutory-reports/corporate-governance-reports"

create_files "FINANCIALS" \
  "/financial-statements/standalone" \
  "/financial-statements/consolidated"

create_files "NOTICE" \
  "/notice/notice-of-the-16th-annual-general-meeting"

echo "🎉 All folders and PascalCase components created!"
