PARALOGIA - ACTUALIZACIÓN CON PANEL /admin

Esta actualización convierte el sitio a Eleventy + Decap CMS.

1. Extrae este ZIP.
2. En GitHub > repositorio PARALOGIA > Add file > Upload files.
3. Sube package.json, netlify.toml, .eleventy.js y la carpeta src completa.
4. Haz Commit changes.
5. Netlify detectará el commit y construirá el sitio automáticamente.

NO BORRES de GitHub el archivo google2be6826640a6adf8.html.

CONFIGURAR LOGIN:
- GitHub > Settings > Developer settings > OAuth Apps > New OAuth App.
- Application name: PARALOGIA CMS
- Homepage URL: https://paralogia.netlify.app
- Authorization callback URL: https://api.netlify.com/auth/done
- Registra la app, copia Client ID y genera Client Secret.
- Netlify > Project configuration > Security > OAuth > Authentication providers.
- Instala GitHub e introduce Client ID y Client Secret.
- Abre https://paralogia.netlify.app/admin/

PUBLICAR:
- En /admin/: Publicaciones > Nueva publicación > Publicar.
- Decap crea el archivo en GitHub y Netlify actualiza el sitio.
