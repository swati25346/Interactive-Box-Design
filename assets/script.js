function toggleBox(box) {
    document.querySelectorAll('.box').forEach(el => el.classList.remove('expanded'));
    box.classList.add('expanded');
}
