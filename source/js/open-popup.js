for (let i = 1; i <= 31; i++) {
    const tabId = '#tab_' + i;
    const txtId = '#txt_' + i;

    const tab = document.querySelector(tabId);
    const textBlock = document.querySelector(txtId);

    tab.addEventListener('click', () => {
        textBlock.style.display = 'block';
    })
}