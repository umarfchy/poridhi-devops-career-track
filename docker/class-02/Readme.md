### Create containers

```bash

docker run --name svc1 nginx
docker run --name svc2 nginx

docker inspect svc1 # Get IP
docker inspect svc2 # Get IP

```

### Connect to containers

```bash

docker exec -it svc1 bash

apt update -y
apt install curl -y

curl SVC2_IP # NGINX listens to port 80 by default

```
