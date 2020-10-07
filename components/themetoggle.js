import React from 'react';
import styles from './themetoggle.module.scss';

export default function Themetoggle() {

  const
    toggleStore = 'themeToggle',
    [theme, setTheme] = React.useState(null);

  React.useEffect(() => {

    if (!theme) {
      setTheme(
        localStorage.getItem(toggleStore) ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      );
    }

    if (theme) {
      const body = document.body;
      body.classList.remove('dark', 'light');
      body.classList.add(theme);
      localStorage.setItem(toggleStore, theme);
    }

  }, [theme])

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={ styles.themetoggle + ' ' + styles[theme] }
      title="switch theme"
    />
  );

}
