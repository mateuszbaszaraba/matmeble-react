import React from 'react';

export type User = {
  email: string;
  first_name: string;
  last_name: string;
  user_name: string;
};

export type Tokens = {
  access: string;
  refresh: string;
};

export type AuthContextTypes = {
  user: User | null;
  tokens: Tokens | null;
  loginUser: (event: React.FormEvent<CustomFormElements>) => void;
  logOut: () => void;
};

export interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

export interface CustomFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}
