export const ButtonThemeViewContent = {
    htmlCode: `<div class="row">
  <button class="btn primary-btn">Primary Button</button>
  <button class="btn secondary-btn">Secondary Button</button>
  <button class="btn tertiary-btn">Tertiary Button</button>
  <button class="btn primary-btn" disabled>Disabled</button>
`,

    cssCode: `/* Base button styles */
.btn {
  font-family: inherit;
  font-size: 1rem;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: inline-block;
}

/* Disabled state */
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Primary Button */
.primary-btn {
  background-color: #007bff;
  color: white;
}
.primary-btn:hover:not(:disabled) {
  background-color: #0069d9;
}
.primary-btn:focus {
  outline: 3px solid rgba(0, 123, 255, 0.4);
}

/* Secondary Button */
.secondary-btn {
  background-color: #6c757d;
  color: white;
}
.secondary-btn:hover:not(:disabled) {
  background-color: #5a6268;
}
.secondary-btn:focus {
  outline: 3px solid rgba(108, 117, 125, 0.4);
}

/* Tertiary Button */
.tertiary-btn {
  background-color: transparent;
  color: #007bff;
  border: 2px solid #007bff;
}
.tertiary-btn:hover:not(:disabled) {
  background-color: rgba(0, 123, 255, 0.1);
}
.tertiary-btn:focus {
  outline: 3px solid rgba(0, 123, 255, 0.4);
}
`,

    tsCode: `export class DynamicPreview {
    
  }`
}
