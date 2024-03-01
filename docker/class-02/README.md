### Create containers

```bash

docker run --name svc1 --hostname svc1 nginx
docker run --name svc2 --hostname svc2 nginx

docker inspect svc1 # Get IP
docker inspect svc2 # Get IP

```

### Connect to containers

```bash

docker exec -it svc1 bash

# inside container
apt update -y
apt install curl -y

curl SVC2_IP # NGINX listens to port 80 by default

```

### Add entry to /etc/hosts

```bash

echo "SVC2_IP svc2" >> /etc/hosts

curl svc2 # 

```