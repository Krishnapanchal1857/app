import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, User } from 'lucide-react';
import { format } from 'date-fns';

const categoryColors = {
  Notes: 'bg-blue-100 text-blue-700 border-blue-200',
  Videos: 'bg-purple-100 text-purple-700 border-purple-200',
  Books: 'bg-green-100 text-green-700 border-green-200',
  Assignments: 'bg-orange-100 text-orange-700 border-orange-200',
  Other: 'bg-gray-100 text-gray-700 border-gray-200',
};

const ResourceCard = ({ resource, onClick, index = 0 }) => {
  const categoryColor = categoryColors[resource.category] || categoryColors.Other;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onClick={onClick}
      className="group bg-card border rounded-xl p-6 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          <span className={`text-xs font-medium px-2 py-1 rounded-md border ${categoryColor}`}>
            {resource.category || 'Other'}
          </span>
        </div>
      </div>

      <h3 className="font-semibold text-lg mb-2 text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
        {resource.title}
      </h3>

      {resource.description && (
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
          {resource.description}
        </p>
      )}

      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t">
        <div className="flex items-center gap-1">
          <User className="w-3.5 h-3.5" />
          <span>{resource.expand?.uploaded_by?.full_name || 'Unknown'}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5" />
          <span>{format(new Date(resource.created_at), 'MMM d, yyyy')}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ResourceCard;
