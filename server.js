const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const movies = [
    { id: 1, name: "Sholay", year: 1975, director: "Ramesh Sippy", genre: "Action" },
    { id: 2, name: "Dilwale Dulhania Le Jayenge", year: 1995, director: "Aditya Chopra", genre: "Romance" },
    { id: 3, name: "3 Idiots", year: 2009, director: "Rajkumar Hirani", genre: "Comedy/Drama" },
    { id: 4, name: "Kabir Singh", year: 2019, director: "Sandeep Reddy Vanga", genre: "Romance/Drama" },
    { id: 5, name: "Dangal", year: 2016, director: "Nitesh Tiwari", genre: "Sports/Drama" },
    { id: 6, name: "PK", year: 2014, director: "Rajkumar Hirani", genre: "Comedy/Drama" },
    { id: 7, name: "Bajrangi Bhaijaan", year: 2015, director: "Kabir Khan", genre: "Drama" },
    { id: 8, name: "Gully Boy", year: 2019, director: "Zoya Akhtar", genre: "Musical/Drama" },
    { id: 9, name: "Zindagi Na Milegi Dobara", year: 2011, director: "Zoya Akhtar", genre: "Adventure/Drama" },
    { id: 10, name: "Chak De! India", year: 2007, director: "Shimit Amin", genre: "Sports/Drama" },
    { id: 11, name: "Queen", year: 2014, director: "Vikas Bahl", genre: "Drama" },
    { id: 12, name: "Andhadhun", year: 2018, director: "Sriram Raghavan", genre: "Thriller" },
    { id: 13, name: "Barfi!", year: 2012, director: "Anurag Basu", genre: "Comedy/Drama" },
    { id: 14, name: "Tanu Weds Manu", year: 2011, director: "Aanand L. Rai", genre: "Romantic/Comedy" },
    { id: 15, name: "Uri: The Surgical Strike", year: 2019, director: "Aditya Dhar", genre: "Action" },
    { id: 16, name: "Padmaavat", year: 2018, director: "Sanjay Leela Bhansali", genre: "Historical/Drama" },
    { id: 17, name: "Bhoot: Part One - The Haunted Ship", year: 2020, director: "Bhanu Pratap Singh", genre: "Horror" },
    { id: 18, name: "Rockstar", year: 2011, director: "Imtiaz Ali", genre: "Musical/Drama" },
    { id: 19, name: "My Name Is Khan", year: 2010, director: "Karan Johar", genre: "Drama" },
    { id: 20, name: "Swades", year: 2004, director: "Ashutosh Gowariker", genre: "Drama" },
    { id: 21, name: "Bahubali: The Beginning", year: 2015, director: "S.S. Rajamouli", genre: "Action/Drama" },
    { id: 22, name: "Bahubali 2: The Conclusion", year: 2017, director: "S.S. Rajamouli", genre: "Action/Drama" },
    { id: 23, name: "Lagaan", year: 2001, director: "Ashutosh Gowariker", genre: "Sports/Drama" },
    { id: 24, name: "Jab We Met", year: 2007, director: "Imtiaz Ali", genre: "Romance" },
    { id: 25, name: "Drishyam", year: 2015, director: "Nishikant Kamat", genre: "Thriller" },
    { id: 26, name: "Ek Tha Tiger", year: 2012, director: "Kabir Khan", genre: "Action/Thriller" },
    { id: 27, name: "Tiger Zinda Hai", year: 2017, director: "Ali Abbas Zafar", genre: "Action/Thriller" },
    { id: 28, name: "Raazi", year: 2018, director: "Meghna Gulzar", genre: "Thriller/Drama" },
    { id: 29, name: "Badhaai Ho", year: 2018, director: "Amit Ravindernath Sharma", genre: "Comedy/Drama" },
    { id: 30, name: "Housefull 4", year: 2019, director: "Farhad Samji", genre: "Comedy" },
    {      "id": 31,
        "name": "SSR: The Legend of Suraj Singh",
        "year": 2019,
        "director": "Sandeep Reddy Vanga",
        "genre": "Romance/Drama"
      },
    {
    "id": 33,
    "name": "Avengers",
    "year": 2024,
    "director": "Sanyam",
    "genre": "Action/Drama"
},
{
    "id": 34,
    "name": "1920",
    "year": 2024,
    "director": "Sanyam",
    "genre": "Action/Drama"
}
      
];


// Add more movies up to 100...

// Get all movies
app.get('/movies', (req, res) => {
    res.json(movies);
});

// Get a single movie by ID
app.get('/movies/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    res.json(movie);
});

// Add a new movie
app.post('/movies', (req, res) => {
    const newMovie = {
        id: movies.length + 1,
        name: req.body.name,
        year: req.body.year,
        director: req.body.director,
        genre: req.body.genre
    };
    movies.push(newMovie);
    res.status(201).json(newMovie);
});

// Update a movie
app.put('/movies/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).json({ message: "Movie not found" });

    movie.name = req.body.name || movie.name;
    movie.year = req.body.year || movie.year;
    movie.director = req.body.director || movie.director;
    movie.genre = req.body.genre || movie.genre;

    res.json(movie);
});

// Delete a movie
app.delete('/movies/:id', (req, res) => {
    const index = movies.findIndex(m => m.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: "Movie not found" });

    movies.splice(index, 1);
    res.json({ message: "Movie deleted successfully" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
