import Error from 'components/Error/Error';
import React, { Component } from 'react';
import { getNews } from 'services/getNews';

export default class ContentInfo extends Component {
  state = { news: null, error: '', status: 'idle' };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({ status: 'pending' });

      getNews(this.props.searchText)
        .then(response => response.json())
        .then(news => {
          if (news.status === 'ok') {
            this.setState({ news: news.articles, status: 'resolved' });
            return;
          } else return Promise.reject(news.message);
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  };

  render() {
    const { news, error, status } = this.state;

    if (status === 'rejected') return <Error>{error}</Error>;
    else if (status === 'resolved')
      return (
        <ul>
          {news.map(el => {
            return <li key={el.url}>{el.title}</li>;
          })}
        </ul>
      );
    else if (status === 'pending')
      return <div className="spinner-border" role="status"></div>;
  }
}
