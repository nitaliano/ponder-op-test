# Ponder OP Test

This is just a test repo to index Optimisms NFTs and mess around with the GraphQL API

Contract: https://optimistic.etherscan.io/address/0x2335022c740d17c2837f9c884bfe4ffdbf0a95d5

## Setup

1. Create a new file in the root of the project called `.env.local`
2. Add a variable into file called `JSON_RPC_URL` it should point to a web3 rpc provider like Alchemy
3. Run `pnpm install`
4. Install `docker` we are running postgres with it using `docker-compose`

## Develop

1. Run `docker-compose up -d` this will start postgres
2. Once you're setup run `pnpm run dev` to start the dev server and start indexing the event logs
2. After everything has been index head to `http://localhost:42069` to query the data using GraphQL


## Example Queries

### Get all OP NFT Owners

This will return all NFTs owners by address

```
{
    tokens {
        owner {
            id
        }
    }
}
```
