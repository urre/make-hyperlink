import { Analytics } from "@vercel/analytics/react"
import Prism from "prismjs"
import React from "react"
import A11y from "./components/A11y"
import Analytic from "./components/Analytic"
import CloseIcon from "./components/CloseIcon"
import Copy from "./components/Copy"
import Download from "./components/Download"
import { Header } from "./components/Header"
import QueryString from "./components/QueryString"
import ReferrerPolicy from "./components/ReferrerPolicy"
import Rel from "./components/Rel"
import Target from "./components/Target"
import { notes } from "./constants"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: "light",
      sidebar: false,
      appName: "Make a Hyperlink",
      link: {
        text: "This is a hyperlink, one of the pillars of the internet",
        href: "https://make-hyperlink.com",
        class: "",
        target: false,
        jsx: false,
        download: false,
        rel: false,
        hreflang: false,
        type: false,
        media: false,
        ping: false,
        referrerpolicy: false,
        querystring: false,
        querystring_ref: false,
        querystring_identifier: false,
        utm: false,
        utm_source: false,
        utm_medium: false,
        utm_campaign: false,
        utm_term: false,
        utm_content: false,
        tabindex: false,
        accesskey: false,
        title: false,
        arialabel: false,
        ariadescribedby: false,
        arialabelledby: false,
      },
    }
  }

  componentDidMount() {
    Prism.highlightAll()
  }

  componentDidUpdate() {
    Prism.highlightAll()
  }

  getTagType = (attributeName) => {
    return "a"
  }

  getLinkURLAttribute = () => {
    return "href"
  }

  createMarkup = (useHTML) => {
    const link = this.state.link
    const htmlAttributes = Object.keys(this.state.link).filter(
      (value, index, array) =>
        value !== "text" &&
        !value.startsWith("utm") &&
        !value.startsWith("querystring")
    )

    const htmlAttributeValues = htmlAttributes
      .map((value) => {
        if (
          value === "href" &&
          this.state.link["utm"] &&
          !this.state.link["querystring"]
        ) {
          return `${this.getLinkURLAttribute()}="${this.state.link["href"]}?${
            this.state.link["utm"]
          }"`
        } else if (value === "href" && this.state.link["querystring"]) {
          if (this.state.link["utm"]) {
            return `${this.getLinkURLAttribute()}="${this.state.link["href"]}?${
              this.state.link["querystring_ref"]
            }=${this.state.link["querystring_identifier"]}&${
              this.state.link["utm"]
            }"`
          } else {
            return `${this.getLinkURLAttribute()}="${this.state.link["href"]}?${
              this.state.link["querystring_ref"]
            }=${this.state.link["querystring_identifier"]}"`
          }
        } else if (this.state.link[value] === true) {
          return `\n${value}`
        } else {
          return this.state.link[value]
            ? `${value}="${this.state.link[value]}"`
            : ""
        }
      })
      .join(" ")
      .trim()

    if (!useHTML) {
      return `<${this.getTagType()} ${htmlAttributeValues.replace(
        "aria",
        "aria-"
      )}>${link.text}</${this.getTagType()}>`
    }

    if (useHTML) {
      return {
        __html: `<a ${htmlAttributeValues}>${link.text}</a>`,
      }
    }
  }

  onChange = (event) => {
    this.setAttribute(event.currentTarget.id, event.currentTarget.value)
  }

  setAttribute = (attribute, option = false) => {
    const { link } = { ...this.state }
    const currentState = link
    currentState[attribute] = option
    this.setState({ link: currentState })
  }

  appendUTM = () => {
    const { link } = { ...this.state }
    const currentState = link

    const utmAttributes = Object.keys(this.state.link).filter(
      (value, index, array) =>
        value.startsWith("utm_") && this.state.link[value]
    )

    const utmParams = utmAttributes
      .map((value) => this.state.link[value])
      .join("&")

    currentState["utm"] = utmParams

    this.setState({ link: currentState })
  }

  appendQueryString = (append, ref, identifier) => {
    const { link } = { ...this.state }
    const currentState = link
    currentState["querystring"] = append ? true : false
    currentState["querystring_ref"] = ref
    currentState["querystring_identifier"] = identifier

    if (identifier !== undefined) {
      this.setState({
        link: currentState,
      })
    }
  }

  displayNotes = () => {
    let html = ""

    for (const [key, value] of Object.entries(this.state.link)) {
      if (
        value !== false &&
        value !== undefined &&
        notes[key] &&
        !key.includes("_")
      ) {
        html += `<div class="alertbox"><span>${key
          .replace("aria", "aria-")
          .replace("querystring", "query string")}</span>${notes[key]}</div>`
      }
    }

    return {
      __html: html,
    }
  }

  downloadTxtFile = () => {
    const theHTML = this.createMarkup(true)
    const element = document.createElement("a")

    const file = new Blob([theHTML.__html], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = "myFile.html"
    document.body.appendChild(element) // Required for this to work in FireFox
    element.click()
  }

  toggleSidebar = () => {
    this.setState((prevState) => ({
      sidebar: !prevState.sidebar,
    }))
  }

  render() {
    return (
      <>
        <Analytics />
        <Header
          appName={this.state.appName}
          toggleSidebar={this.toggleSidebar}
        />
        <main>
          <aside
            className={`aside ${this.state.sidebar ? "aside-active" : null}`}
          >
            <div className="aside-inner">
              <ul>
                <li>
                  <label htmlFor="href">
                    <svg
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      style={{ marginRight: ".5rem" }}
                    >
                      <path
                        d="M4.5 5.5V5a.5.5 0 00-.5.5h.5zm0 1l.354.354L5 6.707V6.5h-.5zm-1.707.293l-.354.353.354-.353zM6.5 13H7v-.207l-.146-.147L6.5 13zm-1-1H5v.207l.146.147L5.5 12zm0-1.5H6v-.207l-.146-.147-.354.354zm-1-1H4v.207l.146.147L4.5 9.5zm0-1V8a.5.5 0 00-.5.5h.5zM9 .5v2h1v-2H9zM8.5 3h-1v1h1V3zm-3 2h-1v1h1V5zM4 5.5v1h1v-1H4zm.146.646l-.292.293.707.707.293-.292-.708-.708zm-1 .293L1.354 4.646l-.708.708L2.44 7.146l.707-.707zM6 4.5a.5.5 0 01-.5.5v1A1.5 1.5 0 007 4.5H6zM7.5 3A1.5 1.5 0 006 4.5h1a.5.5 0 01.5-.5V3zM3.854 6.44a.5.5 0 01-.708 0l-.707.706a1.5 1.5 0 002.122 0l-.707-.707zM9 2.5a.5.5 0 01-.5.5v1A1.5 1.5 0 0010 2.5H9zm-2 12V13H6v1.5h1zm-.146-1.854l-1-1-.708.708 1 1 .708-.708zM6 12v-1.5H5V12h1zm-.146-1.854l-1-1-.708.708 1 1 .708-.708zM5 9.5v-1H4v1h1zM4.5 9h4V8h-4v1zm4.5.5v.667h1V9.5H9zm1.833 2.5H13.5v-1h-2.667v1zM10 11.167c0 .46.373.833.833.833v-1c.092 0 .167.075.167.167h-1zM9.833 11c.092 0 .167.075.167.167h1C11 10.522 10.478 10 9.833 10v1zM9 10.167c0 .46.373.833.833.833v-1c.092 0 .167.075.167.167H9zM8.5 9a.5.5 0 01.5.5h1A1.5 1.5 0 008.5 8v1zm-1 5A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    URL
                  </label>
                  <input
                    type="text"
                    id="href"
                    defaultValue={this.state.link.href}
                    onChange={this.onChange}
                    autoFocus
                  />
                  <p>
                    Contains a URL or a URL fragment that the hyperlink points
                    to. URLs are not restricted to Web (HTTP)-based documents,
                    but can use any protocol supported by the browser. For
                    example, file:, ftp:, and mailto: work in most browsers.
                    When linking a URL, consider users who must speak it out
                    loud and who must listen to a screen reader announce it.{" "}
                  </p>
                </li>
                <li>
                  <label htmlFor="text">
                    <svg
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      style={{ marginRight: ".5rem" }}
                    >
                      <path
                        d="M7.5 14V1.5M1.5 5V1.5h12V5m-10 8.5H11"
                        stroke="currentColor"
                      ></path>
                    </svg>
                    Link text
                  </label>
                  <textarea
                    type="text"
                    id="text"
                    defaultValue={this.state.link.text}
                    onChange={this.onChange}
                  />
                  <p>
                    Link text is the clickable word or phrase in a hyperlink.
                    When link text clearly conveys a hyperlink's target, both
                    users and search engines can more easily understand your
                    content and how it relates to other pages.
                  </p>
                </li>
                <li>
                  <label htmlFor="class">
                    <svg
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      style={{ marginRight: ".5rem" }}
                    >
                      <path
                        d="M5 3.5h6.5v3M7 6.5h4.5m0 0v3l-3 1-3-1V8M1.5.5h14l-1 12-6 2-6-2-1-12z"
                        stroke="currentColor"
                      ></path>
                    </svg>
                    CSS Class
                  </label>
                  <input
                    type="text"
                    id="class"
                    defaultValue={this.state.link.class}
                    onChange={this.onChange}
                  />
                  <p>
                    The class selector selects elements with a specific class
                    attribute. Separate classes with space.
                  </p>
                </li>
              </ul>
              <Target useAttribute={this.setAttribute} />
              <Download useAttribute={this.setAttribute} />
              <QueryString
                useAttribute={this.setAttribute}
                appendQueryString={this.appendQueryString}
              />
              <Analytic
                useAttribute={this.setAttribute}
                appendUTM={this.appendUTM}
              />
              <Rel useAttribute={this.setAttribute} />
              <ReferrerPolicy useAttribute={this.setAttribute} />
              <A11y useAttribute={this.setAttribute} />
            </div>
          </aside>
          <section>
            <div className="main-html-header">
              <h3 style={{ marginTop: 0 }}>HTML Code </h3>
            </div>

            <header className="code-header">
              <div className="code-header-control">
                <span></span>
                <span></span>
                <span></span>
                <small>HTML</small>
              </div>

              <div style={{ display: "flex" }}>
                <Copy text={this.createMarkup(false)} />
                <button
                  className="button button-tiny button-link"
                  onClick={(e) => this.downloadTxtFile(e)}
                >
                  <svg
                    style={{ marginRight: ".5rem" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V9l-7-7z" />
                    <path d="M13 3v6h6" />
                  </svg>
                  Export HTML
                </button>
              </div>
            </header>
            <pre className="language-markup" ref={this.copyBoxRef}>
              <code>{this.createMarkup(false)}</code>
            </pre>

            <div className="status">
              <h3>Output</h3>
              <div style={{ justifySelf: "end" }}></div>
            </div>

            <div className="output">
              <div dangerouslySetInnerHTML={this.createMarkup(true)} />
            </div>

            <h3>Notes</h3>
            <span dangerouslySetInnerHTML={this.displayNotes()} />
          </section>
        </main>
      </>
    )
  }
}

export default App
