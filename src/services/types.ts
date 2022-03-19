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

export type SoftFurniture = {
  id: string;
  slug: string;
  type: 'narożnik' | 'kanapa' | 'wersalka' | 'łóżko';
  title: string;
  image: string;
  height: string;
  width: string;
  depth: string;
  seat_depth: string;
  container: number;
  headrest: 'regulowany' | 'nieregulowany';

  arm: 'tapicerowane' | 'drewniane';
  sleep_func: boolean;
  sleep_dim: string;
};

export type Armchair = {
  id: string;
  slug: string;
  type: 'fotel' | 'pufa';
  title: string;
  image: string;
  height: string;
  width: string;
  depth: string;
  seat_depth: string;
  container: number;
  headrest: 'regulowany' | 'nieregulowany';

  trim: 'niklowane' | 'drewniane' | 'tapicerowane';
};
