import React from 'react';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Notes', 'Videos', 'Books', 'Assignments', 'Other'];

const CategoryFilter = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? 'default' : 'outline'}
          size="sm"
          onClick={() => onCategoryChange(category)}
          className="transition-all duration-200"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
