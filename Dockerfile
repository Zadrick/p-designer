FROM mcr.microsoft.com/dotnet/sdk:6.0

RUN apt-get update
RUN apt-get install -y nginx

WORKDIR /app

COPY ./build .
COPY ./run.sh ./run.sh

WORKDIR /etc

COPY ./nginx.conf /etc/nginx

EXPOSE 80
EXPOSE 5000

WORKDIR /app
CMD bash run.sh
