document.addEventListener('DOMContentLoaded', () => {
    const tooltips = document.querySelectorAll('.tooltip .tn-atom img');
    const tooltipContents = document.querySelectorAll('.tooltip-content');
    const tooltipTexts = document.querySelectorAll('.tooltip-content-text');

    const tabs = [
        { tab: document.querySelector('.tab1'), contents: document.querySelectorAll('.tab1-content') },
        { tab: document.querySelector('.tab2'), contents: document.querySelectorAll('.tab2-content') },
        { tab: document.querySelector('.tab3'), contents: document.querySelectorAll('.tab3-content') },
    ];

    // Наведение на вкладки
    tabs.forEach(({ tab, contents }) => {
        tab.addEventListener('mouseover', () => {
            contents.forEach(el => el.classList.add('hover'));
        });
        tab.addEventListener('mouseout', () => {
            contents.forEach(el => el.classList.remove('hover'));
        });
    });

    // Сброс всех tooltip'ов
    function clearAllTooltips() {
        [...tooltips, ...tooltipContents, ...tooltipTexts].forEach(el => {
            el.classList.remove('active');
        });
    }

    // Переключение активного tooltip'а
    function toggleTooltip(index) {
        [tooltips, tooltipContents, tooltipTexts].forEach(group => {
            group.forEach((el, i) => {
                el.classList.toggle('active', i === index ? !el.classList.contains('active') : false);
            });
        });
    }

    // Клик по tooltip
    tooltips.forEach((el, i) => {
        el.addEventListener('click', () => toggleTooltip(i));
    });

    // Закрытие по клику вне
    document.addEventListener('click', e => {
        if (!e.target.closest('.tooltip')) {
            clearAllTooltips();
        }
    });

    // Закрытие по Escape
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            clearAllTooltips();
        }
    });
});
