# Prime Video (clone mobile)

Aplicativo móvel construído com **React Native** e **Expo** que replica a tela inicial do Prime Video. Ele apresenta uma lista de destaques, seções horizontais de filmes e uma barra de navegação inferior estática.

## Sumário
- [Visão geral](#visão-geral)
- [Stack](#stack)
- [Arquitetura](#arquitetura)
- [Pré-requisitos](#pré-requisitos)
- [Configuração do ambiente](#configuração-do-ambiente)
- [Como executar](#como-executar)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [Scripts disponíveis](#scripts-disponíveis)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Referências visuais](#referências-visuais)
- [Deploy/build](#deploybuild)

## Visão geral
A aplicação renderiza uma única tela (`Home`) com:
- Cabeçalho com logotipos Prime Video e Amazon.
- Navegação superior com categorias estáticas.
- Destaque principal com thumbnail.
- Três listas horizontais de cards com capas de filmes, alimentadas por arrays estáticos de dados.
- Rodapé com ícones de navegação (não navegam para outras telas).

O objetivo é demonstrar layout e estilização; não há reprodução de mídia ou integração com serviços externos.

## Stack
- **React Native 0.79.6**
- **React 19**
- **Expo 53** (CLI via `expo start`)
- **expo-status-bar** para status bar
- **react-native-vector-icons** (ícones Ionicons)

## Arquitetura
Organização simples por domínio:
- `App.js` registra o componente `Home` e a status bar.
- `src/screens/Home` contém a tela principal e seus estilos.
- `src/components/MoviesCards` define o card de filme reutilizado nas listas.
- `src/utils` guarda coleções estáticas de filmes (imagens e nomes).
- `src/assets` armazena logotipos e thumbs usados na UI.

Não há camada de navegação ou estado global; os dados são importados diretamente dos arquivos utilitários.

## Pré-requisitos
- **Node.js** LTS instalado.
- **npm** (ou **yarn**) para gerenciamento de pacotes.
- **Expo Go** instalado em um dispositivo físico, ou emulador Android/iOS configurado.

## Configuração do ambiente
1. Instale as dependências:
   ```bash
   npm install
   ```
2. (Opcional) Se for usar dispositivo físico, conecte-o à mesma rede do computador.

> Dica: `node_modules` já está listado, então não é necessário configurá-lo manualmente.

## Como executar
1. Inicie o servidor de desenvolvimento Expo:
   ```bash
   npm start
   ```
2. No menu do Expo, escolha onde abrir:
   - **a**: emulador Android
   - **i**: simulador iOS (macOS)
   - **w**: navegador (renderização web experimental)
   - Scan do QR Code com o app **Expo Go** em um dispositivo físico.

A primeira compilação pode levar alguns minutos por causa do bundler do Expo.

## Variáveis de ambiente
Este projeto **não utiliza variáveis de ambiente**. Todos os dados são estáticos nos arquivos em `src/utils`.

## Scripts disponíveis
- `npm start`: inicia o Metro bundler via `expo start`.
- `npm run android`: abre o projeto em um dispositivo/emulador Android (requer ambiente Android configurado).
- `npm run ios`: abre em simulador iOS (necessita macOS com Xcode).
- `npm run web`: inicia a versão web no navegador.

## Estrutura de pastas
```
.
├── App.js
├── app.json
├── assets/                 # Ícones base gerados pelo Expo
├── src/
│   ├── assets/             # Logos e artes de filmes
│   ├── components/
│   │   └── MoviesCards/    # Card de filme reutilizável
│   ├── screens/
│   │   └── Home/           # Tela principal
│   └── utils/              # Listas estáticas de filmes
└── package.json
```

## Referências visuais
As imagens usadas (logos e thumbs) estão em `src/assets`. Não há stories ou screenshots armazenados no repositório.

## Deploy/build
- **Ambiente de produção** não está configurado. O projeto é entregue via bundler do Expo.
- Para criar binários, use os comandos oficiais do Expo Application Services (EAS), por exemplo `eas build --platform android/ios`, após configurar o CLI e contas, se desejar ampliar o projeto.
