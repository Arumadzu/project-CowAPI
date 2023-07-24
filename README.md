# CowAPI Frontend

Прежде всего установите все зависимости:

    npm install

Для запуска:

    npm run dev // localhost:5173

### Правила работы с ветками и их названия

Ветки называем по схеме **префикс/название_задачи**. Названия соответствуют таске из Jira. _Например: feature/CF-111_

| Prefix   | Branch  |
| -------- | ------- |
| feature  | develop |
| fix      | develop |
| refactor | develop |
| hotfix   | develop |

### Название коммитов

Для сообщений коммитов используем [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). На данном этапе дополнительный scope можно не указывать, сообщение коммита должно выглядеть следующим образом:

    feat: краткое описание выполненной работы (CF-111)

Старайтесь в рамках одной задачи делать один коммит, когда нет весомой причины разбивать их.
