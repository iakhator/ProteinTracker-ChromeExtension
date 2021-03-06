
var pr = document.getElementById('prompt');
var p = prompt('Enter your name here please: ');
pr.value = p;




$(function () {
    chrome.storage.sync.get('goal', function (items) {
        $('#goal').val(items.goal);
    });

    $('#save').click(function () {
        var goal = $('#goal').val();
        if (goal) {
            chrome.storage.sync.set({ 'goal': goal }, function () {
                close();
            });
        }
    });

    $('#reset').click(function () {
        chrome.storage.sync.set({ 'total' : 0, 'goal' : 0 }, function () {
            var opt = {
                type: "basic",
                title: "Total reset!",
                message: "Total & Goal has been reset back to 0!",
                iconUrl: "img/icon2.png"
            }

            chrome.notifications.create('reset', opt, function () { });
        });
    });
});
