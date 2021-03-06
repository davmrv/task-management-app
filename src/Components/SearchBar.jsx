import React from 'react';
import { Box, InputAdornment, OutlinedInput } from '@mui/material';
import { Search } from '@mui/icons-material';

export default function SearchBar() {
  return (
    <Box>
      <OutlinedInput
        placeholder="Search"
        startAdornment={(
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
          )}
        className="w-full"
      />
    </Box>
  );
}
