import React, { useState } from 'react';
import { User, Bell, Eye, Lock } from 'lucide-react';
import FormInput from '../components/Form/FormInput';
import ToggleSwitch from '../components/Form/ToggleSwitch';

// Sekmeler
const tabs = [
  { name: 'Account', icon: User },
  { name: 'Notifications', icon: Bell },
  { name: 'Appearance', icon: Eye },
];

function SettingsPage({ theme, toggleTheme }) {
  const isDark = theme === 'dark';
  const [activeTab, setActiveTab] = useState('Account');

  return (
    <>
      {/* Sayfa Başlığı ve Breadcrumb */}
      <div className="flex items-center justify-between mb-8">
        <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
          Settings
        </h1>
        <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          <span className="cursor-pointer hover:text-indigo-500">Home</span> 
          <span className="mx-2">&gt;</span> 
          <span>Settings</span>
        </div>
      </div>

      {/* Ana Ayarlar Kartı */}
      <div className={`rounded-xl border shadow-sm transition-colors duration-300 ${
        isDark 
          ? 'bg-slate-800 border-slate-700/50' 
          : 'bg-white border-slate-200/50'
      }`}>
        {/* Sekme Navigasyonu */}
        <div className={`border-b ${isDark ? 'border-slate-700/50' : 'border-slate-200/50'}`}>
          <nav className="flex p-4 -mb-px space-x-4" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center space-x-2 px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                  activeTab === tab.name
                    ? `text-indigo-600 ${isDark ? 'bg-indigo-500/20' : 'bg-indigo-50'}`
                    : `${isDark ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'}`
                }`}
              >
                <tab.icon size={16} />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Sekme İçeriği */}
        <div className="p-6">
          {activeTab === 'Account' && <AccountSettings isDark={isDark} />}
          {activeTab === 'Notifications' && <NotificationSettings isDark={isDark} />}
          {activeTab === 'Appearance' && <AppearanceSettings isDark={isDark} theme={theme} toggleTheme={toggleTheme} />}
        </div>
      </div>
    </>
  );
}

// Hesap Ayarları İçeriği
const AccountSettings = ({ isDark }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="max-w-xl">
      <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>Change Password</h3>
      <div className="space-y-4">
        <FormInput 
          label="Current Password"
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          isDark={isDark}
        />
        <FormInput 
          label="New Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          isDark={isDark}
        />
        <FormInput 
          label="Confirm New Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          isDark={isDark}
        />
        <div className="flex justify-end">
          <button className="px-4 py-2 text-sm font-semibold text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700">
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

// Bildirim Ayarları İçeriği
const NotificationSettings = ({ isDark }) => {
  const [emailNewOrder, setEmailNewOrder] = useState(true);
  const [emailLowStock, setEmailLowStock] = useState(false);
  const [pushNewFeatures, setPushNewFeatures] = useState(true);

  return (
    <div className="max-w-xl">
      <h3 className={`text-lg font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-800'}`}>Email Notifications</h3>
      <div className="space-y-5">
        <ToggleSwitch 
          label="Notify me about new orders"
          enabled={emailNewOrder}
          setEnabled={setEmailNewOrder}
          isDark={isDark}
        />
        <ToggleSwitch 
          label="Notify me about low stock"
          enabled={emailLowStock}
          setEnabled={setEmailLowStock}
          isDark={isDark}
        />
      </div>

      <h3 className={`text-lg font-bold mt-8 mb-6 ${isDark ? 'text-white' : 'text-slate-800'}`}>Push Notifications</h3>
      <div className="space-y-5">
        <ToggleSwitch 
          label="Notify me about new features"
          enabled={pushNewFeatures}
          setEnabled={setPushNewFeatures}
          isDark={isDark}
        />
      </div>
    </div>
  );
};

// Görünüm Ayarları İçeriği
const AppearanceSettings = ({ isDark, theme, toggleTheme }) => {
  return (
    <div className="max-w-xl">
      <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>Theme</h3>
      <p className={`text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
        Select your preferred application theme.
      </p>
      
      <div className="flex items-center space-x-4">
        <button
          onClick={() => theme !== 'light' && toggleTheme()}
          className={`flex-1 p-4 rounded-lg border-2 transition-colors ${
            !isDark ? 'border-indigo-600' : `${isDark ? 'border-slate-700 hover:border-slate-500' : 'border-slate-300 hover:border-slate-400'}`
          }`}
        >
          <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>Light</span>
        </button>
        <button
          onClick={() => theme !== 'dark' && toggleTheme()}
          className={`flex-1 p-4 rounded-lg border-2 transition-colors ${
            isDark ? 'border-indigo-600' : `${isDark ? 'border-slate-700 hover:border-slate-500' : 'border-slate-300 hover:border-slate-400'}`
          }`}
        >
          <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>Dark</span>
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
