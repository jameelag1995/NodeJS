import express from "express";
import fs from "fs";
const server = express();

server.use(express.json());

server.get("/movies", (req, res) => {
    try {
        const movies = loadMovies();
        res.send(movies);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

server.post("/movies", (req, res) => {
    try {
        const { title, director, releaseYear } = req.body;
        const newMovie = addMovie(title, director, releaseYear);
        if (!newMovie) {
            throw new Error("failed to add movie");
        }
        res.status(201).send(newMovie);
    } catch (error) {
        res.status(409).send(error.message);
    }
});

server.put("/movies/:title", (req, res) => {
    try {
        const selectedTitle = req.params.title;
        const { title, director, releaseYear } = req.body;
        const allMovies = loadMovies();
        const movie = allMovies.find((movie) => movie.title === selectedTitle);
        if (!movie) {
            throw new Error("No such movie");
        }
        movie.title = title;
        movie.director = director;
        movie.releaseYear = releaseYear;
        const updateMovies = allMovies.filter(
            (movie) => movie.title !== selectedTitle
        );
        updateMovies.push(movie);
        saveMovies(updateMovies);
        res.status(200).send(movie);
    } catch (error) {
        res.status(409).send(error.message);
    }
});

server.get("/movies/:title", (req, res) => {
    try {
        const title = req.params.title;
        if (!title) {
            throw new Error("title is required");
        }
        const allMovies = loadMovies();
        const movie = allMovies.find((movie) => movie.title === title);
        if (!movie) {
            throw new Error("No such movie in database");
        }
        res.status(200).send(movie);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

server.delete("/movies/:title", (req, res) => {
    try {
        const title = req.params.title;

        if (!title) {
            throw new Error("title is required");
        }
        const allMovies = loadMovies();
        const movieToDelete = allMovies.find((movie) => movie.title === title);
        if (!movieToDelete) {
            throw new Error("No such movie in database");
        }

        const updatedMovies = allMovies.filter(
            (movie) => movie.title !== title
        );
        saveMovies(updatedMovies);
        res.status(200).send(updatedMovies);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

const loadMovies = () => {
    try {
        const dataBuffer = fs.readFileSync("movies.json");
        return JSON.parse(dataBuffer);
    } catch (error) {
        return [];
    }
};
const saveMovies = (movies) => {
    const dataJSON = JSON.stringify(movies);
    fs.writeFileSync("movies.json", dataJSON);
};

const addMovie = (title, director, releaseYear) => {
    const movies = loadMovies();
    const duplicateMovies = movies.filter((movie) => movie.title === title);
    if (duplicateMovies.length === 0) {
        movies.push({ title, director, releaseYear });
        saveMovies(movies);
        console.log("New movie added!");
        return { title, director, releaseYear };
    } else {
        console.log("Movie already exists!");
        return false;
    }
};

const listMovies = () => {
    const movies = loadMovies();
    console.log("Movies: ");
    movies.forEach((movie) => console.log(movie.title));
};

server.listen(4545, () => {
    console.log("listening on port 4545");
});
