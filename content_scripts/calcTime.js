(function() {
    if (window.hasRun) {
      return;
    }
    window.hasRun = true;

    browser.runtime.onMessage.addListener((message) => {
      let totalTime = calcTime(message.start, message.end);
      return Promise.resolve(totalTime);
    });
    
    function calcTime(start, end) {
        
        let totalSeconds = 0;
        let durationSet = document.querySelectorAll('.list-box .duration');
    
        durationSet.forEach((duration, index) => {
            if(index + 1 < start || index + 1 > end) return;
            let timeParts = duration.innerText.split(':').reverse();
            for (let i = 0; i < timeParts.length; i++) {
                totalSeconds += parseInt(timeParts[i]) * Math.pow(60, i);
            }
        })
    
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;
    
        // console.log(`Total time:${hours}hours${minutes}minutes${seconds}seconds`);
        return `${hours}hours:${minutes}minutes:${seconds}seconds`;
    }
    
  
  })();
  