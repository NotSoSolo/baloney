import './button.css';

export const createButton = ({
  variant,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  btn.className = ['button', variant ? `button--${variant}` : ''].join(' ');

  // btn.style.backgroundColor = backgroundColor;

  return btn;
};
