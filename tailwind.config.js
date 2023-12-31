/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './Components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const darkMode = "class";
export const theme = {
  extend: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    boxShadow: {
      'custom-shadow': '10px 24px 58px rgba(45, 45, 45), -10px -24px 58px rgba(51, 51, 51)',
      'own-shadow': '5px 3.5px 12px 4px #1c1c1c90'
    },
    colors: {
      'myRed': '#ff0000',
      'insta':'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
      'fb':'linear-gradient(to right, #1d7ece, #4b7bec)',
      'linkedin':'background: linear-gradient(to right, #55acee, #1da1f2)',
    },
  },
};
export const plugins = [
  require('tailwind-scrollbar')({ nocompatible: true }),
];
