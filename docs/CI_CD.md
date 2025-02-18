# Continous Integration and Continous Delivery

## Dockerbuild

See [Dockerfile](examples/Dockerfile)

## Github Actions

The Github actions run, if

- a release happend in github and the docker tag will be `DOCKER_IMAGE/vX.X.X`
- or a commit containes the string `RUN_PIPELINE` and the docker tag will be `DOCKER_IMAGE/vX.X.X-{short-commit-hash}`

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
cd /root/your-project
docker compose pull
docker compose down
docker compose up -d
```

- make it executeable

```bash
chmod +x update.sh
```

- Create a new file: `/etc/sudoers.d/update-scripts`

```bash
nano /etc/sudoers.d/update-scripts
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

## Bump Version & Release

### Setup

```json
{
  // ...
  "scripts": {
    // ...
    "lint": "eslint . --max-warnings=0",
    "bump-version": "npm run lint && npx changelogen@latest --release && git push --follow-tags"
  },
  // ...
  "devDependencies": {
    // ...
    "@nuxt/eslint-config": "^1.0.1",
    "changelogen": "^0.5.7",
    "eslint": "^9.20.0"
  }
}
```

See [eslint.config.mjs](examples/eslint.config.mjs) for nuxt.

### Run

```bash
npm run bump-version
```

- You browser will open in background, but wait until the git push has finished, otherwise you will have two tags 🙈
- Click the release button on the github page
- The action will run

## Trigger a build via commit

Add `RUN_PIPELINE` into the commit message and the action will run and will create a docker tag `IMAGE_TAG:vX.X.X-{short-commit-hash}`.
