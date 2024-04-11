# Specify the base image from the Docker Hub. In this case, we're using the latest LTS (Long Term Support) version of Node.
FROM node:alpine


# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install the dependencies in the container
RUN npm install

# Bundle the app source inside the Docker image
COPY . .

# Your app binds to port 3000, so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 8000

# Define the command to run your app using CMD which defines your runtime
CMD [ "node", "index.js" ]
