'use client'
import { Box, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PromptCard from './PromptCard';

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    e.preventDefault();
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);
    const searchResult = filterPrompts(tagName);
    setSearchResults(searchResult);
  };

  useEffect(() => {
    const fetchPost = async () => {
      // Simulated useClient hook for fetching data
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPosts(data);
    };

    fetchPost();
  }, []);

  const filterPrompts = (searchText) => {
    const regex = new RegExp(searchText, 'i');
    return posts.filter(
      (item) =>
        regex.test(item.creator?.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  return (
    <Box>
      <form>
        <TextField
          type='text'
          placeholder='Search for tag or username'
          value={searchText}
          onChange={handleSearchChange}
          required
          variant='outlined'
          fullWidth
          sx={{ marginBottom: 2 }}
        />
      </form>
      <PromptCardList data={searchResults.length > 0 ? searchResults : posts} handleTagClick={handleTagClick} />
    </Box>
  );
};

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <Grid container spacing={3}>
      {data.map((post, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Feed;

