# Claire — site-portfólio

Site em Next.js App Router, preparado para publicação na Vercel.

## Publicar pela Vercel

1. Envie esta pasta para um repositório no GitHub.
2. Na Vercel, escolha **Add New > Project** e importe o repositório.
3. Mantenha o framework detectado como **Next.js**.
4. Publique. O arquivo `vercel.json` já seleciona o build correto.

## Rodar localmente

Requer Node.js 22 ou mais recente.

```bash
npm install
npm run build:vercel
npm run start:vercel
```

Para ajustar o endereço usado nas prévias sociais, configure a variável
`NEXT_PUBLIC_SITE_URL` com o domínio final do site.
