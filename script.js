/*page elements*/
const imgURL = document.getElementById('imageLink');
const formTopText = document.getElementById('topText');
const formBottomText = document.getElementById('bottomText');
const createBtn = document.getElementById('createBtn');
const main = document.getElementById('main')
const memeForm = document.getElementById('memeForm')


function createMeme(){
  const meme = document.createElement('btn');
  const topText = document.createElement('div');
  const memeImg = document.createElement('img');
  const bottomText = document.createElement('div');
  const overlay = document.createElement('img')

  topText.textContent = formTopText.value;
  topText.classList.add('top-text');
  bottomText.textContent = formBottomText.value;
  bottomText.classList.add('bottom-text');
  memeImg.src = imgURL.value;
  overlay.src = './close.svg'
  overlay.classList.add('overlay');
  meme.classList.add('meme');
  meme.append(topText,bottomText,memeImg,overlay);

  meme.addEventListener('click',(e)=>{
    e.preventDefault();
    main.removeChild(meme);
  })

  return meme;
}

createBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  let meme = createMeme();
  main.appendChild(meme);
  memeForm.reset();
})
