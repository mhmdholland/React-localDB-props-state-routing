import React, { Component } from "react";

class Posts extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.db &&
          this.props.db.slice(0, 36).map(function(results) {
            return (
              <div className="movie">
                <h1>{results.Title} &nbsp;</h1>
                <h4>{results.fulltitle} &nbsp;</h4>
                <h4>{results.movie_year} &nbsp;</h4>
                <p>{results.summary} &nbsp;</p>
                <img
                  className="img"
                  src={results.imgurl}
                  width="400"
                  alt="movie pic"
                />
                <p>{results.imdb_rating}</p>
                <h4>{results.language}</h4>
              </div>
            );
          })}
      </React.Fragment>
    );
  }
}

export default Posts;

//console.log(this.props.db);
// const moives = this.props.db.map(movie => {
//   return <h1>{movie.Title}</h1>;
// });

// return (
//   <div>
//     <p>{movies}</p>
//   </div>
// );
