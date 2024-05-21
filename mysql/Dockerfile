FROM --platform=linux/x86_64 mysql:5.7

COPY ./init.sql /docker-entrypoint-initdb.d/

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=mydb
ENV MYSQL_USER=myuser
ENV MYSQL_PASSWORD=mypassword

EXPOSE 3306
