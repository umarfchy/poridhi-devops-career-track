## Docker Chetsheet

1. Image Management
    - **docker pull**: Pull a image from a registry
        - Example : `docker pull nginx:latest`
        - Explanation: Pulls the latest NGINX image from Docker Hub.
    - **docker images**: : List all locally available images.
        - Example: `docker images`
        - Explanation: Lists all Docker images on the local machine.
    - **docker build**: Build a new image from a Dockerfile.
        - Example: `docker build -t my_image .`
        - Explanation: Builds a new image named "my_image" from the Dockerfile in the current directory
    - **docker tag**: Tag an image with a repository name and tag.
        - Example: `docker tag my_image my_repo:latest`
        - Explanation: Tags the image "my_image" as "my_repo" with the "latest" tag.
    - **docker push**: Push an image to a registry.
        - Example: `docker push my_repo:latest`
        - Explanation: Pushes the image "my_repo" with the "latest" tag to a registry

1. Container Management
    - **docker run**: Run a command in a new container.
        - Example: `docker run -it --name my_container nginx`
        - Explanation: Runs the NGINX image in a new container named "my_container" and attaches to its terminal.
    - **docker start**: Start one or more stopped containers.
        - Example: `docker start my_container`
        - Explanation: Starts the container "my_container" that was previously stopped.
    - **docker stop**: Stop one or more running containers.
        - Example: `docker stop my_container`
        - Explanation: Stops the running container "my_container".
    - **docker restart**: Restart a running container.
        - Example: `docker restart my_container`
        - Explanation: Restarts the running container "my_container".
    - **docker rm**: Remove one or more containers.
        - Example: `docker rm my_container`
        - Explanation: Removes the container "my_container".