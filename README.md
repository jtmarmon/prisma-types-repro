## Steps

1. Clone the repository and add credentials to prisma/.env
2. Migrate the database
3. Run `npx tsc main.ts` to reproduce. The expected behavior is that typescript would throw an error (since `user` could be null)
