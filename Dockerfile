FROM staticfloat/nginx-certbot

COPY dist /usr/share/nginx/html
COPY nginx.vh.default.conf /etc/nginx/conf.d/default.conf


#RUN apt-get update
#RUN apt-get upgrade -y
#RUN apt-get install software-properties-common
#RUN add-apt-repository ppa:certbot/certbot
#RUN apt-get update
#RUN apt-get install python-certbot-nginx
#
#RUN mkdir /etc/lets-encrypt
#COPY lets-encrypt.sh /etc/lets-encrypt/lets-encrypt.sh
#RUN chmod +x /etc/lets-encrypt/lets-encrypt.sh
#
#ENTRYPOINT /etc/lets-encrypt/lets-encrypt.sh
