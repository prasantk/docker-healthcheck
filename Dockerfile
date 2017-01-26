FROM node:alpine
RUN apk --update add curl
WORKDIR /app
ADD . /app
RUN npm install
HEALTHCHECK --interval=5s --timeout=3s --retries=3 \
	CMD curl --fail -s localhost:3000/health || exit 1
EXPOSE 3000
CMD ["npm", "start"]