import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User, Settings, Edit, Bell, LogOut } from 'lucide-react';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface UserData {
  name: string;
  email: string;
  avatarUrl?: string;
}

const UserProfileModal: React.FC<UserProfileModalProps> = ({ isOpen, onClose }) => {
  const [user, setUser] = useState<UserData | null>(null);

  // Fetch user data from the backend
  useEffect(() => {
    if (isOpen) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get('/api/user', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
          setUser(response.data);
        } catch (error) {
          console.error('Failed to fetch user data:', error);
        }
      };
      fetchUserData();
    }
  }, [isOpen]);

  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">User Profile</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-900">
            &times;
          </button>
        </div>

        {/* Profile Information */}
        <div className="mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
              {user.avatarUrl ? (
                <img src={user.avatarUrl} alt="User Avatar" className="w-full h-full object-cover" />
              ) : (
                <User className="w-8 h-8 text-gray-500" />
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <button
            onClick={() => {
              onClose();
              window.location.href = '/settings';
            }}
            className="w-full flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <Settings className="w-5 h-5 mr-2" />
            Settings
          </button>
          <button
            onClick={() => {
              onClose();
              window.location.href = '/update-user';
            }}
            className="w-full flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <Edit className="w-5 h-5 mr-2" />
            Update Profile
          </button>
          <button
            onClick={() => {
              onClose();
              window.location.href = '/notifications';
            }}
            className="w-full flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <Bell className="w-5 h-5 mr-2" />
            Notifications
          </button>
          <button
            onClick={() => {
              localStorage.removeItem('token');
              window.location.href = '/login';
            }}
            className="w-full flex items-center p-2 text-red-500 hover:bg-red-50 rounded-lg"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileModal;