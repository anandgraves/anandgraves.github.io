javascript: (function() {
    if (window.TrelloDeleteCard !== undefined) {
        TrelloDeleteCard.init();
    } else {
        var script = document.createElement('script');
        script.src = 'https://cdn.rawgit.com/anandgraves/anandgraves.github.io/master/trello-delete-card/assets/js/trello-delete-card.js?' + Math.random().toString(36).substring(8);
        script.onload = function() {
            TrelloDeleteCard.init();
        };

        document.head.appendChild(script);
    }
})();
