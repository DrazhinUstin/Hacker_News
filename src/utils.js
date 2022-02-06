const formatDate = (str) => {
    const formatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });
    return formatter.format(new Date(str));
};

const formatHTML = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent;
};

export { formatDate, formatHTML };
