*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gilroy', sans-serif;
}

*::selection{
    color: #fff;
    background-color: #000;
}

html,body{
    width: 100%;
    height: 100%;
    background-color: #f7f7f7;
    overflow-x: hidden; /* Horizontal scroll rokne ke liye */
}

/* --- FONTS --- */
@font-face { font-family: 'hn'; src: url(./font/HelveticaNowText-Regular.ttf); }
@font-face { font-family: 'nb'; src: url(./font/Futura-Bold.ttf); }
@font-face { font-family: 'ABC'; src: url(./font/ABCSocialMono-Regular.ttf); }

/* --- LOADER --- */
#loader{
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    color: #fff;
    gap: 5px;
}
#loader h3{
    font-family: 'nb';
    font-size: 2vw;
    font-weight: 100;
    letter-spacing: 1px;
}

/* --- NAVBAR --- */
.navbar{
    width: 100%;
    display: flex;
    align-items: center; /* Center align for mobile */
    justify-content: space-between;
    position: fixed;
    z-index: 99;
    padding: 20px 50px;
    background-color: transparent;
    transition: all 0.3s ease;
}

.nav1 { height: 60px; overflow: hidden; }
.nav1 svg { height: 100%; width: auto; }

.nav2{ display: flex; align-items: center; gap: 20px; }
.nav2 .links a{
    font-family: 'hn';
    text-decoration: none;
    color: #333333af;
    margin: 0 15px;
    font-size: 14px;
    font-weight: 500;
}

.nav2 .icons{
    padding: 8px 15px;
    border-radius: 50px;
    background-color: #f7f7f7;
    display: flex;
    align-items: center;
}
.nav2 .icons i { font-size: 18px; margin-left: 10px; cursor: pointer; }

/* --- PAGE 1 (HERO) --- */
.page1{
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 25vh 2vw 5vw 2vw ;
}
.page1 h1{
    font-family: 'nb';
    font-size: 15vw;
    font-weight: 100;
    line-height: 13vw;
    text-align: center;
    letter-spacing: -5px;
}

/* --- VIDEO SECTION --- */
.video-container{
    width: 100%;
    height: 100vh;
    margin-top: 2vw;
    position: relative;
    overflow: hidden;
}
.video-container img, .video-container video{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.play-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: #f7f7f7;
    z-index: 10;
    cursor: pointer;
}
.play-btn h2 { font-size: 1.2vw; font-family: 'hn'; color: #000; text-transform: uppercase; }

/* --- PAGE 2 (CARDS) --- */
.page2{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 100vh;
    padding: 10vh 2vw;
    gap: 20px;
}
.card{
    position: relative;
    height: 80vh;
    width: 32%;
    overflow: hidden;
    border-radius: 10px;
}
.card img{ width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.card:hover img { transform: scale(1.1); }

.card-label{
    width: 80%;
    height: 50px;
    background: rgba(255,255,255,0.9);
    border-radius: 50px;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.4s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

/* --- PAGE 3 (TEXT) --- */
.page3 { width: 100%; padding: 10vh 5vw; }
.card1 { display: flex; justify-content: space-between; align-items: flex-start; width: 100%; }
.inner-text-1 { width: 55%; }
.inner-text-1 p { font-size: 4.5vw; font-family: 'nb'; line-height: 4.5vw; text-transform: uppercase; }
.inner-text-2 { width: 35%; }
.inner-text-2 p { font-size: 1.1vw; font-family: 'hn'; line-height: 1.6; margin-bottom: 20px; }

/* --- PAGE 4 (PRODUCT GRID) --- */
.page4 { width: 100%; padding: 5vw 2vw; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 20px; }
.card2 { width: calc(50% - 20px); margin-bottom: 40px; }
.card2 img { width: 100%; height: auto; object-fit: cover; border-radius: 5px; }
.button h3 { font-family: 'ABC'; font-size: 1vw; margin: 15px 0 5px; }
.button p { font-family: 'ABC'; font-size: 0.8vw; opacity: 0.7; }

/* --- RESPONSIVE MEDIA QUERIES --- */

/* TABLET (Max 1024px) */
@media (max-width: 1024px) {
    .navbar { padding: 20px; }
    .page1 h1 { font-size: 18vw; }
    .card { height: 60vh; }
    .inner-text-1 { width: 60%; }
    .inner-text-2 { width: 40%; }
    .inner-text-2 p { font-size: 1.8vw; }
}

/* MOBILE (Max 768px) */
@media (max-width: 768px) {
    .nav2 .links { display: none; } /* Hide links on mobile */
    .page1 h1 { font-size: 20vw; line-height: 18vw; }
    .page2 { flex-direction: column; padding: 5vh 5vw; }
    .card { width: 100%; height: 70vh; }
    .card1 { flex-direction: column; gap: 30px; }
    .inner-text-1, .inner-text-2 { width: 100%; text-align: center; }
    .inner-text-1 p { font-size: 8vw; line-height: 9vw; }
    .inner-text-2 p { font-size: 4vw; }
    .play-btn { width: 80px; height: 80px; }
    .play-btn h2 { font-size: 3vw; }
}

/* SMALL MOBILE (Max 480px) */
@media (max-width: 480px) {
    #loader h3 { font-size: 5vw; }
    .page1 { padding-top: 20vh; }
    .page1 h1 { letter-spacing: -2px; }
    .video-container { height: 50vh; }
    .page4 { padding: 5vw; }
    .card2 { width: 100%; } /* Single column products on small mobile */
    .button h3 { font-size: 4vw; }
    .button p { font-size: 3.5vw; }
    .hover-underline-animation { font-size: 4vw; border-bottom: 1px solid #000; }
}
