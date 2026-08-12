/* ==================================================
   LORELIA
   Chat System
================================================== */

function showChat(characterId) {

    console.log(
        "LORELIA: Chat Start →",
        characterId
    );


    const app =
        document.getElementById("app");


    app.innerHTML = `
        const chatInput =
        document.getElementById("chatInput");

    const sendButton =
        document.getElementById("sendButton");

    const chatLog =
        document.getElementById("chatLog");


    sendButton.addEventListener("click", () => {

        const text =
            chatInput.value.trim();

        if (!text) {
            return;
        }


        const message =
            document.createElement("div");

        message.className =
            "message playerMessage";


        message.innerHTML = `

            <div class="messageName">
                あなた
            </div>

            <div class="messageText">
                ${text}
            </div>

        `;


        chatLog.appendChild(message);


        chatInput.value = "";

        chatInput.focus();

    });

        <section id="chatScreen">


            <!-- ==================================
                 CHAT HEADER
            ================================== -->

            <header class="chatHeader">

                <div class="chatCharacterName">
                    萩月 要
                </div>

                <div class="chatCharacterRole">
                    人理権能
                </div>

            </header>


            <!-- ==================================
                 CHAT LOG
            ================================== -->

            <main
                id="chatLog"
                class="chatLog"
            >

                <div class="message characterMessage">

                    <div class="messageName">
                        萩月 要
                    </div>

                    <div class="messageText">
                        ……来たか。
                    </div>

                </div>

            </main>


            <!-- ==================================
                 CHAT INPUT
            ================================== -->

            <footer class="chatInputArea">

                <input
                    id="chatInput"
                    type="text"
                    placeholder="メッセージを入力……"
                >

                <button id="sendButton">
                    SEND
                </button>

            </footer>


        </section>

    `;

}
