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
  loginUser: (email: string, password: string) => void;
  logOut: () => void;
};

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
