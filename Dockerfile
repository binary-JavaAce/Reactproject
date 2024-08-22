#Use Node 20 alpine as parent image
FROM node:20-alpine

#Change the work directory on the docker image to /app
WORKDIR /app

#Copy to app directory
COPY package.json ./

#Install dependencies
RUN npm install 

#Copy the rest of the project files
COPY . .

#Expose application port
EXPOSE 3000

#Start the application
CMD npm start

#commands
#docker build . -t myshoppingapi:1
#docker run -p 3000:3000 myshoppingapi:1
#docker tag myshoppingapi:1 preeti12/myshoppingapi:1
#docker login  username and password (if you receive access denied)
#docker push preeti12/myshoppingapi:1
# docker rmi preeti12/myshoppingapi:1 
#docker pull preeti12/myshoppingapi:1

