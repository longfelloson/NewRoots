<style>
    footer {
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: #d2d2d2;
    }

    footer a {
        text-decoration: none;
    }

    #organizations {
        background-color: #d2d2d2;
        display: flex;
        list-style: none;
        padding: 50px;
        width: 80%;
        justify-content: space-between;
        align-items: center;
    }

    #organizations .organization img {
        height: 70px;
    }

    #organizations .organization span {
        color: #3e2f9d;
        font-size: 30px;
    }

    @media (max-width: 640px) {
        footer {
            align-items: center;
        }
        #organizations {
            padding: 40px 20px;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 50px;
        }
        #organizations .organization img {
            max-width: 100%;
        }

        #organizations .organization span {
            font-size: 20px;
        }
    }
</style>

<footer>
    <ul id="organizations">
        <li class="organization">
            <a href="https://www.coa.nl/nl">
                <img src="images/COA.png" alt="">
            </a>
        </li>
        <li class="organization">
            <a href="https://ru.freerussia.nl/">
                <img src="images/FreeRussia.svg" alt="">
            </a>
        </li>
        <li class="organization">
            <a href="https://www.manoirlestilleurs.com/">
                <span class="dm-sans-serif">M A N O I R L E S T I L L E U R S</span>
            </a>
        </li>
    </ul>
</footer>