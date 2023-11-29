// UserContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Thực hiện logic để kiểm tra và đặt trạng thái người dùng ở đây

  useEffect(() => {
    // Ví dụ: Kiểm tra có người dùng hay không
    const currentUser = getCurrentUser(); // Hàm này cần phải được triển khai dựa trên logic của bạn
    setUser(currentUser);
  }, []);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const user = useContext(UserContext);
  if (user === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return user;
};
