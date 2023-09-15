#!/bin/bash

# Create person
echo "Creating new person..."
echo -e "\n"
curl -X 'POST' \
  'https://hng-stage-2-wewj.onrender.com/api' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "Ibrahim Suleiman"
}'
echo -e "\n\n"

# Get person details
echo "Getting person details..."
echo -e "\n"
curl -X 'GET' \
  'https://hng-stage-2-wewj.onrender.com/api/65001219b997e6daf8cdac88' \
  -H 'accept: */*'
echo -e "\n\n"

# Update person details
echo "Updating person details..."
echo -e "\n"
curl -X 'PUT' \
  'https://hng-stage-2-wewj.onrender.com/api/65001219b997e6daf8cdac88' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "Prince"
}'
echo -e "\n\n"

# Delete person details
echo "Deleting person details..."
echo -e "\n"
curl -X 'DELETE' \
  'https://hng-stage-2-wewj.onrender.com/api/65001219b997e6daf8cdac88' \
  -H 'accept: */*'

echo -e "\n\n"