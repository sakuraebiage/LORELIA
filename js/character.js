/* ==================================================
   LORELIA
   Character Loader
================================================== */

const CharacterManager = {

    characters: {},

    async loadCharacter(id) {

        try {

            const response =
                await fetch(`./characters/${id}.json`);

            if (!response.ok) {
                throw new Error(
                    `Character data not found: ${id}`
                );
            }

            const data = await response.json();

            this.characters[id] = data;

            console.log(
                `Character loaded: ${data.name}`
            );

            return data;

        } catch (error) {

            console.error(
                "Character Load Error:",
                error
            );

            return null;
        }
    },


    getCharacter(id) {

        return this.characters[id] || null;

    }

};
