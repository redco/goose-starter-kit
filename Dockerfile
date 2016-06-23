FROM redcode/goose-parser:0.2-alpha

WORKDIR /app

ADD ./app /app

CMD ["node", "index.js"]
