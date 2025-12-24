<script>
    import { onMount } from 'svelte';

    let headerEl;

    const images = [
        "/images/BackgroundSlideOne.png",
        "/images/BackgroundSlideTwo.png",
        "/images/BackgroundSlideThree.png"
    ];

    let currentIndex = 0;
    let interval;

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;

        const img = new Image();
        img.onload = () => {
            headerEl.style.backgroundImage = `url('${images[currentIndex]}')`;
        };
        img.src = images[currentIndex];
    }

    onMount(() => {
        headerEl.style.backgroundImage = `url('${images[currentIndex]}')`;
        interval = setInterval(changeBackground, 10000);

        return () => clearInterval(interval);
    });
</script>


<style>
    .bg-fade {
        position: absolute;
        inset: 0;
        z-index: 0;
    }

    header {
        min-height: 1100px;
        background-image: url("/images/BackgroundSlideOne.png");
        background-size: cover; 
        background-repeat: no-repeat;
        transition: background-image 1s ease-in-out;
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #header-info {
        display: flex;
        gap: 20px; 
        align-items: center;
        flex-direction: column;
        margin-top: 200px;
    }

    #header-info .description {
        max-width: 900px; 
        margin: 0 auto;
        text-align: center;
        color: white;
        font-size: 18px;
        line-height: 1.4;
        text-shadow: 0px 2px 4px rgba(0,0,0,0.6); 
    }


    header a {
        font-size: 24px;
        text-decoration: none;
        font-family: 'Geologica';
    }

    header a:visited {
        color: var(--main-color);
    }

    nav {
        display: flex;
        padding: 30px;
        justify-content: center;
        align-items: center;
    }
    nav ul {
        width: 50%;
        display: flex;
        list-style: none;
        justify-content: space-between;
    }

    header .title {
        font-size: 220px;
        font-weight: 800;
    }

    header .italic {
        font-style: italic;
    }

    #header-title {
        text-align: center;
        display: flex;
        flex-direction: column;
        color: var(--main-color);
    }

    #header-title .subtitle {
        font-size: 48px;
        font-weight: 200;
    }

    #header-learn-more {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-bottom: 20px;
    }

    #header-learn-more span {
        font-weight: 200;
        font-size: 24px;
    }

    #header-learn-more button {
        background: none;
        border: none;
    }
</style>

<header bind:this={headerEl}>
    <div class="bg-fade"></div>
    <nav>
        <ul>
            <li>
                <a href="#openCall">Open call</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#participants">Participants</a>
            </li>
            <li>
                <a href="/openCall">Contacts</a>
            </li>
        </ul>
    </nav>
    <div id="header-title">
        <span class="title geologica">
            New<span class="italic">Roots</span>
        </span>
        <span class="subtitle geologica">Refugee Artists in the Netherlands</span>
    </div>
    <div id="header-info">
        <p class="description geologica">
            In a world marked by conflict, economic instability, and forced migration, millions are compelled to
            rebuild their lives from nothing. Among them are artists and creative professionals — individuals who
            carry not only their personal histories but also the cultural heritage of their homelands.
        </p>
        <div id="header-learn-more">
            <span class="geologica">Learn more</span>
            <button>
                <img src="/icons/arrowDown.svg" alt="" srcset="">
            </button>
        </div>
    </div>
</header>