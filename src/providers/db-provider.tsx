"use client";
import {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
  useMemo,
} from "react";
import PocketBase, { RecordAuthResponse } from "pocketbase";
import { User } from "@/types/user";
import { setCookie, deleteCookie } from "cookies-next";
import { db as pocketBaseDb } from "@/services/db";

export type Db = {
  db: PocketBase;
  user: User;
  token: string;
  signUp: (email: string, password: string) => Promise<User>;
  login: (email: string, password: string) => Promise<RecordAuthResponse<User>>;
  logout: () => void;
};

const DbContext = createContext<Db>({} as Db);

export const DbProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const db = useMemo(() => pocketBaseDb, []);

  const [token, setToken] = useState(db.authStore.token);
  const [user, setUser] = useState(db.authStore.model as User);

  useEffect(() => {
    return db.authStore.onChange((token, model) => {
      setToken(token);
      setUser(model as User);
    });
  }, []);

  const signUp = useCallback(async (email: string, password: string) => {
    return await db
      .collection<User>("users")
      .create({ email, password, passwordConfirm: password });
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const user = await db
      .collection<User>("users")
      .authWithPassword(email, password);

    setCookie("currentUser", JSON.stringify(user));

    return user;
  }, []);

  const logout = useCallback(() => {
    db.authStore.clear();
    deleteCookie("currentUser");
  }, []);

  return (
    <DbContext.Provider value={{ signUp, login, logout, user, token, db }}>
      {children}
    </DbContext.Provider>
  );
};

export const useDb = () => useContext(DbContext);
