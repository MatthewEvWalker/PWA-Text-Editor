const butInstall = document.getElementById('buttonInstall');
const installBtn = document.getElementById('installBtn');
const textHeader = document.getElementById('textHeader');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.defferedPrompt = event; 
    divInstall.classList.toggle('hidden', false);
    
    // installBtn.style.visibility = 'visible';
    // textHeader.textContent = 'Install App';

    // installBtn.setAttribute('disabled', true)
    // installBtn.textContent = 'App Installed!'    
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const start = window.defferedPrompt;
    if (!start) {
        return;
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.defferedPrompt = null;
});
