# cs3219-otot-task-a

A simple multi-container setup using Docker, with a NGINX web server, a Node Express server and a NGINX HTTP reverse proxy set up.

Created in fulfillment of **OTOT Assignment Task A** for the NUS module CS3219 AY20/21 Semester 1.

## Prerequisites
* Ensure [Docker](https://docs.docker.com/get-docker/) is installed on your system.
* (If you are configuring your own API server) Ensure that you have [yarn](https://yarnpkg.com/getting-started/install) installed.

## Getting Started
1. Clone this repository and navigate to it:
    ```
    git clone https://github.com/Q-gabe/cs3219-otot-task-a.git
    cd cs3219-otot-task-a.git
    ```

If you want to quickly launch the setup _without building the images yourself_, follow step 2. Otherwise, skip ahead to step 3 onwards:

2. Use `docker-compose` to orchestrate the local deployment of the various containers using the quickstart `docker-compose.yml`:
    ```
    cd quickstart
    docker-compose up
    ```
    Wait for the images to be pulled from Docker Hub and deployed. You may access the web and API servers after the images are successfully run.

Otherwise, for a more custom setup:

3. Add your desired Express API server setup and routing to the `/backend` folder.

4. Add your desired HTML files to the `/frontend` folder. _(Note: NGINX is configured to serve HTML files only, JS and CSS files will require additional configuration.)_

5. Use `docker-compose` to orchestrate the building and local deployment of the various containers using `docker-compose.yml`:
    ```
    docker-compose up --build
    ```
    _(Ensure that you are in the cs3219-otot-task-a root folder when doing this!)_

    This builds the images on your local before running the images in containers. You wish to push these custom images to your own registry for versioning purposes.

## Accessing the web and API servers
Simply access the following addresses on a browser to see the web and API servers at work:
* NGINX Webserver - `http://localhost/`
* NodeJS Express API server - `http://localhost/api`

## Links to Docker Images
* NGINX Webserver Image - [cs3219-otot-task-a_frontend:submission](https://hub.docker.com/repository/docker/qgabe/cs3219-otot-task-a_frontend)
* NodeJS Express API server Image - [cs3219-otot-task-a_backend:submission](https://hub.docker.com/repository/docker/qgabe/cs3219-otot-task-a_backend)
* Reverse Proxy NGINX server - [cs3219-otot-task-a_proxy:submission](https://hub.docker.com/repository/docker/qgabe/cs3219-otot-task-a_proxy)

## License
MIT
