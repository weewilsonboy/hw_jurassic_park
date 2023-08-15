const daysPerYear = 365.25;

class Park {
    constructor(name, ticketPrice, dinoList = []) {
        this.name = name;
        this.ticketPrice = ticketPrice;
        this.dinoList = dinoList;
    }

    addDino(newDino) {
        this.dinoList.push(newDino);
    }

    removeDino(removedDino) {
        this.dinoList.splice(this.dinoList.indexOf(removedDino), 1);
    }

    popular() {
        let mostPopularDino = this.dinoList[0];
        for (let dino of this.dinoList) {
            if (
                dino.guestsAttractedPerDay >
                mostPopularDino.guestsAttractedPerDay
            ) {
                mostPopularDino = dino;
            }
        }
        return mostPopularDino;
    }

    findSpecies(givenSpecies) {
        let foundDinos = [];
        for (let dino of this.dinoList) {
            if (dino.species === givenSpecies) {
                foundDinos.push(dino);
            }
        }
        return foundDinos;
    }

    calculateTotalDailyVisitors() {
        let total = 0;
        for (let dino of this.dinoList) {
            total += dino.guestsAttractedPerDay;
        }
        return total;
    }

    calculateTotalYearlyVisitors() {
        return this.calculateTotalDailyVisitors() * daysPerYear;
    }

    totalYearlyRevenue() {
        return this.calculateTotalYearlyVisitors() * this.ticketPrice;
    }

    removeSpecies(givenSpecies) {
        const keepSpecies = function (givenDino) {
            return givenDino.species != givenSpecies;
        };
        let remodList = this.dinoList.filter(keepSpecies);
        this.dinoList = remodList;
    }
}

module.exports = Park;
