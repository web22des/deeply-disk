// src/utils/dom.ts
// 📌 Базовые утилиты для работы с DOM (переиспользуемые)

/**
 * Найти элемент по data-js атрибуту (Один элемент)
 * @param selector - значение data-js (kebab-case)
 * @param parent - контекст поиска (по умолчанию document)
 */
// ✅ Добавлен дженерик <T extends Element>
export function findElement<T extends Element>(
    selector: string,
    parent: Document | HTMLElement = document,
): T | null {
    return parent.querySelector(`[data-js="${selector}"]`) as T | null;
}

/**
 * Найти все элементы по data-js атрибуту (Группа)
 */
// ✅ Добавлен дженерик <T extends Element>
export function findElements<T extends Element>(
    selector: string,
    parent: Document | HTMLElement = document,
): NodeListOf<T> {
    return parent.querySelectorAll(`[data-js="${selector}"]`) as NodeListOf<T>;
}

/**
 * Безопасно навесить событие (не упадёт, если элемент не найден)
 */
// ✅ Добавлен дженерик <T extends Element>
export function on<T extends Element>(
    selector: string,
    event: string,
    handler: (this: T, e: Event) => void,
    options?: boolean | AddEventListenerOptions,
): void {
    const el = findElement<T>(selector); // ✅ Передаём <T> внутрь
    if (el) {
        el.addEventListener(event, handler, options);
    } else {
        console.warn(`⚠️ Element [data-js="${selector}"] not found`);
    }
}

/**
 * Отследить появление элемента в области видимости (для анимаций)
 * ✅ Обновлено: Работает с группами через findElements
 */
export function onIntersect(
    selector: string,
    callback: (el: Element) => void,
    threshold: number = 0.1,
): void {
    // ✅ Ищем все элементы (поддержка групп)
    const elements = findElements(selector);

    // ✅ Проверка безопасности
    if (elements.length === 0) {
        console.warn(`⚠️ No elements found for [data-js="${selector}"]`);
        return;
    }

    // ✅ Один Observer на всю группу (оптимизация)
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    callback(entry.target); // ✅ Передаём конкретный элемент
                    observer.unobserve(entry.target); // ✅ Отключаем после срабатывания
                }
            });
        },
        { threshold },
    );

    // ✅ Подключаем наблюдение ко всем элементам
    elements.forEach((el) => observer.observe(el));
}
