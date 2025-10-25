import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Layout } from './components/layout/Layout';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { Courses } from './pages/Courses';
import { MarksPage } from './pages/Marks';
import { Fees } from './pages/Fees';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/courses" element={
            <ProtectedRoute>
              <Layout>
                <Courses />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/marks" element={
            <ProtectedRoute>
              <Layout>
                <MarksPage />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/fees" element={
            <ProtectedRoute>
              <Layout>
                <Fees />
              </Layout>
            </ProtectedRoute>
          } />

          {/* Additional protected routes would go here */}
          <Route path="/students" element={
            <ProtectedRoute>
              <Layout>
                <div className="text-center py-12">
                  <h2 className="text-2xl font-bold text-gray-900">Students Management</h2>
                  <p className="text-gray-600 mt-2">Coming soon...</p>
                </div>
              </Layout>
            </ProtectedRoute>
          } />

          <Route path="/faculty" element={
            <ProtectedRoute>
              <Layout>
                <div className="text-center py-12">
                  <h2 className="text-2xl font-bold text-gray-900">Faculty Management</h2>
                  <p className="text-gray-600 mt-2">Coming soon...</p>
                </div>
              </Layout>
            </ProtectedRoute>
          } />

          <Route path="/reports" element={
            <ProtectedRoute>
              <Layout>
                <div className="text-center py-12">
                  <h2 className="text-2xl font-bold text-gray-900">Reports</h2>
                  <p className="text-gray-600 mt-2">Coming soon...</p>
                </div>
              </Layout>
            </ProtectedRoute>
          } />

          <Route path="/settings" element={
            <ProtectedRoute>
              <Layout>
                <div className="text-center py-12">
                  <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
                  <p className="text-gray-600 mt-2">Coming soon...</p>
                </div>
              </Layout>
            </ProtectedRoute>
          } />
          
          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;