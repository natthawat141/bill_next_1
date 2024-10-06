# ใช้ node image เป็น base image
FROM node:18-alpine AS builder

# กำหนด working directory ภายใน container
WORKDIR /app

# คัดลอกไฟล์ package.json และ lock files ไปยัง container
COPY package.json package-lock.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกโค้ดทั้งหมดไปยัง container
COPY . .

# Build แอปพลิเคชัน Next.js
RUN npm run build

# ----- ขั้นตอนที่ 2: สำหรับการรันแอปพลิเคชัน -----
FROM node:18-alpine AS runner

# กำหนด working directory
WORKDIR /app

# คัดลอกไฟล์ที่จำเป็นจากขั้นตอน build มาไว้ใน container นี้
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# กำหนดให้ Docker expose port 3000
EXPOSE 3000

# รันคำสั่งเพื่อเริ่มแอปพลิเคชัน
CMD ["npm", "run", "start"]
