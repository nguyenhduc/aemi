ARG TAG=16-alpine

FROM node:$TAG

WORKDIR /app

# Install packages
RUN set -eux; \
  # Packages to install
  apk add --no-cache \
  git \
  python3 \
  make \
  g++ \
  && \
  # Clean out directories that don't need to be part of the image
  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \
  && \
  npm install -g pnpm

CMD ["pnpm run dev"]

ENTRYPOINT ["/bin/sh"]