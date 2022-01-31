const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log("we are in bfore install prompt")
    window.deferredPrompt = event;

    installBtn.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log("wer are at install click");
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        console.log("prompt event is false...");
        return;
    }

    promptEvent.prompt();

    window.deferredPrompt = null;

    installBtn.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});