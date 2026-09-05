FROM node:22-bookworm
RUN apt-get update && apt-get install -y --no-install-recommends python3 python3-pip && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY requirements.txt ./
RUN pip3 install --break-system-packages --no-cache-dir -r requirements.txt
COPY server.js ./server.js
COPY bot_template.py ./bot_template.py
COPY index.html ./index.html
COPY public ./public
COPY tests.js ./tests.js
COPY render.yaml ./render.yaml
COPY README.md ./README.md
COPY .env.example ./.env.example
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node","server.js"]
