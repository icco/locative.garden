FROM nginx:1.27-alpine

COPY server.sh /usr/local/bin/

RUN apk add --no-cache bash \
	&& chmod +x /usr/local/bin/server.sh

EXPOSE 8080

CMD ["server.sh"]
