FROM node:16-alpine

WORKDIR /app
# Copying package.json and yarn.lock and installing node modules
# This helps caching the modules
COPY ./package*.json .
COPY ./yarn.lock .
RUN yarn install --frozen-lockfile 

COPY . .

EXPOSE 3000
ENV PORT 3000

CMD ["node", "index.js"]
