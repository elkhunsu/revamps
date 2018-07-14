window.addEventListener('load', async e => {
    if('serviceWorker' in navigator){
        try{
            navigator.serviceWorker.register('sw.js');
            console.log('SW Registered');
        } catch (e) {
            console.log('SW Regis Failed');
        }
    }
})