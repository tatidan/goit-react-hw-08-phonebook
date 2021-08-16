import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: "60px",
    backgroundColor: "rgba(214, 210, 255, 0.25)",
    padding: "60px 20px",
    borderRadius: "14px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  author: {
    alignSelf: "flex-end",
  },
  button: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const RandomQuotes = () => {
  const classes = useStyles();
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = () => {
    const allQuotes =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    fetch(allQuotes)
      .then((res) => res.json())
      .then((data) => {
        const dataQuotes = data.quotes;
        const randomNum = Math.floor(Math.random() * dataQuotes.length);
        const randomQuote = data.quotes[randomNum];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };

  const handleClick = () => {
    getQuotes();
  };

  return (
    <>
      <div className={classes.card}>
        <Typography component="h1" variant="h6">
          {quote}
        </Typography>
        <p className={classes.author}>{author}</p>
      </div>
      <Button
        id="new-quote"
        type="button"
        // fullWidth
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleClick}
      >
        New quote
      </Button>
    </>
  );
};

export default RandomQuotes;
