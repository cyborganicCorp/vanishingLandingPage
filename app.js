console.log('hello');
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.querySelector('.loader');
        const video = document.querySelector('.video');
        const enterButton = document.querySelector('.enter-button');
        let source = document.createElement('source');
        let portraitMode = false;
        let landScapeMode = false;
        const height = window.innerHeight;
        const width = window.innerWidth;
        if(height > width){
            portraitMode = true;
            source.src = './source/helmetLoopVertical.mp4';
        }
        if(width >= height){
            landScapeMode = true;
            source.src = './source/helmetLoop.mp4';
        }
        video.appendChild(source);
        video.play();
        //console.log(source.src);
        loader.classList.add('hidden');
        video.classList.remove('hidden');
        loader.remove();
        enterButton.classList.remove('hidden');
        window.addEventListener('click', enterSite);
    }, 2000)
})

function enterSite(){
    console.log('the enter button has been clicked');
    const video = document.querySelector('.video');
    const source = document.querySelector('source');
    const innerContainer = document.querySelector('.inner-container')
    const enterButton = document.querySelector('button');

    video.removeChild(source);
    innerContainer.removeChild(enterButton);
    window.removeEventListener('click', enterSite);
    innerContainer.removeChild(video);

    let card = document.createElement('img')
    innerContainer.appendChild(card);
    card.classList.add('card');
    card.src = './source/vanishingCoverArt01.png';

    let linksContainer = document.createElement('div');
    linksContainer.classList.add('links-container');
    innerContainer.appendChild(linksContainer);


    //add the youtube button
    let ytButton = document.createElement('a');
    ytButton.classList.add('link');
    linksContainer.appendChild(ytButton);
    let ytBtnImg = document.createElement('img');
    ytBtnImg.classList.add('linkImg');
    ytBtnImg.src = './source/youtube.png';
    ytButton.appendChild(ytBtnImg);
    ytButton.setAttribute("href", "https://www.youtube.com/watch?v=J_afNGX3-Sc")
    //add the bandcamp button
    let bcBtn = document.createElement('a');
    bcBtn.classList.add('link');
    linksContainer.appendChild(bcBtn);
    let bcBtnImg = document.createElement('img');
    bcBtnImg.classList.add('linkImg');
    bcBtnImg.src = './source/bandcamp.png';
    bcBtn.appendChild(bcBtnImg);
    bcBtn.setAttribute("href", "https://cyborganic.bandcamp.com/track/vanishing")
    //add the audius button
    let audiusButton = document.createElement('a');
    audiusButton.classList.add('link');
    linksContainer.appendChild(audiusButton);
    let audiusBtnImg = document.createElement('img');
    audiusBtnImg.classList.add('linkImg');
    audiusBtnImg.src = './source/audius.png';
    audiusButton.appendChild(audiusBtnImg);
    audiusButton.setAttribute("href", "https://audius.co/cyborganic/cyborganic-vanishing")
    //add the soundcloud button
    let scButton = document.createElement('a');
    scButton.classList.add('link');
    linksContainer.appendChild(scButton);
    let scButtonImg = document.createElement('img');
    scButtonImg.classList.add('linkImg');
    scButtonImg.src = './source/soundcloud.jpg';
    scButton.appendChild(scButtonImg);
    scButton.setAttribute("href", "https://soundcloud.com/cyborganic-1/vanishing");
    
    innerContainer.classList.add('loaded-card')
}