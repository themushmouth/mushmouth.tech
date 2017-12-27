#!/bin/bash
#
# Script to perform a Hugo deploy to a public HTML directory.
#

HUGO_DEST="/var/www/html"

echo -e "Building Hugo site to ${HUGO_DEST}..."
npm install && npm run build && hugo -d $HUGO_DEST

# Test if Hugo build is successful
RESULT_HUGO=$?
if [ $RESULT_HUGO -ne 0 ]; then
  # Exit if build failed
  echo -e "\nDeployment failed: Hugo build failed."
  exit 1
fi

echo -e "\nHugo build successful."
