document.addEventListener('DOMContentLoaded', function() {
    var themeSelect = document.getElementById('theme');
    themeSelect.onchange = (event) => {
        less.modifyVars({'@theme': `"${event.target.value}"`})
    }
 }, false);