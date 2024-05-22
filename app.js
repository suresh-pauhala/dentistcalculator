const basePrices = {
    base: {
        experienced: {
            1: 1060, // One tooth missing
            2: 2120, // Two teeth missing
            3: 2500, // Three teeth missing
            4: 2800, // Four teeth missing
            5: 3100, // Five and more teeth missing 
            6: 4500, // "lower arch teeth missing"
            7: 4500, // "upper arch teeth missing"
            8: 9000 // "both arch teeth missing"
        },
        inexperienced: {
            1: 980,
            2: 1960,
            3: 2260,
            4: 2560,
            5: 2860,
            6: 3597,
            7: 3597,
            8: 7294
        }
    }
};

const optimalPremiumPrices = {
    base: basePrices,
    optimal: {
        experienced: {
            1: basePrices.experienced[1] + 120,
            2: basePrices.experienced[2] + 120,
            3: basePrices.experienced[3] + 120,
            4: basePrices.experienced[4] + 120,
            5: basePrices.experienced[5] + 120,
            6: basePrices.experienced[6] + 120,
            7: basePrices.experienced[7],
            8: basePrices.experienced[8]
        },
        inexperienced: {
            1: basePrices.inexperienced[1] + 120,
            2: basePrices.inexperienced[2] + 120,
            3: basePrices.inexperienced[3] + 120,
            4: basePrices.inexperienced[4] + 120,
            5: basePrices.inexperienced[5] + 120,
            6: basePrices.inexperienced[6],
            7: basePrices.inexperienced[7],
            8: basePrices.inexperienced[8]
        }
    },
    premium: {
        experienced: {
            1: basePrices.experienced[1] + 220,
            2: basePrices.experienced[2] + 220,
            3: basePrices.experienced[3] + 220,
            4: basePrices.experienced[4] + 220,
            5: basePrices.experienced[5] + 220,
            6: basePrices.experienced[6] + 220,
            7: basePrices.experienced[7],
            8: basePrices.experienced[8]
        },
        inexperienced: {
            1: basePrices.inexperienced[1] + 220,
            2: basePrices.inexperienced[2] + 220,
            3: basePrices.inexperienced[3] + 220,
            4: basePrices.inexperienced[4] + 220,
            5: basePrices.inexperienced[5] + 220,
            6: basePrices.inexperienced[6],
            7: basePrices.inexperienced[7],
            8: basePrices.inexperienced[8]
        }
    }, 
    teethPosition: {
        front: 150,
        rear: 0,
    },
    teethExtraction: {
        option1: 50, // One tooth to extract
        option2: 100, // Two teeth to extract
        option3: 150, // Three teeth to extract
        option4: 180, // Four teeth to extract
        option5: 0 // "Unclear"
    }
}; 
