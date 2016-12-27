./bin/wait-for-it.sh db:27017 -t 0

cd ./server/ && npm start