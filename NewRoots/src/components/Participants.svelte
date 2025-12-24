<style>
    #participants {
        display: flex;
        flex-direction: column;
        background-color: #F1F3EE;
        justify-content: center;
        align-items: center;
    }

    #work-sample {
        display: grid;
        width: 80%;
        grid-template-columns: 1.5fr 1.5fr;
        align-items: center;
        margin: 0 auto;
    }

    #work-sample img {
        grid-column: 1 / -1;
        grid-row: 1;
        max-width: 100%;
        z-index: 1;
    }

    #work-sample .quote {
        display: flex;
        flex-direction: column;
        grid-column: 2;
        grid-row: 1;
        z-index: 2;
        justify-self: center; 
        align-self: center;
        justify-content: space-between;
        font-size: 21px;
        gap: 40px;
        color: white;
        height: 200px;
        width: 80%;
        padding: 0 20px;
        text-align: justify;
    }

    #work-sample figcaption {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    #soon-message {
        display: flex;
        flex-direction: column;
        color: #1B12F5;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap: 40px;
    }

    #soon-message .title {
        font-weight: 300;
        font-size: 24px;
    }

    #soon-message .soon {
        font-weight: 800;
        font-size: 220px;
    }

    #soon-message p {
        font-weight: 200;
        text-align: center;
        font-size: 32px;
        max-width: 60%;
    }

    #soon-message .contact {
        margin-top: 90px;
        margin-bottom: 140px;
        font-weight: 800;
        font-size: 32px;
    }

    #soon-message .contact .email {
        text-decoration: none;
        border-bottom: 2px solid #1B12F5;
        display: inline-block; 
    }

    #soon-message .contact .email:hover {
        border-bottom: 2px solid #423bff;
    }

    @media (max-width: 640px) {
        #work-sample {
            display: flex;
            flex-direction: column;
            align-items: normal;
        }

        #work-sample .quote {
            gap: 0px;
            font-size: 16px;
            padding: 0px;
            color: black;
            width: 100%;
        }
    }
</style>

<section id="participants">
    <div id="work-sample">
        <img src="/images//participantsWork.jpg" alt="Portrait of Donea Almir">
        <figure class="quote geologica">
            <blockquote>
                “I am a designer and researcher exploring the relationship between plants, humans, and
                places through art and craft. My core mission is to document and study the plants of my home
                country, Syria, and to compare them with local Dutch plants...”
            </blockquote>
            <figcaption>Donea Almir</figcaption>
        </figure>
    </div>
    <div id="soon-message">
        <span class="title geologica">The all participants works will be published </span>
        <span class="soon geologica">SOON</span>
        <p class="geologica">All artworks presented at the exhibition will be available for sale, with proceeds
            supporting
            participating artists</p>
        <span class="contact geologica">Contact us at <span
                class="email copy">newrootsexhibition@gmail.com</span></span>
    </div>
</section>