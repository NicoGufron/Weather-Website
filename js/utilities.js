if('serviceWorker' in navigator){
    window.addEventListener('load',()=>{
        navigator.serviceWorker.register('./sw.js')
            .then((reg)=>{
                console.log('Service worker registered. scope:',reg.scope);
            },function(err){
                console.log('Service worker registration failed: ',err);
            })
    });
}
let deferredPrompt;

window.addEventListener('beforeinstallprompt',(e)=>{
    e.preventDefault();
    deferredPrompt = e;

});

install.addEventListener('click',(e)=>{
    deferredPrompt.prompt();
    deferredPrompt.userChoice
        .then((choiceResult)=>{
            if(choiceResult.outcome=='accepted'){
                console.log('User accepted the prompt');
            } else{
                console.log('User denied the prompt');
            }
            deferredPrompt = null;
        });
});