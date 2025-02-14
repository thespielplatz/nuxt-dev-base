# Github Actions

There are two options for choosing a Docker registry when publishing a Docker image:

- **Using** [hub.docker.com](http://hub.docker.com) as registry
- **Using a self hosted** [registry](https://hub.docker.com/_/registry)

## Shared Github Secrets & Variables

### Variables

| Variable | Value | Note |
| --- | --- | --- |
| `DEPLOY_HOST` | v2202201165610176076.goodsrv.de |
| `DEPLOY_PORT` | 222 |
| `DEPLOY_UPDATE_SCRIPT` | sudo /root/PATH_TO_PROJECT/update.sh |
| `DEPLOY_USERNAME` | deploy |
| `IMAGE_TAG` | DockerUserName/IMAGE_TAG | for DockerHub |
| `IMAGE_TAG` | RegistryDomain/IMAGE_TAG | for self hosted registry |

### Secrets

| Secret | Value | Note |
| --- | --- | --- |
| `DEPLOY_SSH_KEY` | ****** | SSH key for the deploy user |

## Self Hosted Registry Pipeline

See [registry-image.yml](registry-image.yml)

### Additional Variables

| Variable | Value |
| --- | --- |
| `REGISTRY_DOMAIN` | registry.tsp.tools |
| `REGISTRY_USER` | fil |

### Secrets

| Secret | Value |
| --- | --- |
| `REGISTRY_PASSWORD` | ***** |

## Docker Hub Pipeline

See [dockerhub-image.yml](dockerhub-image.yml)

### Variables

| Variable | Value |
| --- | --- |
| `DOCKER_USERNAME` | thespielplatz |

### Secrets

| Secret | Value |
| --- | --- |
| DOCKER_ACCESS_TOKEN | ****** | Created in hub.docker.com |
