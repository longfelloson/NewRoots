<style>
    #openCall {
        display: flex;
        width: 100%;
        background-color: #F1F3EE;
        justify-content: center;
        align-items: center;
    }

    #openCall .wrap {
        display: grid;
        column-gap: 50px;
        row-gap: 30px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(3, auto);
        padding: 100px 0;
        align-items: stretch;
    }

    #openCall .duration {
        grid-column: 2;
        grid-row: 1;
        display: flex;
        align-items: center;
        padding: 20px;
        color: white;
        font-size: 32px;
        font-weight: 800;
        font-style: italic;
        background-color: var(--main-color);

    }

    #potatoes {
        grid-column: 1;
        grid-row: 1 / 3;
        /* padding: 5px;
        height: 100%; */
    }

    #openCall .description {
        font-size: 24px;
        font-weight: 200;
        grid-column: 2;
        grid-row: 2;
        
    }

    #openCall .contacts {
        color: var(--main-color);
        grid-column: 2;
        grid-row: 3;
    }

    #openCall .contacts .text {
        font-size: 24px;
    }

    #openCall .email {
        font-size: 30px;
        font-weight: 600;
    }

    @media (max-width: 640px) {
        #openCall .wrap {
            display: flex;
            flex-direction: column;
            padding-top: 40px;
        }

        #openCall {
            text-align: center;
        }


        #openCall .email {
            font-size: 22px;
        }

        #openCall .wrap img {
            max-width: 100%;
        }
    }
</style>

<section id="openCall">
    <div class="wrap">
        <img src="images/open-call.png" id="potatoes" alt="Three potatoes">
        <p class="duration geologica">
            From now until
            <br>
            February 1, 2026
        </p>
        <p class="description geologica">
            “New Roots” is an initiative that supports refugee artists in the Netherlands by creating
            opportunities for integration, visibility, and professional development through a multidisciplinary
            exhibition and accompanying public program.
            <br><br>
            We invite artists, photographers, dancers, performers,
            musicians, and representatives of other creative professions. "New Roots" is an initiative that
            supports refugee artists in the Netherlands.
        </p>
        <div class="contacts geologica">
            <span class="text">
                Please send files of your work with details to
            </span>
            <span class="email copy">newrootsexhibition@gmail.com</span>
        </div>
    </div>
</section>