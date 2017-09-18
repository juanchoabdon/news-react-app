import React, { Component } from 'react';
import api from '../api';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      source: ''
    }

    this.getArticles = this.getArticles.bind(this)
  }

  componentDidMount() {
    this.getArticles()
  }

async getArticles() {
    let response = await api.getArticlesBySource(this.props.match.params.source_id);
    this.setState({
      articles: response.articles,
      source: response.source
    })
  }

  render() {
    return (
      <div className="Articles container">
        <h1> {this.state.source} </h1>
        <div className="row">
      {
        this.state.articles.map(article =>
         <div className="col s3">

            <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={article.urlToImage}/>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">{article.title}<i className="material-icons right">more_vert</i></span>
              <p><a href={article.url} target="_blank">Ver mas</a></p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
              <p> {article.description} </p>
            </div>
            </div>

         </div>

        )

      }
      </div>
      </div>
    );
  }
}

export default Articles;
