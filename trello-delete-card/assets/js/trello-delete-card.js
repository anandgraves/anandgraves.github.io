var TrelloDeleteCard = (function() {
    function deleteBtnHandler(event) {
        var submitInterval = setInterval(function() {
            // Check if submit button is available in DOM
            if (submitForm && submitForm.length === 1) {
                clearInterval(submitInterval);
                submitForm[0].click();
            }
        }, 100);
    };

    function archiveBtnHandler(event) {
        var buttonInterval = setInterval(function() {
            // check if the button element is visible in the DOM
            if (deleteBtn.offsetParent !== null) {
                clearInterval(buttonInterval);
                deleteBtn.addEventListener('click', deleteBtnHandler);
                deleteBtn.click();
            }
        }, 100);
    };

    function init() {
        archiveBtn = document.querySelector('.js-archive-card');
        deleteBtn = document.querySelector('.js-delete-card');
        submitForm = document.getElementsByClassName('js-confirm');

        if (archiveBtn) {
            archiveBtn.addEventListener('click', archiveBtnHandler);
            archiveBtn.click();
        }
    }

    var archiveBtn;
    var deleteBtn;
    var submitForm;

    return {
        init: init
    };
})();
