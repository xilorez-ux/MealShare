export interface Meal {
  id: string;
  title: string;
  description: string;
  portions: number;
  author: string;
  image?: string;
}

export interface User {
  name: string;
  profilePicture?: string;
}