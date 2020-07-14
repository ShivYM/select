window.addEventListener('message', function(eventData) {
    try {
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
             if (event.event_code === "custom-event" && event.data && event.data.code === "page_open") {
                var newWindow = window.open(event.data.data);
                return;
            }
            else{
                return;
            }
         }
        return;
    } catch (error) {
        console.log(error, "error")
        return;
    }
}, false);
