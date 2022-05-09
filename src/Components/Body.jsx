import React from 'react';
import SearchBar from './SearchBar';
import DisplayModeSwitcher from './DisplayModeSwitcher';
import TasksView from './Tasks/TasksView';

export default function Body() {
  return (
    <div className="w-3/4">
      <SearchBar />
      <DisplayModeSwitcher />
      <TasksView />
    </div>
  );
}
