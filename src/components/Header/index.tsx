import React from 'react';

import { FiPower, FiCornerDownLeft } from 'react-icons/fi';
import { useHistory } from 'react-router';
import logoImg from '../../assets/logo.png';

import { useAuth } from '../../hooks/auth';

import { Header, HeaderContent, Profile } from './styles';

interface AppHeaderProps {
  hasBackLink?: boolean;
}

const AppHeader: React.FC<AppHeaderProps> = ({ hasBackLink }) => {
  const history = useHistory();
  const { signOut, user } = useAuth();

  return (
    <Header>
      <HeaderContent>
        <img src={logoImg} alt="devFood" />

        <Profile>
          <img src={user.avatar_url} alt={user.email} />

          <div>
            <span>Bem vindo,</span>
            <strong>{user.name}</strong>
          </div>
        </Profile>

        <div>
          {hasBackLink && (
            <button type="button" onClick={() => history.goBack()}>
              <FiCornerDownLeft size={20} />
            </button>
          )}
          <button type="button" onClick={signOut}>
            <FiPower size={20} />
          </button>
        </div>
      </HeaderContent>
    </Header>
  );
};

export default AppHeader;
