FROM node:20-alpine

# pracovní adresář
WORKDIR /app

# nejdřív jen package* pro lepší cache
COPY package*.json ./

RUN npm install --production

# pak teprve zbytek kódu
COPY . .

# port, na kterém Express poslouchá
EXPOSE 3000

CMD ["node", "server.js"]
