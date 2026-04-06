import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext.jsx';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import ProtectedRoute from '@/components/ProtectedRoute.jsx';
import HomePage from '@/pages/HomePage.jsx';
import LoginPage from '@/pages/LoginPage.jsx';
import SignupPage from '@/pages/SignupPage.jsx';
import StudentDashboard from '@/pages/StudentDashboard.jsx';
import ResourceDetailPage from '@/pages/ResourceDetailPage.jsx';
import ResourceUploadPage from '@/pages/ResourceUploadPage.jsx';
import UserProfilePage from '@/pages/UserProfilePage.jsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <StudentDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/resource/:id" 
            element={
              <ProtectedRoute>
                <ResourceDetailPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/upload-resource" 
            element={
              <ProtectedRoute>
                <ResourceUploadPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <UserProfilePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="*" 
            element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold mb-4">404 - Page not found</h1>
                  <p className="text-muted-foreground mb-6">The page you're looking for doesn't exist.</p>
                  <a href="/" className="text-primary hover:underline">Back to home</a>
                </div>
              </div>
            } 
          />
        </Routes>
        <Toaster />
      </Router>
    </AuthProvider>
  );
}

export default App;
