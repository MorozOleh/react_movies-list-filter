import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  changeQuery = (event) => {
    const { value, name } = event.target;

    this.setState(({ [name]: value }));
  }

  render() {
    const { query } = this.state;
    const { changeQuery } = this;

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
              </label>

              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  value={query}
                  className="input"
                  name="query"
                  placeholder="Type search word"
                  onChange={changeQuery}
                />
              </div>
            </div>
          </div>

          <MoviesList
            movies={moviesFromServer}
            query={query}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}