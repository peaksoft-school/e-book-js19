import { useState } from 'react';
import SignIn from '../../sign-in-up/ui/SignIn';
import SignUpVendor from '../../sign-in-up/ui/SignUpVendor';
import { Tabs } from '../../../shared/ui/Tabs';
import BackgroundImage from '../../../shared/assets/images/background.png';
import SignUpUser from '../../sign-in-up/ui/SignUpUser';

type Tab = 'signin' | 'signup' | 'vendor';

const tabs = [
  { value: 'signin', label: 'Войти' },
  { value: 'signup', label: 'Регистрация' }
];

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>('signin');

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="bg-white p-8 w-95">
        <Tabs
          tabs={tabs}
          activeTab={activeTab === 'vendor' ? 'signup' : activeTab}
          onChange={(value) => setActiveTab(value as Tab)}
          className="mb-8"
        />

        {activeTab === 'signin' && <SignIn />}
        {activeTab === 'signup' && <SignUpUser onSwitchToVendor={() => setActiveTab('vendor')} />}
        {activeTab === 'vendor' && <SignUpVendor />}
      </div>
    </div>
  );
};

export default AuthPage;
