#! /bin/bash

cat <<EOF > /etc/nginx/conf.d/default.conf
server {
	listen 8080;
	rewrite ^/(.*)\$ https://www.kickstarter.com/projects/natwelch/make-100-locative-garden/posts;
}
EOF

exec nginx -g "daemon off;"
