# Portfólio profissional — Anderson Mesquita

Site de portfólio profissional em **HTML + CSS + JavaScript**, preparado para **GitHub Pages**. Inspirado no conceito visual aprovado (preto e dourado, retrato, elementos industriais). Não necessita de React, Node.js, banco de dados, npm ou serviços pagos.

## Arquivos

```text
index.html                          Página principal, seções e textos
styles.css                          Estilo e versão responsiva para celular
script.js                           Menu, animações leves e navegação
.nojekyll                           Permite publicação direta dos arquivos
assets/anderson-hero.webp            Retrato no estilo aprovado
assets/anderson-foto-original.webp   Foto original otimizada (reserva)
assets/favicon.svg                  Ícone AM
curriculo-anderson-mesquita.pdf      Currículo para download
```

## Publicar grátis no GitHub Pages (método simples)

1. Crie uma conta ou entre em https://github.com/.
2. Clique em **New repository** (ou `+` > `New repository`).
3. Escolha um nome simples, como **portfolio-anderson**. Marque **Public**, escolha **Create repository**.
4. Abra o novo repositório e clique em **Add file** > **Upload files**.
5. **Extraia o ZIP antes**: envie `index.html`, `styles.css`, `script.js`, `.nojekyll`, o PDF e a pasta `assets` (com seus arquivos). O arquivo `index.html` deve ficar na **raiz** do repositório, não dentro de outra pasta.
   - Se a interface do navegador não enviar a pasta corretamente, envie os arquivos pela opção **Add file > Upload files** mantendo o caminho `assets/`, ou use GitHub Desktop para publicar a pasta completa.
   - O GitHub pode não exibir `.nojekyll` em certos seletores; o site também funciona sem esse arquivo neste projeto.
6. Clique em **Commit changes**.
7. Abra **Settings** > **Pages** no repositório.
8. Em **Build and deployment** escolha **Source: Deploy from a branch**; Branch `main`; Folder `/(root)`; clique em **Save**.
9. Após a publicação, a URL normalmente será `https://SEU-USUARIO.github.io/portfolio-anderson/`. Substitua `SEU-USUARIO` por seu login real do GitHub e `portfolio-anderson` pelo nome escolhido.
10. Se a publicação não aparecer, visite a aba **Actions** e confira o andamento da tarefa de deploy. Aguarde alguns minutos e recarregue.

### Preferir uma URL mais curta?

Nomeie o repositório `SEU-USUARIO.github.io` (exatamente igual ao seu login real do GitHub). A URL padrão fica `https://SEU-USUARIO.github.io/`, sem o segmento `/portfolio-anderson/`.

## Usar domínio próprio

Você **não precisa comprar domínio** para publicar. GitHub Pages oferece endereço `github.io` gratuito.

Para usar um domínio que você **já possua**, como `www.seudominio.com.br`:

1. Em **Settings > Pages > Custom domain**, informe o domínio e salve.
2. No registrador do domínio (ex.: Registro.br), crie o registro DNS **CNAME** do `www` apontando para `SEU-USUARIO.github.io` (sem `https://` e sem caminho).
3. Aguarde a propagação do DNS (pode levar até 24 horas).
4. Ative **Enforce HTTPS** assim que a opção estiver disponível.

Para usar o domínio raiz (sem `www`), a configuração de DNS é diferente, com registros A/ALIAS/ANAME. Confira as instruções oficiais do GitHub: https://docs.github.com/pt/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

**A hospedagem do site é gratuita para repositórios públicos no GitHub Free, mas o registro/renovação de um domínio próprio geralmente é pago.**

## Personalizações rápidas

- **Nome, textos, experiências e formação**: edite `index.html`.
- **Cores**: edite os valores em `:root` no início de `styles.css` (`--gold`, `--bg`).
- **Retrato**: substitua `assets/anderson-hero.webp` por uma imagem com o mesmo nome.
- **Currículo**: substitua `curriculo-anderson-mesquita.pdf` sem alterar o nome do arquivo.
- **WhatsApp, e-mail e LinkedIn**: procure pelos respectivos links no final de `index.html`.
- **Adicionar certificações/projetos no futuro**: edite as seções de formação, habilidades e atuação.

### Atenção antes de publicar

Seu **e-mail**, seu **link do LinkedIn** e seu **número de WhatsApp (em um link de contato)** ficarão públicos. Se preferir, remova o botão de WhatsApp antes de colocar no ar. O **currículo em PDF também ficará acessível publicamente**, incluindo os contatos presentes nele.

O site apresenta áreas e experiências do currículo fornecido, **não inventa projetos concluídos ou indicadores de desempenho**. Antes da publicação, confirme nomes de cargos, períodos e cursos.

## Abrir localmente para testar

Abra `index.html` no navegador. Para testar com um servidor local (opcional), use `python -m http.server 8000` dentro da pasta e abra `http://localhost:8000`.

## Referências oficiais

- Publicação a partir de um branch: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Domínio próprio: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Alternativa: publicar pelo Git no computador

Se tiver o Git instalado, na pasta extraída execute, trocando a URL pelo seu repositório real:

```bash
git init
git branch -M main
git add .
git commit -m "Publicar portfolio profissional"
git remote add origin https://github.com/SEU-USUARIO/portfolio-anderson.git
git push -u origin main
```

A seguir configure **Settings > Pages > Deploy from a branch > main > /(root)** como explicado acima. Para futuras alterações, substitua os arquivos, execute `git add .`, `git commit -m "Atualizar site"` e `git push`.

> **Importante:** a foto e o arquivo PDF pertencem ao titular do currículo. Evite compartilhar este pacote publicamente em outro repositório sem autorização.
