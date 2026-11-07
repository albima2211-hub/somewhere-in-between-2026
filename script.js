
/* SCROLL REVEAL */
const cards = document.querySelectorAll(
    '.archive-card, .ending, .future-note, .timeline-section'
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

cards.forEach((card) => {
    card.classList.add('reveal');
    observer.observe(card);
});


/* 01 - THE BEGINNING */
function toggleBeginning() {
    const content = document.getElementById('beginningContent');
    const button = document.querySelector('.beginning-card .read-button');

    if (!content || !button) return;

    content.classList.toggle('active');

    button.textContent = content.classList.contains('active')
        ? 'CLOSE ENTRY ↑'
        : 'OPEN ENTRY ↗';
}


/* 02 - LITTLE DETAILS */
function toggleDetails() {
    const content = document.getElementById('detailsContent');
    const button = document.querySelector('.details-button');

    if (!content || !button) return;

    content.classList.toggle('active');

    button.textContent = content.classList.contains('active')
        ? 'CLOSE NOTES ↑'
        : 'OPEN NOTES ↗';
}


/* 03 - BETWEEN SCREENS */
function toggleScreens() {
    const content = document.getElementById('screensContent');
    const button = document.querySelector('.screens-button');

    if (!content || !button) return;

    content.classList.toggle('active');

    button.textContent = content.classList.contains('active')
        ? 'CLOSE ARCHIVE ↑'
        : 'OPEN ARCHIVE ↗';
}
