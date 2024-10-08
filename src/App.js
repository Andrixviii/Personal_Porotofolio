import './App.css';
import TypingEffect from './components/TypingEfect';
import SmoothScroll from './components/SmoothScroll';
import PageUpButton from './components/PageUpButton';

function App() {
  return (
  <>
    <SmoothScroll/>
    <PageUpButton />

    <div className="header">
      <header>
        <h1>
          <span className='typed-text' id="typed-text"><TypingEffect /></span>
        </h1>
        
        <div className="logo-container">
          <div id="logo-1" className="logo-header" onClick={() => window.open("https://github.com/Andrixviii")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width={40}
              height={40}
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 0 1 2-.27c.68.003 1.36.092 2 .27 1.53-1.04 2.2-.82 2.2-.82.45 1.1.17 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                fill="black"
              />
            </svg>
          </div>
          <div id="logo-2" className="logo-header" onClick={() => window.open("https://github.com/Andrixviii")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
            </svg>
          </div>
          <div id="logo-3" className="logo-header" onClick={() => window.open("https://www.linkedin.com/in/muhamad-nopid-andriansyah-595b78268/")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </div>
        </div>

        <div className="nav-container">
              <nav className="nav-bar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#project">Project</a></li>
                </ul>
              </nav>
        </div>

      </header>
    </div>

    {/* area content */}
    <div className="container-flex">

      {/* main area/ right area */}
      <div className="main" id='home'>
        <main>
          <img className="img" src="./img/Waguri Kaoruko.jpeg" alt="..."/>
          <h2>PERSONAL DETAIL</h2>
          <div className="personal-detail">
            <div className="container">
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
              <p>
                Name:
                <br />
                Muhamad Nopid Andriansyah
              </p>
            </div>
            <div className="container">
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
              </svg>
              <p>
                Address:
                <br />
                Bandung City, West Java
              </p>
            </div>
            <div className="container">
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>
              <p>
                Phone Number:
                <br />
                +62 8533-772X-XXX
              </p>
            </div>
            <div className="container">
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>{" "}
              <p>
                Email:
                <br />
                <i>muhamadnopidandriansyah@gmail.com</i>
              </p>
            </div>
          </div>
          <h2>INTERESTS</h2>
          <ul>
            <li>Game</li>
            <li>Reading</li>
            <li>Sport</li>
          </ul>
          <h2>PROGRAMING LANGUAGES</h2>
          <ul>
            <li>Javascript</li>
            <li>C++</li>

          </ul>
        </main>
      </div>

      {/* menu area/left content */}
      <div className="menu-container" >
        <menu className='menu'>
          <h2>EDUCATION</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="right-text">
                <h3>Informatic Engineering</h3>
                <p>
                  Universitas Islam Negeri Sunan Gunung Djati • Sep 2022 - Aprl 2022
                  <br />
                  {/* Here you can provide information about your GPA */}
                </p>
              </div>
              <div className="circle" />
            </div>
            <div className="timeline-item">
              <div className="right-text">
                <h3>Computer and Network Engineering</h3>
                <p>SMK Negeri 1 Kota Bima • Sep 2019 - Aprl 2022</p>
              </div>
              <div className="circle" />
            </div>
          </div>
          <br />
          <h2>EXPERIENCE</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="right-text">
                <h3>Front-End</h3>
                <p>Project • 2023</p>
                <ul>
                  <li>
                    Developed responsive, admin interface and user-friendly web
                    application layanan fasilitas UIN SGD using HTML, CSS, and PHP
                    frameworks (Laravel).
                  </li>
                  <li>
                    Collaborated with back-end developers to ensuring smooth data
                    flow and optimized performance.
                  </li>
                  <li>
                    Created UI elements and enhancing overall development
                    efficiency.
                  </li>
                </ul>
              </div>
              <div className="circle" />
            </div>
            
            <div className="timeline-item">
              <div className="right-text">
                <h3>Front-End</h3>
                <p>Project • 2023</p>
                <ul>
                  <li>
                    Developed todo list interface and user-friendly web
                    application Todo list using HTML, CSS and java
                    frameworks (Spring Boot).
                  </li>
                  <li>
                    Created UI elements and enhancing overall development
                    efficiency.
                  </li>
                </ul>
              </div>
              <div className="circle" />
            </div>
          </div>

        <div className='skill-container'>

          <h2>HARD SKILL</h2>
          <div className="skill">
            <p>Web Development</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Excel</p>
          </div>

          <h2>SOFT SKILL</h2>
          <div className="skill">
            <p>Teamwork</p>
            <p>Porblem Solving</p>
            <p>Time Management</p>
          </div>
        </div>

          <div className='anime-container'>
            <img className='image-anime' src='./img/Raiden-Chibi.png' alt='...'/>
          </div>
          
        </menu>
      </div>
    </div>

    {/* page about me */}
    <div className="container-flex" id='about'>

      <div className="about-me">
       
        <h2>About Me</h2>
          <p>
          “Hi I'm Muhamad Nopid Andriansyah, I'm an early semester student,
          I study at sunan gunung djati islamic university.
          And I am now studying in the informatics engineering study program”
          </p>

        <div className='anime-container'>
          <img className='image-anime2' src='./img/saber.png' alt='...'/>
        </div>

      </div>

    </div>
    
    {/* page project */}
    <div className="container-flex" id='project'> 

      <div className="project-container">
        <section className="projects">
          <h2>My Project</h2>
          <div className="gallery">
            <div className="gallery-item" id="project-1" onClick={() => window.location.href = "https://github.com/Andrixviii/Todolist-java"}>
              <div className="frame">
                <img src="./img/todolist.png" alt="Project 1" />
              </div>
              <div className="project-title">Todo List with Java</div>
            </div>

            <div className="gallery-item" id="project-2" onClick={() => window.location.href = "https://github.com/Andrixviii/Personal_Porotofolio"}>
              <div className="frame">
                <img src="./img/project-2.png" alt="Project 2" />
              </div>
              <div className="project-title">Portofolio</div>
            </div>

            <div className="gallery-item" id="project-3" onClick={() => window.location.href ="https://github.com/Andrixviii/Campus-facilities-service-web-project/tree/FINAL_RILL" }>
              <div className="frame">
                <img src="./img/project-3.jpg" alt="Project 3" />
              </div>
              <div className="project-title">Campus facilities service web</div>
            </div>

            <div className="gallery-item" id="project-4" onClick={() => window.location.href ="" }>
              <div className="frame">
                <img src="./img/folder_13543330.png" alt="Project 3" />
              </div>
            <div className="project-title">Project 4</div>
            </div>
          </div>
        </section>

      </div>

    </div>

    <footer className="container">
      <p>
        © <span id="year">{new Date().getFullYear()} AndriXVII. All Rights Reserved.</span>
      </p>
    </footer>
  </>

  )};
  
export default App;
