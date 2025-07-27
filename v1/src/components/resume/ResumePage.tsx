import styles from "./ResumePage.module.css";

function ResumePage() {
  return (
    <main id="resume" className={styles.container}>
      <aside className={styles.meta}>
        <a
          href="https://www.linkedin.com/in/kunleadesokan"
          target="_blank"
          aria-label="Connect with Kunle on LinkedIn, opens a new tab."
          className={`${styles.metaLink} ${styles.linkedin}`}
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
        <a
          href="mailto:hello@kunleadesokan.dev"
          aria-label="Send Kunle a mail"
          className={styles.metaLink}
        >
          <svg
            height="24"
            viewBox="0 59.882 479.058 359.294"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 015.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
        <a
          href="https://kunleadesokan.dev/Resume-Adekunle-Adesokan.pdf"
          aria-label="Download a PDF copy of this resume, opens a new tab."
          className={styles.metaLink}
        >
          <svg
            height="24"
            viewBox="8 8.003 48 47.997"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.283 12.19a19.624 19.624 0 015.434 0 2 2 0 00.567-3.959 23.75 23.75 0 00-6.566 0 2 2 0 00.565 3.959z"
              fill="currentColor"
            ></path>
            <path
              d="M42.91 10.619a2 2 0 00-1.82 3.561C47.819 17.621 52 24.449 52 32c0 11.028-8.972 20-20 20s-20-8.972-20-20c0-7.551 4.181-14.379 10.911-17.819a2 2 0 00-1.821-3.561C13.016 14.747 8 22.939 8 32c0 13.233 10.766 24 24 24 13.233 0 24-10.767 24-24 0-9.061-5.016-17.253-13.09-21.381z"
              fill="currentColor"
            ></path>
            <path
              d="M22.586 36.586a2 2 0 000 2.828l8 8c.39.391.902.586 1.414.586s1.023-.195 1.414-.586l8-8a2 2 0 10-2.828-2.828L34 41.172V18a2 2 0 00-4 0v23.172l-4.586-4.586a2 2 0 00-2.828 0z"
              fill="currentColor"
            ></path>
          </svg>
          Download
        </a>
      </aside>
      <div className={styles.resumeOverview}>
        <section>
          <a href="" className="nav-link">
            kunle.dev
          </a>
          <span>Frankfurt, Germany</span>
          <a href="mailto:hello@kunleadesokan.dev" className="nav-link">
            hello@kunle.dev
          </a>
        </section>
        <section>
          <h3>Core Technologies:</h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>CSS-in-JS</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>GraphQL</li>
            <li>MongoDB</li>
            <li>Java</li>
            <li>Python</li>
            <li>React Native</li>
            <li>Solidity</li>
            <li>MySQL</li>
            <li>Docker</li>
            <li>Spring</li>
            <li>Git/GitHub</li>
          </ul>
        </section>
        <section>
          <h3>Others:</h3>
          <ul>
            <li>Design Systems</li>
            <li>Web3</li>
            <li>E2E Testing</li>
            <li>Performance Optimization</li>
            <li>Software Testing</li>
            <li>SE Optimization</li>
            <li>Build Automation</li>
            <li>Responsive Web Design</li>
            <li>UI/UX Design</li>
            <li>Cloud Computing</li>
            <li>Software Versioning</li>
            <li>Market Research</li>
          </ul>
        </section>
        {/* <div className={styles.resumeOvervi}></div>
        <div className={styles.resumeOvervi}></div> */}
      </div>
      <article>
        <header className={styles.profileSummary}>
          <h1 className={styles.name}>
            Kunle
            <br />
            Adesokan
          </h1>
          <h2>Expert Software Engineer and Product Designer.</h2>
          <p>
            Engineer valued for driving high-performance accessible web
            experiences. I design quality, user-friendly and scalable products
            regardless of stack.
          </p>
        </header>
        <section className={styles.experience}>
          <h3>Experience</h3>
          <p>
            I’ve worked on a handful of web projects over the years, some of
            which were for the following organizations:
          </p>
          <ul className={styles.companies}>
            <li className={styles.company}>
              <header>
                <h4>
                  Shopify <span>Senior Frontend Engineer</span>
                </h4>
                <span className={styles.period}>Apr 2025 - Present</span>
              </header>
              <p>
                Shaping the future of commerce and entrepreneurship – building
                and advocating for inclusive and thoughtful experiences for over
                three million merchants across the globe.
              </p>
              <ul className={styles.points}>
                <li>
                  {" "}
                  Pioneering initiatives around the future of onboarding, signup
                  and developing technical vision for them
                </li>
                <li>
                  {" "}
                  Identified a gap in my team’s deployment workflow and built a
                  solution that reduced the time required for each deployment
                  from over 40 minutes to less than 6 minutes, which restores
                  almost 300 hours of developer productivity every year
                </li>
                <li>
                  {" "}
                  Collaborating with UX designers and researchers to inform the
                  direction of products we craft
                </li>
                <li>
                  {" "}
                  First-hand involvement in early-stage product and UX thinking
                  and rapid prototyping
                </li>
                <li>
                  {" "}
                  Conducting and monitoring several strategic experiments,
                  refining experiences based on resulting metrics and learnings
                </li>
                <li>
                  {" "}
                  Participating and incorporating learnings from real merchant
                  interviews and research sessions
                </li>
                <li>
                  {" "}
                  Identifying gaps around the org-wide frontend infrastructure,
                  drafting proposals and implementing solutions
                </li>
                <li>
                  {" "}
                  Mentoring engineers within and outside my team on best
                  practices, performance and advanced patterns
                </li>
                <li>
                  {" "}
                  Providing guidance around product accessibility and
                  inclusivity across the org
                </li>
                <li>
                  {" "}
                  Built an OAuth 2.0 compliant client-side library for our
                  Identity provider across Shopify
                </li>
              </ul>
              <p className={styles.outro}></p>
            </li>
            <li className={styles.company}>
              <header>
                <h4>
                  Shopify <span>Senior Frontend Engineer</span>
                </h4>
                <span className={styles.period}>Apr 2025 - Present</span>
              </header>
              <p>
                Shaping the future of commerce and entrepreneurship – building
                and advocating for inclusive and thoughtful experiences for over
                three million merchants across the globe.
              </p>
              <ul className={styles.points}>
                <li>
                  {" "}
                  Pioneering initiatives around the future of onboarding, signup
                  and developing technical vision for them
                </li>
                <li>
                  {" "}
                  Identified a gap in my team’s deployment workflow and built a
                  solution that reduced the time required for each deployment
                  from over 40 minutes to less than 6 minutes, which restores
                  almost 300 hours of developer productivity every year
                </li>
                <li>
                  {" "}
                  Collaborating with UX designers and researchers to inform the
                  direction of products we craft
                </li>
                <li>
                  {" "}
                  First-hand involvement in early-stage product and UX thinking
                  and rapid prototyping
                </li>
                <li>
                  {" "}
                  Conducting and monitoring several strategic experiments,
                  refining experiences based on resulting metrics and learnings
                </li>
                <li>
                  {" "}
                  Participating and incorporating learnings from real merchant
                  interviews and research sessions
                </li>
                <li>
                  {" "}
                  Identifying gaps around the org-wide frontend infrastructure,
                  drafting proposals and implementing solutions
                </li>
                <li>
                  {" "}
                  Mentoring engineers within and outside my team on best
                  practices, performance and advanced patterns
                </li>
                <li>
                  {" "}
                  Providing guidance around product accessibility and
                  inclusivity across the org
                </li>
                <li>
                  {" "}
                  Built an OAuth 2.0 compliant client-side library for our
                  Identity provider across Shopify
                </li>
              </ul>
              <p className={styles.outro}></p>
            </li>
          </ul>
        </section>
        <section className={styles.projects}></section>
      </article>
      <div
        id="Announcer"
        role="status"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden="true"
        className="visuallyHidden"
      >
        You just navigated to: Kunle's Résumé
      </div>
    </main>
  );
}

export default ResumePage;
