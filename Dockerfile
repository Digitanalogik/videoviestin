FROM node:14.17.5-alpine as builder

WORKDIR "/app"

COPY package.json .

COPY yarn.lock .

RUN yarn

COPY . .

RUN yarn build


FROM nginx:1.20.2-alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
