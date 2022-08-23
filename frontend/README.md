# Проект 5: Место (с использованием технологий React и подключенной аутентификацией)

**Ссылка на проект: [Место](https://foxylabstory.github.io/mesto-react/)**

## Описание проекта
Данный проект является продолжением предыдущего проекта Mesto, но написан уже с использованием технологий React.

Ориентирован на просмотр с любого устройства.

## Используемые технологии:

- **HTML5**
  - Семантические тэги
  - Валидная разметка
- **CSS**
  - Адаптивный сайт под все возможные экраны (контрольные точки и промежуточные состояния)
  - Построение сеток с помощью flex и/или grid
  - Позиционирование сложных элементов
  - Работа с модальными окнами
- **БЭМ**
  - Все классы названы в соответствии с БЭМ
  - Создана файловая структура по модели nested, все блоки разбиты по отдельным папкам, элементы и модификаторы находятся в папках блоков по собственным разделам
- **JS относится к предыдущему проекту** 
  - Поиск объектов в DOM
  - Работа со значениями элементов
  - Замена значений элементов
  - добавление/убирание классов для элементов
  - валидация строк ввода данных пользователем
  - интерактивное обозначение ошибок при вводе данных
  - закрытие модальных окон нажатием на клавишу "Esc" и кликом по оверлею
  - создание карточки вынесено в отдельный класс в отдельном файле
  - валидация элементов "input", так же вынесено в отдельный класс в отдельном файле
  - выполнена инкапсуляция классов
  - файлы содержащие JS подключены модулями с использованием возможностей импорта/экспорта
  - созданы отдельные функциональные классы
  - подключен Webpack, 2 раздельные сборки, dev и build
  - проект подключен к серверу через API, используются запросы: GET, PATCH, POST, DELETE, PUT
  - подключени к API реализовано через отдельный класс
  - добавлено модальное окно подтверждения удаления элемента и возможность изменить аватар пользователя, реализовано через запрос к API
  - проведена небольшая работа на кнопкой "сохранить"/"создать", улучшен UI/UX. При загрузке данных надпись меняется на "Сохранение", после обратно
- **React** 
  - Создание приложения с использованием команды ***npx create-react-app название_проекта***
  - Портирована разметка и стили, вся структура описана в компоненте App
  - Созданы/вынесены компоненты в папку /components
  - Работа модальных окон описана в декларативном стиле
  - Реализовано закрытие модальных окон
  - Портирован модуль Api, на страничку загружается первоначальная информация при помощи обращению к Api
  - Для отрисовки карточек при загрузке, так же реализовано обращение к Api
  - Созданы компоненты для регистрации и авторизации, а так же модальное окно подтверждения регистрации
  - Для для регистрации реализовано обращение к Api
  - Для авторизации, так же реализовано обращение к Api, кроме этого реализовано сохранение токена аторизованного пользователя в localStorage
  - Если ранее был выполнен вход, происходит проверка валидности сохраненного токена обращением а Api, посел чего происходит переадресация на страницу с информацией
  - Страница с информацией защещена, без авторизации на страницу невозможно попасть
  - Реализована деавторизация с последующим удалением токена из хранилища
  - Подтверждение регистрации выполнено при помощи появляющегося модального окна с разным содержанием в случае успеха или неуспеха



## Материалы:
**Figma**
- [Ссылка на макет в Figma](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1)
- [Вторая часть макета в Figma](https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1)
- [Третья часть макета в Figma](https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?node-id=0%3A1)
- [Четвертая часть макета в Figma](https://www.figma.com/file/PSdQFRHoxXJFs2FH8IXViF/JavaScript-9-sprint?node-id=0%3A1)

Проект подогнан к макету с использованием Pixel Perfect

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
