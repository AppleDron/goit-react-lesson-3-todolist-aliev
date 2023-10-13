import Error from 'components/Error/Error';
import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsSearchThunk, getNewsThunk } from 'redux/news/thunk';
import { getNews } from 'services/getNews';
import { useCustonContext } from 'testContext/Context/Context';

const ContentInfo = ({ searchText }) => {
  // const { news, setNews } = useCustomContext();
  // const [error, setError] = useState('');
  // const [status, setStatus] = useState('idle');

  // useEffect(() => {
  //   news && setStatus('resolved');
  // }, [news]);

  // useEffect(() => {
  //   if (!searchText) return;

  //   setStatus('pending');

  //   getNews(searchText)
  //     .then(response => response.json())
  //     .then(news => {
  //       if (news.status === 'ok') {
  //         setNews(news.articles);
  //         setStatus('resolved');
  //         return;
  //       } else return Promise.reject(news.message);
  //     })
  //     .catch(error => {
  //       setError(error);
  //       setStatus('rejected');
  //     });
  // }, [searchText, setNews]);

  const { news, status, error } = useSelector(state => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsThunk);
  }, [dispatch]);

  useEffect(() => {
    if (!searchText) return;
    dispatch(getNewsSearchThunk(searchText));
  }, [dispatch, searchText]);

  // if (status === 'rejected') return <Error>{error}</Error>;
  // else if (status === 'fulfilled')
  //   return (
  //     <ul>
  //       {news.map(el => {
  //         return <li key={el.url}>{el.title}</li>;
  //       })}
  //     </ul>
  //   );
  // else if (status === 'pending')
  //   return <div className="spinner-border" role="status"></div>;
};

export default ContentInfo;
