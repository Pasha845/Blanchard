# Одностраничный сайт для проекта "Blanchard - худодественная галерея"

В проекте использовались следующие библеотеки:
- Swiper.js - создание слайдеров,
- Choices.js - создание селекта галереи,
- Tippy.js - создание тултипов,
- JustValidate - валидация полей формы,
- Inputmask - создание маски для телефона,
- API Яндекс Карт - подключение карты на сайт

Проект состоит из следующих блоков:

## 1. Header:
- логотип (некликабелен),
- меню - при клике на пункты меню осуществляется плавный переход к соответствующему блоку страницы,
- ссылка "Войти",
- нижнее меню с выпадающими фотографиями (если в списке больше 4 фото, то справа появляется скроллбар),
- поле поиска по сайту с кнопкой поиска (без функционала),
- на планшетной версии сайта верхнее меню и ссылка "Войти" находятся в бургер меню

## 2. Hero:
- слайдер с 3 слайдами, осуществляется плавное автоматическое перелистывание слайдов каждые 3 секунды, а также их увеличение и уменьшение,
- заголовок,
- описание,
- ссылка "Подписаться на рассылку" - плавный переход в конец сайта, к карте

## 3. О нас:
- заголовок,
- описание

## 4. Галерея:
- заголовок,
- заголовок и селект для фильтрации галереи (без функционала),
- слайдер с 6 слайдами и нумерацией - возможность листать фотографии,
- при нажатии на второй слайд открывается модальное окно - фото, крестик "Закрыть", имя художника название картины годы
- чекбоксы для фильтрации (без функционала)

## 5. Каталог:
- заголовок,
- описание,
- аккордеон с возможностью выбора художника,
- художники, о которых выводится информация слева - Биссоло Франческо, Доменико Гирландайо, Джованни да Удине, Пинтуриккьо,
- информация о художнике: фото, имя, годы и описание

## 6. События:
- заголовок,
- слайдер с 5 слайдами и кнопками переключения (на планшетной версии кнопки меняются на пагинацию),
- слайд включет фото, описание и ссылку "Подробнее"

## 7. Проекты:
- заголовок,
- описание с 3 тултипами и ссылкой,
- слайдер с 9 слайдами (при наведении картинки становятся цветными)

## 8. Контакты:
- адрес,
- поле "Имя", "Телефон" (с маской) и "Заказать обратный звонок",
- если поля заполнены не верно, то менятся цвет бордера на красный и выводится сообщение "Недопустимый формат",
- если поля заполнены верно, то менятся цвет бордера меняется на зеленый,
- после заполнения полей и нажатии на кнопку появляется pop-up с заголовком "Спасибо мы вам перезвоним",
- ссылки - "WhatsApp" и "Telegram" с возможностью перехода при клике,
- черно-белая карта с цветным маркером и 3 кнопками справа: "Приблизить", "Отдалить" и "Определить ваше местоположение"

## 9. Footer:
- лого (некликабелен),
- ссылки - "Вконтакте", "Instagram" и "Facebook" (без перехода)
