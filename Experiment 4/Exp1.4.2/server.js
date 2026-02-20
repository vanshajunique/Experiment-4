const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let cards = [
    { id: 1, suit: "hearts", value: "ace", collection: "classic" }
];

app.get("/cards", (req, res) => {
    res.json(cards);
});

app.post("/cards", (req, res) => {
    const { suit, value, collection } = req.body;

    const newCard = {
        id: Date.now(),
        suit,
        value,
        collection
    };

    cards.push(newCard);
    res.status(201).json(newCard);
});

app.put("/cards/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const card = cards.find(c => c.id === id);

    if (!card) {
        return res.status(404).json({ message: "Card not found" });
    }

    card.suit = req.body.suit || card.suit;
    card.value = req.body.value || card.value;
    card.collection = req.body.collection || card.collection;

    res.json(card);
});

app.delete("/cards/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = cards.findIndex(c => c.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Card not found" });
    }

    cards.splice(index, 1);
    res.json({ message: "Card deleted successfully" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
