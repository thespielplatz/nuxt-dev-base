# Development

## Dockerbuild

See [Dockerfile](examples/Dockerfile)

## Github Actions

See [Github Actions](github-actions/README.md)

## Server Deployment

### Setup

- As root
- add file: `docker-compose.yml` to your project e.g. `/root/your-project/`

```bash
cd /root/your-project
nano docker-compose.yml
```

```yaml
services:
  service-name:
    image: thespielplatz/sheet-mate:latest
    container_name: service-name
    restart: unless-stopped
    # Remove labels part if you don't use traefik    
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.sheet-mate.rule=Host(`sheet-mate.tsp.tools`)"
    #  - "traefik.http.routers.sheet-mate.rule=Host(`${DOMAIN}`)" # or if you use .env with DOMAIN=
      - "traefik.http.routers.sheet-mate.tls.certresolver=resolver"
      - "traefik.http.services.sheet-mate.loadbalancer.server.port=3000"

# Remove network part if you don't use traefik
networks:
  default:
    external: true
    name: traefik-network
```

- add file: `update.sh` to your project e.g. `/root/your-project/`

```bash
cd /root/your-project
nano update.sh
```

```bash
docker compose pull
docker compose down
docker compose up -d
```

- make it executeable

```bash
chmod +x update.sh
```

- Edit the sudoers file using visudo:

```bash
sudo visudo
```

- Add line for your deploy user

```bash
deployusername ALL=(ALL) NOPASSWD: /root/your-project/update.sh
```

### Testing

The deploy user can call the script with:

```bash
sudo /root/your-project/update.sh
```
