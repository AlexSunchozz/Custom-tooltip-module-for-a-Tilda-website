document.addEventListener('DOMContentLoaded', () => {
        const tooltips = document.querySelectorAll('.tooltip .tn-atom img'),
              tooltips_content = document.querySelectorAll('.tooltip-content'),
              tooltips_content_text = document.querySelectorAll('.tooltip-content-text'),
              tab1 = document.querySelector('.tab1'),
              tab2 = document.querySelector('.tab2'),
              tab3 = document.querySelector('.tab3'),
              tab1_content = document.querySelectorAll('.tab1-content'),
              tab2_content = document.querySelectorAll('.tab2-content'),
              tab3_content = document.querySelectorAll('.tab3-content');
              
        
        function hoverTabs(tab, content) {
            tab.addEventListener('mouseover', () => {
                content.forEach(item => {
                    item.classList.add('hover');
                })
            });
            tab.addEventListener('mouseout', () => {
                content.forEach(item => {
                    item.classList.remove('hover');
                })
            });
        }
        hoverTabs(tab1, tab1_content);
        hoverTabs(tab2, tab2_content);
        hoverTabs(tab3, tab3_content);
        
        function clearNonActiveTooltip(num, elem) {
            [tooltips, tooltips_content, tooltips_content_text].forEach(e => {e.forEach((item, i) => {
                    if (i !== num) {
                        item.classList.remove('active');
                    } else {
                        item.classList.toggle('active');
                    }
                });
            });
        }
        
        function clearAll() {
            tooltips.forEach(item => item.classList.remove('active'));
            tooltips_content.forEach(item => item.classList.remove('active'));
            tooltips_content.forEach(item => item.classList.remove('active'));
        }
        
        document.addEventListener('click', e => {
            if (!e.target.parentNode.parentNode.classList.contains('tooltip')) {
                clearAll();
            }
        })
        document.addEventListener('keydown', e => {
            if (event.key === "Escape") {
                clearAll();
            }
        })
        
        tooltips.forEach((tooltip, i) => {
            tooltip.addEventListener('click', () => clearNonActiveTooltip(i));
        });
    });
