# VoxReward

**VoxReward** é um MiniApp para a World App, construído sobre a **World Chain**, que permite que empresas criem **enquetes com recompensas** para usuários **verificados com World ID**. Cada voto é único, verificado via ZKP, e os participantes recebem **tokens ERC20 ou NFTs** automaticamente após votar.

---

## 🌐 Deploy

- **Rede:** World Chain (testnet ou mainnet)
- **Contrato:** `0x...` *(substituir pelo endereço real)*
- **Frontend:** [https://voxreward.vercel.app](https://voxreward.vercel.app) *(opcional)*

---

## ⚙️ Tecnologias utilizadas

- **Solidity** – Contrato inteligente para criação de enquetes e distribuição de recompensas
- **World ID** – Verificação de humanidade (ZKP)
- **Next.js (App Router)** – Frontend React moderno
- **Wagmi + Viem** – Conexão com contratos
- **TailwindCSS** – Interface clean e responsiva

---

## ✨ Funcionalidades

### Para empresas:
- Criar enquetes com múltiplas opções
- Definir recompensa por voto (token ou NFT)
- Visualizar total de votos

### Para usuários:
- Verificar humanidade com World ID
- Votar em enquetes públicas
- Receber recompensa automaticamente após o voto
- Ver resultados parciais

---

## 🧱 Estrutura do projeto

```
voxreward/
├── contracts/          # Contrato Solidity VoxReward.sol
├── frontend/
│   ├── app/            # Rotas do Next.js
│   ├── components/     # Wallet, World ID, Header
│   ├── utils/          # Funções de interação com o contrato
│   ├── abis/           # ABI exportada
```

---

## 🚀 Como rodar localmente

### 1. Clonar o projeto

```bash
git clone https://github.com/seuuser/voxreward.git
cd voxreward
```

### 2. Deploy do contrato (Hardhat)

```bash
cd contracts
npm install
npx hardhat run scripts/deploy.js --network world
```

> Adicione a `RPC_URL` e `PRIVATE_KEY` no `.env`.

### 3. Rodar o frontend

```bash
cd frontend
npm install
cp .env.local.example .env.local
# edite com o APP_ID e CONTRACT_ADDRESS
npm run dev
```

---

## 🔐 Integração com World ID

Utiliza o componente `@worldcoin/idkit` para gerar provas de humanidade (ZK) que são enviadas ao contrato no momento do voto.

```tsx
<IDKitWidget
  app_id={process.env.NEXT_PUBLIC_WORLD_ID_APP_ID!}
  action="vote-voxreward"
  signal="default"
  onSuccess={handleProof}
/>
```

---

## ✅ Testado com

- WalletConnect (via Wagmi)
- World ID (com app_id válido)
- World Chain testnet (via RPC pública)

---

## 🧪 Futuras melhorias

- Suporte a votação anônima off-chain com hash commit
- Resultados em tempo real via eventos
- Dashboard para empresas

---

## ✉️ Contato

Desenvolvido por **Lázaro Vinícius**  
[github.com/lazweb3](https://github.com/lazweb3)  
[rolecripto.xyz](https://rolecripto.xyz)

---