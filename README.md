# Tu Amigo Sacha

Sitio desarrollado con Vite, React, TypeScript, Tailwind CSS y pnpm.

## Desarrollo

```bash
pnpm install
pnpm dev
```

## Verificación

```bash
pnpm lint
pnpm build
```

El build genera `dist/`, conserva el dominio custom con `CNAME`, crea `.nojekyll` y copia `index.html` como `404.html` para que las rutas de React funcionen al recargar en GitHub Pages.

## Publicación en GitHub Pages

Dominio configurado:

```txt
tuamigosacha.com
```

El despliegue recomendado es mediante GitHub Actions. En GitHub, configura:

- Settings > Pages > Source: `GitHub Actions`
- Custom domain: `tuamigosacha.com`
- Enforce HTTPS: activado cuando GitHub lo permita

DNS recomendado para el dominio apex:

```txt
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   <usuario-o-org>.github.io
```

También existe despliegue manual por rama `gh-pages`:

```bash
pnpm deploy
```
