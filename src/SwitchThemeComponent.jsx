import { useRef, useEffect } from 'react';
import "./Switch.css";
import coderLight from "./images/undraw_proud_coder_light.svg";
import ideLight from "./images/undraw_conceptual_idea_light.svg";
import feelingLight from "./images/undraw_feeling_proud_light.svg";
import coderDark from "./images/undraw_proud_coder_dark.svg";
import ideDark from "./images/undraw_conceptual_idea_dark.svg";
import feelingDark from "./images/undraw_feeling_proud_dark.svg";

export const SwitchThemeComponent = () => {
  const [navElement, textBoxElement, toggleIconElement]  = [useRef(), useRef(), useRef()];
  const [image1Element, image2Element, image3Element] = [useRef(), useRef(), useRef()];
  const currentTheme = useRef(localStorage.getItem('theme'));

  const darkMode = () => {
    navElement.current.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBoxElement.current.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIconElement.current.children[0].textContent = 'Dark Mode';
    toggleIconElement.current.children[1].classList.remove('fa-sun');
    toggleIconElement.current.children[1].classList.add('fa-moon');
    image1Element.current.src = coderDark;
    image2Element.current.src = ideDark;
    image3Element.current.src = feelingDark;
  };

  const lightMode = () => {
    navElement.current.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBoxElement.current.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIconElement.current.children[0].textContent = 'Light Mode';
    toggleIconElement.current.children[1].classList.remove('fa-moon');
    toggleIconElement.current.children[1].classList.add('fa-sun');
    image1Element.current.src = coderLight;
    image2Element.current.src = ideLight;
    image3Element.current.src = feelingLight;
  };

  const toggleHandler = (event) => {
      if (event.target.checked) {
          document.documentElement.setAttribute('data-theme','dark');
          localStorage.setItem('theme', 'dark');
          darkMode();
      }
      else {
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme', 'light');
        lightMode();
      }
  };
  
  useEffect(() => {
    (() => {
      if (currentTheme.current) {
        document.documentElement.setAttribute('data-theme',currentTheme.current);

        if (currentTheme.current === 'dark') {
          toggleIconElement.current.checked= true;
          darkMode();
        }
      }
    })();
  }, []);

  return (
    <>
    {console.log('RENDER')}
    <div className="theme-switch-wrapper">
        <span id="toggle-icon" ref={toggleIconElement}>
            <span className="toggle-text">Light mode</span>
            <i className="fas fa-sun"></i>
        </span>
        <label className="theme-switch">
            <input type="checkbox" onChange={toggleHandler}/>
            <div className="slider round"></div>
        </label>
    </div>
      <nav id="nav" ref={navElement}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <section id="home">
        <div className="title-group">
          <h1>Section Title</h1>
          <h2>Second title</h2>
        </div>
      </section>
      <section id="about">
        <h1>Undraw illustrations</h1>
        <div className="about-container">
          <div className="image-container">
            <h2>Web innovation</h2>
            <img src={coderLight} id="image1" alt="Alternative" ref={image1Element}></img>
          </div>
          <div className="image-container">
            <h2>Problem solving</h2>
            <img src={ideLight} id="image2" alt="Alternative" ref={image2Element}></img>
          </div>
          <div className="image-container">
            <h2>High concept</h2>
            <img src={feelingLight} id="image3" alt="Alternative" ref={image3Element}></img>
          </div>
        </div>
      </section>
      <section id="projects">
        <h1>Buttons</h1>
        <div className="buttons">
          <button className="primary">Primary</button>
          <button className="secondary">Secondary</button>
          <button className="primary" disabled>
            Primary
          </button>
          <button className="outline">Outline</button>
          <button className="secondary outline">Alt Outline</button>
          <button className="outline" disabled>
            Outline
          </button>
        </div>
        <div className="text-box" id="text-box" ref={textBoxElement}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum
            libero adipisci dolore dicta, cum impedit asperiores neque tempora
            autem, praesentium quis nisi quo consequatur reiciendis minima
            beatae assumenda optio.
          </p>
        </div>
      </section>
    </>
  );
};
