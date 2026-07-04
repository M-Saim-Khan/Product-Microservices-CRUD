import React from 'react'

const Menu = () => {
    return(    
    <ul
      className="dropdown-menu dropdown-menu-end shadow"
      aria-labelledby="bd-theme-text"
    >
      {" "}
      <li>
        {" "}
        <button
          type="button"
          className="dropdown-item d-flex align-items-center"
          data-bs-theme-value="light"
          aria-pressed="false"
        >
          {" "}
          <svg className="bi me-2 opacity-50" aria-hidden="true">
            <use href="#sun-fill" />
          </svg>
          Light
          <svg className="bi ms-auto d-none" aria-hidden="true">
            <use href="#check2" />
          </svg>{" "}
        </button>{" "}
      </li>{" "}
      <li>
        {" "}
        <button
          type="button"
          className="dropdown-item d-flex align-items-center active"
          data-bs-theme-value="dark"
          aria-pressed="true"
        >
          {" "}
          <svg className="bi me-2 opacity-50" aria-hidden="true">
            <use href="#moon-stars-fill" />
          </svg>
          Dark
          <svg className="bi ms-auto d-none" aria-hidden="true">
            <use href="#check2" />
          </svg>{" "}
        </button>{" "}
      </li>{" "}
      <li>
        {" "}
        <button
          type="button"
          className="dropdown-item d-flex align-items-center"
          data-bs-theme-value="auto"
          aria-pressed="false"
        >
          {" "}
          <svg className="bi me-2 opacity-50" aria-hidden="true">
            <use href="#circle-half" />
          </svg>
          Auto
          <svg className="bi ms-auto d-none" aria-hidden="true">
            <use href="#check2" />
          </svg>{" "}
        </button>{" "}
      </li>{" "}
    </ul>
    )
}
export default Menu