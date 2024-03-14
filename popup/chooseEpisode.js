document.getElementById('calcButton').addEventListener('click', function() {
    document.getElementById('totalTime').innerText = 'test';

    let startEp = document.getElementById('start').value;
    let endEp = document.getElementById('end').value;
    browser.tabs.query({active: true, currentWindow: true}).then(tabs => {
        document.getElementById('totalTime').innerText = tabs[0].id;
        let val = browser.tabs.sendMessage(tabs[0].id, {
            start: startEp,
            end: endEp
        });
        val.then((message) => {
            document.getElementById('totalTime').innerText = message;
        }).catch((error) => {
            document.getElementById('test').innerText = error;
        });
    });
});

function reportExecuteScriptError (error) {
    pass;
}

browser.tabs.executeScript({ file: "../content_scripts/calcTime.js" })
    .catch(reportExecuteScriptError);
