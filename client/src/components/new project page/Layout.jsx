import React from "react"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"

// Files
import Editor from "./Editor"
import OutputSection from "./OutputSection"
import { useAppContext } from "../../store/appContext"

const Layout = () => {
  const { layout } = useAppContext()

  switch (layout) {
    case "left":
      return (
        <PanelGroup direction="horizontal">
          <Panel>
            <PanelGroup direction="vertical">
              <Panel
                minSize={5}
                className="w-full h-full flex flex-col pt-5"
              >
                <h3 className="uppercase font-semibold bg-b-1 text-w px-3">
                  html
                </h3>
                <Editor type="html" />
              </Panel>
              <PanelResizeHandle className="my-px h-[2px] bg-b-2" />
              <Panel
                minSize={5}
                className="w-full h-full flex flex-col pt-5"
              >
                <h3 className="uppercase font-semibold bg-b-1 text-w px-3">
                  css
                </h3>
                <Editor type="css" />
              </Panel>
              <PanelResizeHandle className="my-px h-[2px] bg-b-2" />
              <Panel
                minSize={5}
                className="w-full h-full flex flex-col pt-5"
              >
                <h3 className="uppercase font-semibold bg-b-1 text-w px-3">
                  js
                </h3>
                <Editor type="js" />
              </Panel>
            </PanelGroup>
          </Panel>
          <PanelResizeHandle className="mx-1 w-[2px] bg-b-2" />
          <Panel maxSize={75}>
            <div className="w-full h-full flex flex-col">
              <h3 className="uppercase font-semibold bg-b-1 text-w px-3">
                Output
              </h3>
              <OutputSection />
            </div>
          </Panel>
        </PanelGroup>
      )
    case "right":
      return (
        <PanelGroup direction="horizontal">
          <Panel maxSize={75}>
            <div className="w-full h-full flex flex-col">
              <h3 className="uppercase font-semibold bg-b-1 text-w px-3">
                Output
              </h3>
              <OutputSection />
            </div>
          </Panel>
          <PanelResizeHandle className="mx-1 w-[2px] bg-b-2" />
          <Panel>
            <PanelGroup direction="vertical">
              <Panel minSize={5}>
                <div className="w-full h-full flex flex-col pt-5">
                  <h3 className="uppercase font-semibold bg-b-1 text-w px-3">
                    html
                  </h3>
                  <Editor type="html" />
                </div>
              </Panel>
              <PanelResizeHandle className="my-px h-[2px] bg-b-2" />
              <Panel minSize={5}>
                <div className="w-full h-full flex flex-col pt-5">
                  <h3 className="uppercase font-semibold bg-b-1 text-w px-3">
                    css
                  </h3>
                  <Editor type="css" />
                </div>
              </Panel>
              <PanelResizeHandle className="my-px h-[2px] bg-b-2" />
              <Panel minSize={5}>
                <div className="w-full h-full flex flex-col pt-5">
                  <h3 className="uppercase font-semibold bg-b-1 text-w px-3">
                    js
                  </h3>
                  <Editor type="js" />
                </div>
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      )
    case "top":
      return (
        <PanelGroup direction="vertical">
          <Panel>
            <PanelGroup direction="horizontal">
              <Panel minSize={5}>
                <div className="w-full h-full flex flex-col pt-5">
                  <h3 className="uppercase font-semibold bg-b-1 text-w px-3">
                    html
                  </h3>
                  <Editor type="html" />
                </div>
              </Panel>
              <PanelResizeHandle className="mx-1 w-[2px] bg-b-2" />
              <Panel minSize={5}>
                <div className="w-full h-full flex flex-col pt-5">
                  <h3 className="uppercase font-semibold bg-b-1 text-w px-3">
                    css
                  </h3>
                  <Editor type="css" />
                </div>
              </Panel>
              <PanelResizeHandle className="mx-1 w-[2px] bg-b-2" />
              <Panel minSize={5}>
                <div className="w-full h-full flex flex-col pt-5">
                  <h3 className="uppercase font-semibold bg-b-1 text-w px-3">
                    js
                  </h3>
                  <Editor type="js" />
                </div>
              </Panel>
            </PanelGroup>
          </Panel>
          <PanelResizeHandle className="my-px h-[2px] bg-b-2" />
          <Panel maxSize={75}>
            <div className="w-full h-full flex flex-col">
              <h3 className="uppercase font-semibold bg-b-1 text-w px-3">
                Output
              </h3>
              <OutputSection />
            </div>
          </Panel>
        </PanelGroup>
      )
    case "bottom":
      return (
        <PanelGroup direction="vertical">
          <Panel maxSize={75}>
            <div className="w-full h-full flex flex-col">
              <h3 className="uppercase font-semibold bg-b-1 text-w px-3">
                Output
              </h3>
              <OutputSection />
            </div>
          </Panel>
          <PanelResizeHandle className="my-px h-[2px] bg-b-2" />
          <Panel>
            <PanelGroup direction="horizontal">
              <Panel minSize={5}>
                <div className="w-full h-full flex flex-col pt-5">
                  <h3 className="uppercase font-semibold bg-b-1 text-w px-3">
                    html
                  </h3>
                  <Editor type="html" />
                </div>
              </Panel>
              <PanelResizeHandle className="mx-1 w-[2px] bg-b-2" />
              <Panel minSize={5}>
                <div className="w-full h-full flex flex-col pt-5">
                  <h3 className="uppercase font-semibold bg-b-1 text-w px-3">
                    css
                  </h3>
                  <Editor type="css" />
                </div>
              </Panel>
              <PanelResizeHandle className="mx-1 w-[2px] bg-b-2" />
              <Panel minSize={5}>
                <div className="w-full h-full flex flex-col pt-5">
                  <h3 className="uppercase font-semibold bg-b-1 text-w px-3">
                    js
                  </h3>
                  <Editor type="js" />
                </div>
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      )
  }
}

export default Layout
