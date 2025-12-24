<style>
    #about {
        width: 100%;
    }

    #about .section .subsection {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    #about .section {
        padding: 80px 100px;
    }

    #about .section.first {
        display: flex;
        background-color: #E7E7E7;
        flex-direction: column;
        gap: 80px;
        width: 100%;
    }

    #about .info {
        display: flex;
        width: 60%;
        flex-direction: column;
        font-weight: 200;
        font-size: var(--second-text-size);
    }

    #about ul {
        list-style-position: outside;
        padding-left: 1.2em;
        margin: 0;
        font-weight: 200;
        font-size: var(--second-text-size);    
        gap: 8px;   
        display: flex;
        flex-direction: column;
    }

    #about .title {
        font-size: var(--second-text-size);
        font-weight: 600;
        margin: 30px 0;
    }
    #about .subsection img {
        border-radius: 20px;
        height: 274px;
        max-height: 350px;
    }

    #about hr {
        height: 2px;
        background-color: #303030;
    }

    #about .section.second .subsection {
        flex-direction: column;
        width: 64%;
        font-size: var(--first-text-size);
    }

    #about .subsection .subtitle {
        font-size: var(--second-text-size);
        font-weight: 200;
        margin-bottom: 30px;
    }

    #about .section.second {
        display: flex;
        color: #353535;
        flex-direction: column;
        padding: 40px 100px;
        background-image: url('/images/tree-in-pot.jpg');
        min-height: 1100px;
        background-size: cover; 
        background-position: bottom right;
        background-repeat: no-repeat;
        gap: 50px;
        
    }

    @media (max-width: 640px) {
        #about .section.first, 
        #about .section.second {
            padding: 60px 40px;
            gap: 14px;
        }

        #about .section.second {
            background-image: none;
            background-color: lightgrey;
        }

        #about .section.second {
            padding-top: 0px;
        }

        #about .subsection {
            flex-direction: column;
        }

        #about .section .subsection.first,
        #about .section .subsection.second {
            width: 100%;
        }

        #about .subsection hr {
            display: none;
        }
        
        #about .info {
            width: 100%;
        }

        #about .subsection img {
            max-width: 100%;
            height: auto;
        }

        #about .subsection.second img {
            margin-top: 40px;
        }
    }
</style>

<section id="about">
    <div class="section first">
        <div class="subsection first">
            <img src="images/donkeys.png" alt="A group of donkeys">
            <div class="info geologica">
                <hr>
                <span class="title geologica">Belonging</span>
                <p>“New Roots” is more than an exhibition - it is a bridge between worlds, a space for dialogue,
                    creativity, and human connection. By supporting this initiative, the foundation will help
                    ensure
                    that refugee artists not only find safety but also reclaim their voices and contribute to
                    the
                    shared cultural future of their new home.</p>
            </div>
        </div>
        <div class="subsection second">
            <div class="info">
                <hr>
                <span class="title geologica">Impact</span>
                <ul class="geologica">
                    <li>Empower refugees to regain professional identity and confidence.</li>
                    <li>Create meaningful connections between newcomers and the Dutch creative community.</li>
                    <li>Enrich the cultural landscape of the Netherlands by showcasing diverse artistic voices
                        and stories.</li>
                </ul>
            </div>
            <img src="images/people.jpg" alt="A group of people">
        </div>
    </div>
    <div class="section second geologica">
        <div class="subsection first">
            <span class="title">Objectives</span>
            <span class="subtitle">The project aims to:</span>
            <ul>
                <li>Provide a creative platform for refugee artists, musiciansand performers to present their
                    work to the Dutch public.</li>
                <li>Foster cultural exchange and understanding between refugees and local communities.</li>
                <li>Facilitate integration into the Dutch cultural sector through mentorship, networking,
                    and professional guidance</li>
            </ul>
        </div>
        <div class="subsection second">
            <span class="title geologica">Program Components</span>
            <span class="subtitle">The initiative will take place in collaboration with COA (Centraal Orgaan
                opvang asielzoekers) and will include:</span>
            <ul>
                <li>Art Exhibition featuring works by refugee artists.</li>
                <li>Music - exhibition with headphones for listening to music: DJ sets, instrumental music, and
                    more</li>
                <li>Music and Theatre Performances highlighting diverse cultural expressions.</li>
                <li>Experience Exchange Sessions with artists who have successfully integrated in past years.
                </li>
                <li>Lectures and Workshops led by curators, producers, and representatives of cultural
                    foundations on professional development in the Netherlands.</li>
                <li>Public Talk and Q&A to encourage dialogue between participants and audiences.</li>
            </ul>
        </div>
    </div>
</section>