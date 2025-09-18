# Étape 1 : build Angular avec Node 22
# --- Build stage ---
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN --mount=type=cache,target=/root/.npm npm ci

COPY . .

RUN npm run build

# Étape 2 : servir l'application avec un serveur Nginx
FROM nginx:1.29-alpine

RUN rm -rf /usr/share/nginx/html/*

# Copier le build Angular (qui se met dans dist/client) depuis l'étape précédente
COPY --from=build /app/dist/client/browser /usr/share/nginx/html

# Copier la config Nginx personnalisée pour SPA
COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port 80 par défaut pour Nginx
EXPOSE 80

ENTRYPOINT ["nginx", "-c", "/etc/nginx/nginx.conf"]

CMD ["-g", "daemon off;"]