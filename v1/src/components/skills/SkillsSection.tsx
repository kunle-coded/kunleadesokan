import React, { RefObject, useEffect, useRef, useState } from "react";
import styles from "./SkillsSection.module.css";
import TechSkills from "../shapes/TechSkills";
import DesignSkills from "../shapes/DesignSkills";
import ToolsSkills from "../shapes/ToolsSkills";
import SoftSkills from "../shapes/SoftSkills";
import OtherSkills from "../shapes/OtherSkills";
import useReveal from "../../lib/hooks/useReveal";
import LinkButton from "../../ui/buttons/LinkButton";

interface SkillsProps {
  skillsSectionRef: RefObject<HTMLDivElement | null>;
}

function SkillsSection({ skillsSectionRef }: SkillsProps) {
  const [currentTab, setCurrentTab] = useState(0);
  const [topPercentage, setTopPercentage] = useState(0);

  const skillSectionRef = useRef<HTMLDivElement>(null);
  const containerTopRef = useRef<HTMLDivElement>(null);

  useReveal(skillSectionRef);

  useEffect(() => {
    if (skillSectionRef.current && containerTopRef.current) {
      const parentHeight =
        skillSectionRef.current.getBoundingClientRect().height;
      const childTopOffset =
        containerTopRef.current.getBoundingClientRect().top -
        skillSectionRef.current.getBoundingClientRect().top;

      const percentage = (childTopOffset / parentHeight) * 100;
      setTopPercentage(percentage);
    }
  }, []);

  useEffect(() => {
    const tabList = document.querySelector('[role="tablist"]');

    if (tabList) {
      const tabs = tabList.querySelectorAll(':scope > [role="tab"]');
      const tabGroup = tabList.parentNode as HTMLElement;
      let tabFocus = 0;

      tabList.addEventListener("keydown", (e) => {
        const event = e as KeyboardEvent;

        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          tabs[tabFocus].setAttribute("tabIndex", "-1");

          if (event.key === "ArrowRight") {
            tabFocus++;
            if (tabFocus >= tabs.length) {
              tabFocus = 0;
            }
          } else if (event.key === "ArrowLeft") {
            tabFocus--;
            if (tabFocus < 0) {
              tabFocus = tabs.length - 1;
            }
          }

          tabList
            .querySelectorAll(':scope > [aria-selected="true"]')
            .forEach((t) => t.setAttribute("aria-selected", "false"));

          tabs[tabFocus].setAttribute("tabIndex", "0");
          (tabs[tabFocus] as HTMLElement).focus();

          tabs[tabFocus].setAttribute("aria-selected", "true");
          tabGroup
            .querySelectorAll(':scope > [role="tabpanel"]')
            .forEach((p) => p.setAttribute("hidden", "true"));

          const selectedPanel = tabGroup.querySelector(
            `#${tabs[tabFocus].getAttribute("aria-controls")}`
          );
          if (selectedPanel) {
            selectedPanel.removeAttribute("hidden");
          }
        }
      });
    }
  }, []);

  function changeTabs(e: React.MouseEvent<HTMLButtonElement>) {
    const targetTab = e.target as HTMLElement;
    const tabList = targetTab.parentNode as HTMLElement;
    const tabGroup = tabList.parentNode as HTMLElement;

    tabList.querySelectorAll(':scope > [aria-selected="true"]').forEach((t) => {
      t.setAttribute("tabIndex", "-1");
      t.setAttribute("aria-selected", "false");
    });

    targetTab.setAttribute("aria-selected", "true");
    targetTab.setAttribute("tabIndex", "0");

    tabGroup
      .querySelectorAll(':scope > [role="tabpanel"]')
      .forEach((p) => p.setAttribute("hidden", "true"));

    const selectedPanel = tabGroup.querySelector(
      `#${targetTab.getAttribute("aria-controls")}`
    );
    if (selectedPanel) {
      selectedPanel.removeAttribute("hidden");
    }
  }

  function handleTabs(event: React.MouseEvent<HTMLElement>) {
    const target = event.target as HTMLElement;
    const tabIndex = target.tabIndex;

    if (tabIndex >= 0) {
      setCurrentTab((current) => (current === tabIndex ? current : tabIndex));
    } else {
      return;
    }
  }

  return (
    <section
      ref={skillsSectionRef}
      data-section="drei"
      className={styles.skillSection}
    >
      <div
        id="skillsSection"
        ref={skillSectionRef}
        className={`section ${styles.skllSctnWrppr}`}
      >
        <div className={styles.tabs}>
          <div className={styles.skllSctnTtlCntnr}>
            <div className={styles.skillsHeading}>
              <h1>
                Skills<span>.</span>
              </h1>
            </div>
          </div>
          <div
            role="tablist"
            aria-label="Skills Tabs"
            className={`${styles.skillsTablist} ${styles.xMandatoryScrolling}`}
            dir="ltr"
          >
            <button
              role="tab"
              aria-selected="true"
              aria-controls="technical-skills"
              id="tab-1"
              tabIndex={0}
              className="nav-link"
              onClick={changeTabs}
            >
              Technical skills
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="design-skills"
              id="tab-2"
              tabIndex={-1}
              className="nav-link"
              onClick={changeTabs}
            >
              Design skills
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="tools-skills"
              id="tab-3"
              tabIndex={-1}
              className="nav-link"
              onClick={changeTabs}
            >
              Tools and technology
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="soft-skills"
              id="tab-4"
              tabIndex={-1}
              className="nav-link"
              onClick={changeTabs}
            >
              Soft skills
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="other-skills"
              id="tab-5"
              tabIndex={-1}
              className="nav-link"
              onClick={changeTabs}
            >
              Other skills
            </button>
          </div>
          <div
            id="technical-skills"
            role="tabpanel"
            tabIndex={0}
            aria-labelledby="tab-1"
            className={styles.skillTabPanel}
          >
            <div className={styles.skllsDtlsLstItmCntnr}>
              <div className={styles.skllsDtlsDesc}>
                <h5>Technical skills</h5>
                <p>
                  I specialize in developing scalable web applications,
                  leveraging modern frameworks and libraries with a strong
                  emphasis on performance, accessibility, and cross-platform
                  compatibility. My expertise extends to building mobile
                  applications, ensuring seamless user experiences across
                  devices.
                </p>
              </div>
              <div className={styles.skllsDtlsLstInfCntnr}>
                <div className={styles.skllsDtlsDescInfo}>
                  <h6>Languages & Technologies</h6>
                  <p>
                    JavaScript, Java, Python, C, React Native, React, Node.js,
                    Express, HTML, CSS, MongoDB, GraphQL, MySQL, AWS S3, Google
                    Cloud
                  </p>
                </div>
                <div className={styles.skllsDtlsDescInfo}>
                  <h6>Specializations</h6>
                  <p>
                    Frontend development, full-stack development, mobile app
                    development, responsive design, API integration
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            id="design-skills"
            role="tabpanel"
            tabIndex={-1}
            aria-labelledby="tab-2"
            className={styles.skillTabPanel}
            hidden
          >
            <div className={styles.skllsDtlsLstItmCntnr}>
              <div className={styles.skllsDtlsDesc}>
                <h5>Design skills</h5>
                <p>
                  I create intuitive, user-centric designs that emphasize
                  functionality, aesthetics, and accessibility. My approach
                  integrates responsive design principles to ensure consistency
                  across devices and platforms, while focusing on usability and
                  visual appeal.
                </p>
              </div>
              <div className={styles.skllsDtlsLstInfCntnr}>
                <div className={styles.skllsDtlsDescInfo}>
                  <h6>Technologies</h6>
                  <p>
                    Figma, Adobe XD, InVision, Sketch, Photoshop, Illustrator
                  </p>
                </div>
                <div className={styles.skllsDtlsDescInfo}>
                  <h6>Specializations</h6>
                  <p>
                    UI/UX design, product design, web design, design thinking,
                    branding, design systems, wireframing, prototyping, visual
                    design
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            id="tools-skills"
            role="tabpanel"
            tabIndex={-1}
            aria-labelledby="tab-3"
            className={styles.skillTabPanel}
            hidden
          >
            <div className={styles.skllsDtlsLstItmCntnr}>
              <div className={styles.skllsDtlsDesc}>
                <h5>Tools and Technologies</h5>
                <p>
                  I am proficient in a variety of tools and technologies that
                  enhance my development workflow. From version control (Git) to
                  cloud services (AWS, Google Cloud) and task automation, I
                  ensure efficiency and reliability in all stages of
                  development.
                </p>
              </div>
              <div className={styles.skllsDtlsLstInfCntnr}>
                <div className={styles.skllsDtlsDescInfo}>
                  <h6>Technologies & Services</h6>
                  <p>
                    Git, GitHub, AWS, Google Cloud, IBM Cloud, Webpack, Docker,
                    Wordpress
                  </p>
                </div>
                <div className={styles.skllsDtlsDescInfo}>
                  <h6>Specializations</h6>
                  <p>
                    Development environments, version control, cloud services,
                    build tools, automation, testing
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            id="soft-skills"
            role="tabpanel"
            tabIndex={-1}
            aria-labelledby="tab-4"
            className={styles.skillTabPanel}
            hidden
          >
            <div className={styles.skllsDtlsLstItmCntnr}>
              <div className={styles.skllsDtlsDesc}>
                <h5>Soft skills</h5>
                <p>
                  My ability to collaborate effectively with teams, communicate
                  complex ideas clearly, and adapt to changing project needs
                  makes me a strong contributor to both technical and creative
                  discussions. I value open communication and a proactive
                  approach to problem-solving.
                </p>
              </div>
              <div className={styles.skllsDtlsLstInfCntnr}>
                <div className={styles.skllsDtlsDescInfo}>
                  <h6>Technologies & Services</h6>
                  <p>
                    <span>Communication Tools: </span>
                    Slack, Microsoft Teams, Zoom
                  </p>
                  <p>
                    <span>Project Management Tools: </span>
                    Trello, Jira, Notion
                  </p>
                  <p>
                    <span>Collaboration Platforms: </span>
                    GitHub, Google Workspace, Miro
                  </p>
                </div>
                <div className={styles.skllsDtlsDescInfo}>
                  <h6>Specializations</h6>
                  <p>
                    <span>Team Collaboration: </span>
                    Cross-functional teamwork, open communication
                  </p>
                  <p>
                    <span>Time Management: </span>
                    Prioritization, task scheduling
                  </p>
                  <p>
                    <span>Adaptability: </span>
                    Handling fast-paced changes, problem-solving
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            id="other-skills"
            role="tabpanel"
            tabIndex={-1}
            aria-labelledby="tab-5"
            className={styles.skillTabPanel}
            hidden
          >
            <div className={styles.skllsDtlsLstItmCntnr}>
              <div className={styles.skllsDtlsDesc}>
                <h5>Other skills</h5>
                <p>
                  I am continuously expanding my skill set to stay current with
                  emerging trends in web and software development. This includes
                  exploring new technologies like Web3, strengthening my
                  knowledge in DevOps practices, and applying agile
                  methodologies in project management.
                </p>
              </div>
              <div className={styles.skllsDtlsLstInfCntnr}>
                <div className={styles.skllsDtlsDescInfo}>
                  <h6>Technologies & Services</h6>
                  <p>
                    <span>Documentation: </span>
                    Markdown, Notion, Confluence
                  </p>
                  <p>
                    <span>Productivity Tools: </span>
                    Notion, Evernote, Google Calendar
                  </p>
                  <p>
                    <span>Research Tools: </span>
                    Google Scholar, LinkedIn, industry news sources
                  </p>
                </div>
                <div className={styles.skllsDtlsDescInfo}>
                  <h6>Specializations</h6>
                  <p>
                    <span>Research and Analysis: </span>
                    Market research, competitor analysis
                  </p>
                  <p>
                    <span>Reporting: </span>
                    Writing clear, structured reports
                  </p>
                  <p>
                    <span>Customer Support: </span>
                    Managing inquiries, resolving issues
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.skllSctnInnrGrdCntnr}>
          <div className={styles.skllSctnInnrSide}>
            <div className={styles.skllSctnInnrSideWrppr}>
              <div className={styles.skllSctnTtlCntnr}>
                <div className={styles.skillsHeading}>
                  <h1>
                    Skills<span>.</span>
                  </h1>
                </div>
              </div>
              <div className={styles.skllSctnGlblCntnr}>
                <div className={styles.skllSctnTbsCntnr}>
                  <ul className={styles.skllTbsLst} onClick={handleTabs}>
                    <li
                      className={`${styles.skllTbsItm} ${
                        currentTab === 0 ? styles.activeTab : ""
                      }`}
                    >
                      <button role="button" tabIndex={0}>
                        Technical skills
                      </button>
                    </li>
                    <li
                      className={`${styles.skllTbsItm} ${
                        currentTab === 1 ? styles.activeTab : ""
                      }`}
                    >
                      <button role="button" tabIndex={1}>
                        Design skills
                      </button>
                    </li>
                    <li
                      className={`${styles.skllTbsItm} ${
                        currentTab === 2 ? styles.activeTab : ""
                      }`}
                    >
                      <button role="button" tabIndex={2}>
                        Tools and technology
                      </button>
                    </li>
                    <li
                      className={`${styles.skllTbsItm} ${
                        currentTab === 3 ? styles.activeTab : ""
                      }`}
                    >
                      <button role="button" tabIndex={3}>
                        Soft skills
                      </button>
                    </li>
                    <li
                      className={`${styles.skllTbsItm} ${
                        currentTab === 4 ? styles.activeTab : ""
                      }`}
                    >
                      <button role="button" tabIndex={4}>
                        Other skills
                      </button>
                    </li>
                  </ul>
                  <div className={styles.skllSctnCta}>
                    <LinkButton label="My Resume" link="/resume" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.skllSctnInnrLne}>
            <div className={styles.skllTmLne}></div>
            <div
              className={`${styles.skllTmLnePoint} ${
                currentTab === 0
                  ? styles.activeTmLnePoint
                  : styles.inActiveTmLnePoint
              }`}
              style={
                currentTab === 0
                  ? ({
                      "--top-percentage": `${topPercentage}%` as string,
                    } as React.CSSProperties)
                  : {}
              }
            ></div>
            <div
              className={`${styles.skllTmLnePoint} ${
                currentTab === 1
                  ? styles.activeTmLnePoint
                  : currentTab > 1
                  ? styles.inActiveTmLnePoint
                  : ""
              }`}
              style={
                currentTab === 1
                  ? ({
                      "--top-percentage": `${topPercentage}%` as string,
                    } as React.CSSProperties)
                  : {}
              }
            ></div>
            <div
              className={`${styles.skllTmLnePoint} ${
                currentTab === 2
                  ? styles.activeTmLnePoint
                  : currentTab > 2
                  ? styles.inActiveTmLnePoint
                  : ""
              }`}
              style={
                currentTab === 2
                  ? ({
                      "--top-percentage": `${topPercentage}%` as string,
                    } as React.CSSProperties)
                  : {}
              }
            ></div>
            <div
              className={`${styles.skllTmLnePoint} ${
                currentTab === 3
                  ? styles.activeTmLnePoint
                  : currentTab > 3
                  ? styles.inActiveTmLnePoint
                  : ""
              }`}
              style={
                currentTab === 3
                  ? ({
                      "--top-percentage": `${topPercentage}%` as string,
                    } as React.CSSProperties)
                  : {}
              }
            ></div>
            <div
              className={`${styles.skllTmLnePoint} ${
                currentTab === 4
                  ? styles.activeTmLnePoint
                  : currentTab > 4
                  ? styles.inActiveTmLnePoint
                  : ""
              }`}
              style={
                currentTab === 4
                  ? ({
                      "--top-percentage": `${topPercentage}%` as string,
                    } as React.CSSProperties)
                  : {}
              }
            ></div>
          </div>
          <div className={styles.skllSctnInnrMain}>
            <div className={styles.skllSctnInnrMainWrppr}>
              <div
                aria-label="spacer"
                aria-hidden
                className={styles.skllSctnTtlCntnr}
              ></div>
              <div ref={containerTopRef} className={styles.skllSctnGlblCntnr}>
                <div className={styles.skllSctnDtlsCntnr}>
                  <div className={styles.skllSctnDtls}>
                    <div className={styles.skllSctnDtlsWrppr}>
                      <ul className={styles.skllsDtlsLst}>
                        <li
                          className={`${styles.skllsDtlsLstItm} ${
                            currentTab === 0
                              ? styles.activeLstItm
                              : currentTab > 0
                              ? styles.inActiveLstItm
                              : ""
                          }`}
                        >
                          <div className={styles.skllsDtlsLstItmCntnr}>
                            <div className={styles.skllsDtlsDesc}>
                              <h5>Technical skills</h5>
                              <p>
                                I specialize in developing scalable web
                                applications, leveraging modern frameworks and
                                libraries with a strong emphasis on performance,
                                accessibility, and cross-platform compatibility.
                                My expertise extends to building mobile
                                applications, ensuring seamless user experiences
                                across devices.
                              </p>
                            </div>
                            <div className={styles.skllsDtlsLstInfCntnr}>
                              <div className={styles.skllsDtlsDescInfo}>
                                <h6>Languages & Technologies</h6>
                                <p>
                                  JavaScript, Java, Python, C, React Native,
                                  React, Node.js, Express, HTML, CSS, MongoDB,
                                  GraphQL, MySQL, AWS S3, Google Cloud
                                </p>
                              </div>
                              <div className={styles.skllsDtlsDescInfo}>
                                <h6>Specializations</h6>
                                <p>
                                  Frontend development, full-stack development,
                                  mobile app development, responsive design, API
                                  integration
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          className={`${styles.skllsDtlsLstItm} ${
                            currentTab === 1
                              ? styles.activeLstItm
                              : currentTab > 1
                              ? styles.inActiveLstItm
                              : ""
                          }`}
                        >
                          <div className={styles.skllsDtlsLstItmCntnr}>
                            <div className={styles.skllsDtlsDesc}>
                              <h5>Design skills</h5>
                              <p>
                                I create intuitive, user-centric designs that
                                emphasize functionality, aesthetics, and
                                accessibility. My approach integrates responsive
                                design principles to ensure consistency across
                                devices and platforms, while focusing on
                                usability and visual appeal.
                              </p>
                            </div>
                            <div className={styles.skllsDtlsLstInfCntnr}>
                              <div className={styles.skllsDtlsDescInfo}>
                                <h6>Technologies</h6>
                                <p>
                                  Figma, Adobe XD, InVision, Sketch, Photoshop,
                                  Illustrator
                                </p>
                              </div>
                              <div className={styles.skllsDtlsDescInfo}>
                                <h6>Specializations</h6>
                                <p>
                                  UI/UX design, product design, web design,
                                  design thinking, branding, design systems,
                                  wireframing, prototyping, visual design
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          className={`${styles.skllsDtlsLstItm} ${
                            currentTab === 2
                              ? styles.activeLstItm
                              : currentTab > 2
                              ? styles.inActiveLstItm
                              : ""
                          }`}
                        >
                          <div className={styles.skllsDtlsLstItmCntnr}>
                            <div className={styles.skllsDtlsDesc}>
                              <h5>Tools and Technologies</h5>
                              <p>
                                I am proficient in a variety of tools and
                                technologies that enhance my development
                                workflow. From version control (Git) to cloud
                                services (AWS, Google Cloud) and task
                                automation, I ensure efficiency and reliability
                                in all stages of development.
                              </p>
                            </div>
                            <div className={styles.skllsDtlsLstInfCntnr}>
                              <div className={styles.skllsDtlsDescInfo}>
                                <h6>Technologies & Services</h6>
                                <p>
                                  Git, GitHub, AWS, Google Cloud, IBM Cloud,
                                  Webpack, Docker, Wordpress
                                </p>
                              </div>
                              <div className={styles.skllsDtlsDescInfo}>
                                <h6>Specializations</h6>
                                <p>
                                  Development environments, version control,
                                  cloud services, build tools, automation,
                                  testing
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          className={`${styles.skllsDtlsLstItm} ${
                            currentTab === 3
                              ? styles.activeLstItm
                              : currentTab > 3
                              ? styles.inActiveLstItm
                              : ""
                          }`}
                        >
                          <div className={styles.skllsDtlsLstItmCntnr}>
                            <div className={styles.skllsDtlsDesc}>
                              <h5>Soft skills</h5>
                              <p>
                                My ability to collaborate effectively with
                                teams, communicate complex ideas clearly, and
                                adapt to changing project needs makes me a
                                strong contributor to both technical and
                                creative discussions. I value open communication
                                and a proactive approach to problem-solving.
                              </p>
                            </div>
                            <div className={styles.skllsDtlsLstInfCntnr}>
                              <div className={styles.skllsDtlsDescInfo}>
                                <h6>Technologies & Services</h6>
                                <p>
                                  <span>Communication Tools: </span>
                                  Slack, Microsoft Teams, Zoom
                                </p>
                                <p>
                                  <span>Project Management Tools: </span>
                                  Trello, Jira, Notion
                                </p>
                                <p>
                                  <span>Collaboration Platforms: </span>
                                  GitHub, Google Workspace, Miro
                                </p>
                              </div>
                              <div className={styles.skllsDtlsDescInfo}>
                                <h6>Specializations</h6>
                                <p>
                                  <span>Team Collaboration: </span>
                                  Cross-functional teamwork, open communication
                                </p>
                                <p>
                                  <span>Time Management: </span>
                                  Prioritization, task scheduling
                                </p>
                                <p>
                                  <span>Adaptability: </span>
                                  Handling fast-paced changes, problem-solving
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          className={`${styles.skllsDtlsLstItm} ${
                            currentTab === 4
                              ? styles.activeLstItm
                              : currentTab > 4
                              ? styles.inActiveLstItm
                              : ""
                          }`}
                        >
                          <div className={styles.skllsDtlsLstItmCntnr}>
                            <div className={styles.skllsDtlsDesc}>
                              <h5>Other skills</h5>
                              <p>
                                I am continuously expanding my skill set to stay
                                current with emerging trends in web and software
                                development. This includes exploring new
                                technologies like Web3, strengthening my
                                knowledge in DevOps practices, and applying
                                agile methodologies in project management.
                              </p>
                            </div>
                            <div className={styles.skllsDtlsLstInfCntnr}>
                              <div className={styles.skllsDtlsDescInfo}>
                                <h6>Technologies & Services</h6>
                                <p>
                                  <span>Documentation: </span>
                                  Markdown, Notion, Confluence
                                </p>
                                <p>
                                  <span>Productivity Tools: </span>
                                  Notion, Evernote, Google Calendar
                                </p>
                                <p>
                                  <span>Research Tools: </span>
                                  Google Scholar, LinkedIn, industry news
                                  sources
                                </p>
                              </div>
                              <div className={styles.skllsDtlsDescInfo}>
                                <h6>Specializations</h6>
                                <p>
                                  <span>Research and Analysis: </span>
                                  Market research, competitor analysis
                                </p>
                                <p>
                                  <span>Reporting: </span>
                                  Writing clear, structured reports
                                </p>
                                <p>
                                  <span>Customer Support: </span>
                                  Managing inquiries, resolving issues
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.skllSctnShp}>
                    <div className={styles.skllSctnShpsWrppr}>
                      <ul className={styles.skllsShpsLst}>
                        <li
                          className={styles.skllsShpsLstItm}
                          style={
                            currentTab === 0
                              ? {
                                  opacity: "1",
                                  transform: "translate(0, 5.5rem)",
                                }
                              : {}
                          }
                        >
                          <div className={styles.skllsShpsCntnr}>
                            <TechSkills />
                          </div>
                        </li>

                        <li
                          className={styles.skllsShpsLstItm}
                          style={
                            currentTab === 1
                              ? {
                                  opacity: "1",
                                  transform: "translate(0, 5.5rem)",
                                }
                              : {}
                          }
                        >
                          <div className={styles.skllsShpsCntnr}>
                            <DesignSkills />
                          </div>
                        </li>
                        <li
                          className={styles.skllsShpsLstItm}
                          style={
                            currentTab === 2
                              ? {
                                  opacity: "1",
                                  transform: "translate(0, 5.5rem)",
                                }
                              : {}
                          }
                        >
                          <div className={styles.skllsShpsCntnr}>
                            <ToolsSkills />
                          </div>
                        </li>
                        <li
                          className={styles.skllsShpsLstItm}
                          style={
                            currentTab === 3
                              ? {
                                  opacity: "1",
                                  transform: "translate(0, 7.5rem)",
                                }
                              : {}
                          }
                        >
                          <div className={styles.skllsShpsCntnr}>
                            <SoftSkills />
                          </div>
                        </li>
                        <li
                          className={styles.skllsShpsLstItm}
                          style={
                            currentTab === 4
                              ? {
                                  opacity: "1",
                                  transform: "translate(0, 7.5rem)",
                                }
                              : {}
                          }
                        >
                          <div className={styles.skllsShpsCntnr}>
                            <OtherSkills />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
