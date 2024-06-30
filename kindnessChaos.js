class KindnessChaos {
    constructor() {
        this.acts = [
            { id: 1, description: "Dress up as a superhero and pick up litter in your neighborhood", difficulty: 3, points: 100 },
            { id: 2, description: "Leave positive sticky notes with dad jokes on random car windshields", difficulty: 2, points: 50 },
            { id: 3, description: "Set up a free 'compliment booth' in a busy area for an hour", difficulty: 4, points: 150 },
            { id: 4, description: "Create a tiny art gallery for insects in your garden", difficulty: 1, points: 30 },
            // Add more acts here
        ];
        this.playerScore = 0;
        this.completedActs = [];
    }

    generateRandomAct() {
        const randomIndex = Math.floor(Math.random() * this.acts.length);
        return this.acts[randomIndex];
    }

    completeAct(actId) {
        const act = this.acts.find(a => a.id === actId);
        if (act && !this.completedActs.includes(actId)) {
            this.playerScore += act.points;
            this.completedActs.push(actId);
            return true;
        }
        return false;
    }

    getPlayerScore() {
        return this.playerScore;
    }

    getCompletedActs() {
        return this.completedActs;
    }
}