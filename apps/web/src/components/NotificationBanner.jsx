import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, AlertCircle, Info } from 'lucide-react';

const NotificationBanner = ({ type = 'info', title, message, onClose }) => {
  const icons = {
    success: <CheckCircle className="w-5 h-5" />,
    error: <AlertCircle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />,
  };

  const variants = {
    success: 'border-green-200 bg-green-50 text-green-900',
    error: 'border-red-200 bg-red-50 text-red-900',
    info: 'border-blue-200 bg-blue-50 text-blue-900',
  };

  return (
    <Alert className={variants[type]}>
      {icons[type]}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default NotificationBanner;
