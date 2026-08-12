/* ==================================================
   LORELIA
   Application Controller
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const startButton = document.getElementById("startButton");
    const app = document.getElementById("app");

    if (!startButton || !app) {
        console.error("LORELIA: Required elements were not found.");
        return;
    }


    /* ==============================================
       START
    ============================================== */

    startButton.addEventListener("click", () => {

        console.log("LORELIA: START");

        showCharacterSelect();

    });


    /* ==============================================
       CHARACTER SELECT
    ============================================== */

    async function showCharacterSelect() {

        app.innerHTML = `
            <section id="characterSelect">

                <div class="screenTitle">
                    <p>LORELIA</p>
                    <h2>CHARACTER SELECT</h2>
                </div>

                <div class="characterList">

         <button class="characterCard" data-character="kaname">

    <div class="characterImage">
        <!-- キャラクター画像は後から追加 -->
    </div>

    <div class="characterInfo">

        <span class="characterName">
            萩月 要
        </span>

        <span class="characterRole">
            人理権能
        </span>

    </div>

</button>

                    <button class="characterCard" data-character="keika">
                        <span class="characterName">萩月 恵佳</span>
                        <span class="characterRole">万象権能</span>
                    </button>

                    <button class="characterCard" data-character="shizumi">
                        <span class="characterName">十束 静海</span>
                        <span class="characterRole">破壊権能</span>
                    </button>

                    <button class="characterCard" data-character="kohaku">
                        <span class="characterName">九条 瑚白</span>
                        <span class="characterRole">創造権能</span>
                    </button>

                    <button class="characterCard" data-character="houraku">
                        <span class="characterName">萩月 宝楽</span>
                        <span class="characterRole">Character</span>
                    </button>

                    <button class="characterCard allCharactersCard" data-character="all">

    <span class="characterName">
        ✦ ALL FIVE ✦
    </span>

    <span class="characterRole">
        5人全員と会話する
    </span>

</button>

                </div>

                <button id="backButton">
                    BACK
                </button>

            </section>
        `;

        setupCharacterSelect();
    }


    /* ==============================================
       CHARACTER SELECT EVENTS
    ============================================== */

    function setupCharacterSelect() {

        const characterCards =
            document.querySelectorAll(".characterCard");

        const backButton =
            document.getElementById("backButton");


        characterCards.forEach(card => {

            card.addEventListener("click", () => {

                const characterId =
                    card.dataset.character;

                selectCharacter(characterId);

            });

        });


        backButton.addEventListener("click", () => {

            location.reload();

        });

    }


    /* ==============================================
       CHARACTER SELECTED
    ============================================== */

    function selectCharacter(characterId) {

        console.log(
            "LORELIA: Character selected →",
            characterId
        );

        app.innerHTML = `
            <section id="characterSelected">

                <div class="screenTitle">

                    <p>LORELIA</p>

                    <h2>CHARACTER SELECTED</h2>

                </div>

                <div class="selectedCharacter">

                    <p>
                        Selected Character
                    </p>

                    <h1>
                        ${getCharacterName(characterId)}
                    </h1>

                    <span>
                        ${characterId}
                    </span>

                </div>

                <button id="returnCharacterSelect">
                    RETURN
                </button>

            </section>
        `;


        document
            .getElementById("returnCharacterSelect")
            .addEventListener("click", () => {

                showCharacterSelect();

            });

    }


    /* ==============================================
       CHARACTER NAME
    ============================================== */

    function getCharacterName(characterId) {

        const characters = {

            kaname: "萩月 要",

            keika: "萩月 恵佳",

            shizumi: "十束 静海",

            kohaku: "九条 瑚白",

            houraku: "萩月 宝楽"

        };

        return characters[characterId] ?? "Unknown";

    }
    
        /* ==============================================
       CHARACTER LOADER
    ============================================== */

    async function loadCharacter(characterId) {

        try {

            const response =
                await fetch(
                    `./characters/${characterId}.json`
                );

            if (!response.ok) {

                throw new Error(
                    `Character data not found: ${characterId}`
                );

            }

            const character =
                await response.json();

            return character;

        } catch (error) {

            console.error(
                "LORELIA: Character Load Error",
                error
            );

            return null;

        }

    }
    
    

   async function loadKaname() {

    const response = await fetch("./characters/kaname.json");

    const kaname = await response.json();

    console.log(kaname);

}

loadKaname();

});
