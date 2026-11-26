# Site The Beatles

Site sobre a banda The Beatles, feito com HTML, CSS e JavaScript.

## Páginas

- **Home** (`index.html`): apresentação da banda e dos integrantes
- **Sobre** (`sobre.html`): história e linha do tempo da banda
- **Integrantes**: uma página para cada um
  - `john.html`: John Lennon
  - `paul.html`: Paul McCartney
  - `george.html`: George Harrison
  - `ringo.html`: Ringo Starr
- **Contato** (`contato.html`): formulário com validação dos campos em JavaScript

## Estrutura

```
index.html
sobre.html
john.html
paul.html
george.html
ringo.html
contato.html
(CSS e JavaScript ficam dentro de cada página)
```

## Validação do formulário

A validação é feita só em JavaScript (arquivo `js/validacao.js`), sem usar a validação do HTML5. O formulário tem `novalidate`, e os campos não usam `required` nem `type="email"`.

Desenvolvido por Lara Fazani Ribeiro
