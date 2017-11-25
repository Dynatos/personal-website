FROM nginx
COPY dist /usr/share/nginx/html
COPY nginx.vh.default.conf /etc/nginx/nginx.vh.default.conf
