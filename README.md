# NFT-Store (Assessment)
A decentralized platform for browsing, purchasing, and interacting with NFTs. 

---

## 🚀 Project Overview

**NFT Store** is a full‑stack demo allowing users to:

- Browse a **3D gallery** of NFTs (powered by Three.js)  
- Filter by **rarity** (common / rare / legendary)  
- Save **favorites** for later  
- See **real‑time purchase** updates via WebSockets  
- Connect a **Cardano testnet** wallet (Nami or Yoroi) and complete NFT purchases  

---

## ✨ Features

- **Responsive UI** (mobile ↔ desktop) with accessibility (WCAG 2.2)  
- **Three.js** 3D previews embedded in React/Vue components  
- **RESTful API** in Golang + PostgreSQL, with in‑memory/Redis caching  
- **Concurrency** handling for purchase flows (Goroutines & Channels)  
- **Plutus smart contract** for on‑chain sale logic  
- **CI/CD** via GitHub Actions; Dockerized services with Nginx reverse proxy  
- **Auto‑scaling**, health checks, and logs in production  

---

## 🛠️ Tech Stack

| Layer        | Technology                                                           |
| ------------ | -------------------------------------------------------------------- |
| **Frontend** | React · HTML · CSS · Tailwind · Three.js · React Router              |
| **Backend**  | Golang · Gin · pgx · Redis (optional) · WebSockets                   |
| **Database** | PostgreSQL                                                           |
| **Blockchain** | Cardano Testnet · Plutus · BlockFrost API · Nami/Yoroi Wallets     |
| **DevOps**   | Docker · Nginx · GitHub Actions · Fly.io (or Render) · Shell scripts |

---

## 📂 Repository Structure

```text
nft‑store/
├── frontend/        # React app (3D gallery, filters, wallet integration)
├── backend/         # Go API (nft, favorites, purchase endpoints, WS)
├── blockchain/      # Plutus contracts & Cardano CLI scripts
├── devops/          # Dockerfiles, Nginx, CI config, deploy scripts
└── README.md        # Project documentation

