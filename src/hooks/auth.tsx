import React, { createContext, useCallback, useState, useContext } from 'react';
import { setBearerToken, loginUser, createUser } from '../services/api';

interface User {
  id: string;
  email: string;
  name: string;
  avatar_url: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface CreateAccountProps {
  name: string;
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  createAccount(user: CreateAccountProps): Promise<void>;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@devFood:token');
    const user = localStorage.getItem('@devFood:user');

    if (token && user) {
      setBearerToken(token);

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const createAccount = useCallback(async ({ name, email, password }) => {
    await createUser(name, email, password);
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await loginUser(email, password);
    const { accessToken, user: currentUser } = response.data;
    const { name, email: email_address, avatar_url } = currentUser;

    localStorage.setItem('@devFood:token', accessToken);
    localStorage.setItem(
      '@devFood:user',
      JSON.stringify({
        name,
        email_address,
        avatar_url,
      }),
    );

    setBearerToken(accessToken);
    setData({ token: accessToken, user: currentUser });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@devFood:token');
    localStorage.removeItem('@devFood:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, createAccount, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be user within an AuthProvider');
  }

  return context;
};
