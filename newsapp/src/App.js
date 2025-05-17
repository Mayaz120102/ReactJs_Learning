import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  apiKey={this.apiKey}
                  key="general"
                  pageSize={5}
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  apiKey={this.apiKey}
                  key="business"
                  pageSize={5}
                  country="us"
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  apiKey={this.apiKey}
                  key="entertainment"
                  pageSize={5}
                  country="us"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/general"
              element={
                <News
                  apiKey={this.apiKey}
                  key="general"
                  pageSize={5}
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  apiKey={this.apiKey}
                  key="health"
                  pageSize={5}
                  country="us"
                  category="health"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  apiKey={this.apiKey}
                  key="science"
                  pageSize={5}
                  country="us"
                  category="science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  apiKey={this.apiKey}
                  key="sports"
                  pageSize={5}
                  country="us"
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  apiKey={this.apiKey}
                  key="technology"
                  pageSize={5}
                  country="us"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
