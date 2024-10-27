#make sure you have permissions using chmod +x rollback.sh
#!/bin/bash

# Stop the current container
docker stop healthcare-backend || true
docker stop healthcare-frontend || true

# Pull and run the previous stable versions
docker run -d --name healthcare-backend -p 3000:3000 SaviorFs/healthcare-backend:stable
docker run -d --name healthcare-frontend -p 80:80 SaviorFs/healthcare-frontend:stable

echo "Rollback to the previous stable version completed."
