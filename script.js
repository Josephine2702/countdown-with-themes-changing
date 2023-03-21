const background = document.querySelector('video'),
    themes = document.querySelectorAll('option'),
    selectTheme = document.querySelector('#select');

 function setTheme(){
    themes.forEach(theme => {
    
    if(theme.selected){
     background.setAttribute('src', `/assets/${theme.value}.mp4`);
     document.body.setAttribute('data-theme', `${theme.value}`);
    }
});
}

selectTheme.addEventListener('change', setTheme);


