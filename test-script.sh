#!/bin/bash

# Create person and extract the ID
echo "Creating new person..."
response=$(curl -s -X 'POST' \
  'https://hng-stage-2-wewj.onrender.com/api' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "Ibrahim Suleiman"
}')

# Extract the _id value from the response using bash string manipulation
user_id=$(echo "$response" | grep -o '"_id":"[^"]*' | cut -d'"' -f4)

if [ -z "$user_id" ]; then
  echo "Failed to extract user ID from the response."
  exit 1
fi

echo "New person created with ID: $user_id"
echo -e "\n"

# Get person details using the extracted user_id
echo "Getting person details..."
echo -e "\n"
curl -X 'GET' \
  "https://hng-stage-2-wewj.onrender.com/api/$user_id" \
  -H 'accept: */*'

echo -e "\n\n"

# Update person details using the extracted user_id
echo "Updating person details..."
echo -e "\n"
curl -X 'PUT' \
  "https://hng-stage-2-wewj.onrender.com/api/$user_id" \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "Prince"
}'
echo -e "\n\n"

# Delete person details using the extracted user_id
echo "Deleting person details..."
echo -e "\n"
curl -X 'DELETE' \
  "https://hng-stage-2-wewj.onrender.com/api/$user_id" \
  -H 'accept: */*'

echo -e "\n\n"
