import ContentInfo from 'components/ContentInfo/ContentInfo';
import Search from 'components/Search/Search';
import React, { Suspense, useState } from 'react';

const NewsPage = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = text => setSearchText(text);

  return (
    <Suspense>
      <div>
        News
        <Search onSubmit={handleSearch} />
        <ContentInfo searchText={searchText} />
      </div>
    </Suspense>
  );
};

export default NewsPage;
