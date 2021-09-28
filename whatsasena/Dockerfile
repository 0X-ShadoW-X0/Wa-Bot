FROM fusuf/whatsasena:latest

RUN git clone https://github.com/0X-ShadoW-X0/Wa-Bot /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/0X-ShadoW-X0/Media

CMD ["node", "bot.js"]
