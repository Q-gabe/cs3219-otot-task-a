FROM node:alpine
ENV PORT 8000
ENV ENV development
EXPOSE 8000
COPY . /home/node/app
WORKDIR /home/node/app
RUN yarn
CMD ["yarn", "start"]