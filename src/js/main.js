import { initializeAuth } from './auth.js';
import { initializeZipProcessor } from './zipProcessor.js';
import { initializeUI } from './ui.js';

document.addEventListener('DOMContentLoaded', function() {
    initializeAuth();
    initializeZipProcessor();
    initializeUI();
    initializeBackgroundMusic();
});
