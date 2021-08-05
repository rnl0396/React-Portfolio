import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
        <div>
            <h1 class="title">Robert Neil Lemus</h1>
            <nav class="menu">
                <ul>
                    <li><a href="#About">About Me</a></li>
                    <li><a href="#Work">Work</a></li>
                    <li><a href="#Resume">Resume</a></li>
                    <li><a href="#Contact">Contact Me</a></li>
                </ul>
            </nav>
        </div>

        <Section class="subsection">
            <h2 class="subheader">Web Developer</h2>
        </Section>

        <Main>
            <div>
              <Section class="About-Section">
                <h1 class="About-Title"><a name="About"></a>About Me</h1>
                <p class="About-Text">I am currently a coordinator for the Corporate and External Affairs team at
                        NBCUniversal Telemundo Enterprises. My goal is to continue developing my skills and knowledge
                        in web developing and become well versed in full-stack engineering so that I may seek a role solely dedicated to this. With my
                        current experience at NBCUniversal Telemundo, I have gained a passion for
                        storytelling through UI experiences and being able to showcase our work on our network website. My current role has allowed me the opportunity to use the Bento platform to design and modify several of NBCUniversal Telemundo's CSR pages. Please find my work below. </p>
              </Section>

              <figure><img src="\Images\Headshot.img" alt="Rob Lemus' Headshot"></figure>

            </div>
    
            <Section class="page-section">
                <h1 class="Work-Header"><a name="Work"></a>Work</h1>
                
                <h3 class="flex-container-Single" id="Block-1"><a href="https://rnl0396.github.io/prework-about-me/">
                    About Me Introduction Page - HTML / CSS</a>
                </h3>

                <h3 class="flex-container-1" id="Block-2"><a href="https://rnl0396.github.io/Homework-1-Code-Refactor/">
                    Code Refactor Assignment on HTML/CSS - University of Miami Bootcamp</a>
                </h3>
    
                <h3 class="flex-container-1" id="Block-3"><a href="https://rnl0396.github.io/Password-Generator/">
                    Password Generator Assignment - University of Miami Bootcamp</a>
                </h3>
    
                <h3 class="flex-container-1" id="Block-4"><a href="https://rnl0396.github.io/Day-Planner/">
                    Day Planner Assignment - University of Miami Bootcamp</a>
                </h3>
    
                <h3 class="flex-container-1" id="Block-5"><a href="https://jlarrazabal.github.io/movies-watchlist/">
                    Project 1 "Personal Film Review Hub" - University of Miami Bootcamp</a>
                </h3>
    
            </Section>
            
            <section>
                <h1 class="Resume-Header"><a name="Resume"></a>Resume</h1>
                <iframe src="Images\ROBERT_LEMUS_RESUME_March2021.pdf"></iframe>
            </section>
    
            <aside>
                <h2 class="Contact-Me-Header"><a name="Contact"></a>Contact Me</h2>
                    
                <ul class="Contact-Info">
                    <li class="Contact-Info"><a href="tel:305-499-0060">305.499.0060</a></li>
                    <li class="Contact-Info"><a href="mailto:RNL0396@gmail.com">RNL0396@gmail.com</a></li>
                    <li class="Contact-Info"><a href="https://github.com/rnl0396">Git Hub</a></li>
                    <li class="Contact-Info"><a href="https://www.linkedin.com/in/robertnlemus/">LinkedIn</a></li>
                </ul>
                
            
            </aside>

        </div>

        <footer>Thank you for visiting!</footer>

    </div>
  );
}

export default App;
