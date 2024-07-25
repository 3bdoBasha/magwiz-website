
document.addEventListener("DOMContentLoaded", function() {
    var suggestionForm = document.getElementById("suggestion-form");

    suggestionForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var title = document.getElementById("suggestionTitle").value;
        var description = document.getElementById("suggestionDescription").value;
        var webhookUrl = 'https://discord.com/api/webhooks/1255990838228418580/sitH-oJKL5lizRnGYIJ4hzJ7JNbZdhnDpFLE12jmoTNiGG-H47eS4GguIwSQ-J9myO4K';

        var request = new XMLHttpRequest();
        request.open("POST", webhookUrl);

        request.setRequestHeader('Content-type', 'application/json');

        var params = {
            username: "سجل الاقتراحات",
            avatar_url: "",
            content: `**اسم صاحب الاقتراح:** ${title}\n**شرح الاقتراح:** ${description}`
        };

        request.send(JSON.stringify(params));

        alert("تم إرسال اقتراحك بنجاح ، إنتظر ليتم تفعيله!");
        suggestionForm.reset();
    });
});