# sit725-2022-t2-prac9  -Dockerization
Docker is a software platform that allows you to build, test, and deploy applications quickly. Docker packages software into standardized units called containers that have everything the software needs to run including libraries, system tools, code, and runtime.

For this prac I have cloned my Prac7 applications (socket sending messages)

## Pre-requisite
Install nodejs with all package including npm 

## Run The Appllication

Open the project in visual studio code

---
docker run -d -p 7000:8080 abysdocker/abyscaria-prac9:ver4 
---
## my docker repository 
https://hub.docker.com/repository/docker/abysdocker/abyscaria-prac9/general

### Steps to check the website active 
- paste the url on a browswer : http://localhost:7000 (maped port) - send messages using socket


## Copyrights
This is a public project that mean anyone can use this project for your working

Copyright (c) 2022 Aby Scaria
