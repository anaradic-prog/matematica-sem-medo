# Matemática Sem Medo

MVP demonstrativo de uma academia digital de matemática, feito com Next.js, TypeScript e Tailwind CSS. Inclui dashboard, catálogo curricular de exemplo, página de curso, aula interativa com múltipla escolha, tutor demonstrativo, jogos, desafios, desempenho, perfil e controles básicos de acessibilidade.

## Executar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Rotas

- `/` painel inicial
- `/academia` catálogo de cursos
- `/cursos/fracoes` trilha de curso
- `/aulas/partes-iguais` aula interativa
- `/jogos` protótipos de jogos
- `/desafios` desafio de exemplo
- `/professor-virtual` interface demonstrativa de tutor
- `/desempenho`, `/conquistas`, `/perfil`, `/configuracoes`

## Escopo e integrações pendentes

Esta versão é um frontend demonstrativo e não exige credenciais para abrir. Os dados e indicadores marcados como demonstração não representam alunos reais e não são persistidos. Ainda precisam ser implementados antes de uso real: autenticação, banco Supabase/RLS, progresso persistente, painel administrativo protegido, integração de IA, revisão pedagógica do catálogo completo e controles de privacidade/LGPD para menores. Não inserir dados pessoais reais nesta demonstração.

Para publicar, importe este repositório/branch em uma hospedagem Next.js, como Vercel. Nenhum deploy público está incluído neste commit.
