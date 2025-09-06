# Wealthflow API

💡 **Wealthflow API** is a NestJS + TypeORM + PostgreSQL REST API with JWT authentication.  
This project demonstrates clean architecture, authentication, API documentation, Docker, and testing – designed as a solid portfolio project.

---

## ✨ Features
- User Management – Register & list users  
- Authentication – JWT-based login & protected routes  
- Profile Route – Accessible only with a valid token  
- API Documentation – Swagger UI available at `/api/docs`  
- Testing – Includes unit & e2e tests (SQLite in-memory)  
- Dockerized – Run API & database with a single command via Docker Compose  

---

## 🛠️ Tech Stack
- **NestJS** – Node.js Framework  
- **TypeORM** – ORM for PostgreSQL & SQLite  
- **PostgreSQL** – Main database  
- **JWT + Passport** – Authentication  
- **Swagger** – API documentation  
- **Jest & Supertest** – Testing  
- **Docker** – Containerization  

---

## 🚀 Getting Started

### 1️⃣ Clone Repository
```bash
git clone https://github.com/DandyWildan95/Dandy-Wildan-wealthflow-api.git
cd Dandy-Wildan-wealthflow-api
2️⃣ Run with Docker Compose
bash
Salin kode
docker-compose up --build
API → available at: http://localhost:3000
Swagger Docs → http://localhost:3000/api/docs

📸 Demo API
Coba API dengan curl setelah container jalan:

bash
Salin kode
# Register user baru
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"email":"demo@example.com","password":"password"}'

# Login untuk dapatkan JWT
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"demo@example.com","password":"password"}'

# Akses protected route (ganti <JWT_TOKEN> dengan hasil login)
curl -X GET http://localhost:3000/auth/profile \
  -H "Authorization: Bearer <JWT_TOKEN>"
Hasil contoh:

json
Salin kode
# GET /users
[
  {
    "id": 1,
    "email": "demo@example.com",
    "createdAt": "2025-09-04T14:00:00.000Z"
  }
]
🧩 Postman Collection
Untuk testing lebih mudah, repo ini sudah menyediakan file:
👉 wealthflow-api.postman_collection.json

Cara Import ke Postman
Buka Postman → Import.

Pilih file wealthflow-api.postman_collection.json.

Jalankan request sesuai contoh.

Collection sudah berisi:

POST /users → Register

POST /auth/login → Login

GET /users → List users

GET /auth/profile → Protected profile

Gunakan variable {{jwtToken}} di Postman untuk simpan hasil JWT setelah login.

🧪 Testing
Run unit & e2e tests:

bash
Salin kode
npm run test
npm run test:e2e
📂 Project Structure
ruby
Salin kode
src/
 ┣ auth/        # Auth module
 ┣ user/        # User module
 ┣ main.ts      # App entrypoint
 ┗ app.module.ts
👨‍💻 Author
Built with ❤️ by Dandy Wildan

yaml
Salin kode

---

👉 README ini sudah **final portfolio ready**:  
- Ada **getting started**  
- Ada **demo API** (curl + contoh JSON response)  
- Ada **Postman collection**  
