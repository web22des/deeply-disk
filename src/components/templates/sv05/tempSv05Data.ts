// src/data/sections/test100Data.ts
// Для использования перенести файл в src/data/... Подключить импорт в секции-обертке
import type { Props as Sv05Props } from "@components/templates/sv05/Sv05.astro";
import type { Props as CardProps } from "@components/ui/card/Cv04.astro";

// ✅ Импорт изображения как ImageMetadata (не строка!)
import cardImg from "@assets/test-552-01.jpg";

// ✅ Интерфейс для типизации экспорта (опционально, но полезно)
export interface Props {
    descr: string;
    card: CardProps;
}

// ✅ Данные для карточки (обязательные + опциональные поля)
export const cardData: CardProps = {
    src: cardImg,
    alt: "Описание изображения data",
    title: "Заголовок карточки data",
    subtitle: "Короткое описание data",
    phone: "+7(999)888-00-00",
    mail: "info_data@test.ru",
};

// ✅ Сборка пропсов для шаблона Sv05
export const test100Data: Sv05Props = {
    descr: "Закажите уборку сегодня data",
    card: cardData,
};

// Как использовать ======================================
// ---
// import Sv05 from "@components/templates/sv05/Sv05.astro";
// import { test100Data } from "@components/templates/sv05/tempSv05Data";
// ---

// <Sv05 {...test100Data} />
