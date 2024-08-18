import React from "react"
import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import Editor from "./Editor"
import OutputSection from "./OutputSection"

const Layout: React.FC = () => {
  const { layout } = useSelector((state: RootState) => state.layout)

  switch (layout) {
    case "left":
      return (
        <PanelGroup direction="horizontal">
          <Panel>
            <PanelGroup direction="vertical">
              <Panel
                minSize={5}
                className="w-full h-full flex flex-col"
              >
                <h3 className="uppercase font-semibold bg-black text-w px-3">
                  html
                </h3>
                <Editor len="html" />
              </Panel>
              <PanelResizeHandle className="my-px h-[2px] bg-p-3" />
              <Panel
                minSize={5}
                className="w-full h-full flex flex-col"
              >
                <h3 className="uppercase font-semibold bg-black text-w px-3">
                  css
                </h3>
                <Editor len="css" />
              </Panel>
              <PanelResizeHandle className="my-px h-[2px] bg-p-3" />
              <Panel
                minSize={5}
                className="w-full h-full flex flex-col"
              >
                <h3 className="uppercase font-semibold bg-black text-w px-3">
                  javascript
                </h3>
                <Editor len="javascript" />
              </Panel>
            </PanelGroup>
          </Panel>
          <PanelResizeHandle className="mx-1 w-[2px] bg-p-3" />
          <Panel maxSize={75}>
            <div className="w-full h-full flex flex-col">
              <h3 className="uppercase font-semibold bg-black text-w px-3">
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
              <h3 className="uppercase font-semibold bg-black text-w px-3">
                Output
              </h3>
              <OutputSection />
            </div>
          </Panel>
          <PanelResizeHandle className="mx-1 w-[2px] bg-p-3" />
          <Panel>
            <PanelGroup direction="vertical">
              <Panel minSize={5}>
                <div className="w-full h-full flex flex-col">
                  <h3 className="uppercase font-semibold bg-black text-w px-3">
                    html
                  </h3>
                  <Editor len="html" />
                </div>
              </Panel>
              <PanelResizeHandle className="my-px h-[2px] bg-p-3" />
              <Panel minSize={5}>
                <div className="w-full h-full flex flex-col">
                  <h3 className="uppercase font-semibold bg-black text-w px-3">
                    css
                  </h3>
                  <Editor len="css" />
                </div>
              </Panel>
              <PanelResizeHandle className="my-px h-[2px] bg-p-3" />
              <Panel minSize={5}>
                <div className="w-full h-full flex flex-col">
                  <h3 className="uppercase font-semibold bg-black text-w px-3">
                    javascript
                  </h3>
                  <Editor len="javascript" />
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
                <div className="w-full h-full flex flex-col">
                  <h3 className="uppercase font-semibold bg-black text-w px-3">
                    html
                  </h3>
                  <Editor len="html" />
                </div>
              </Panel>
              <PanelResizeHandle className="mx-1 w-[2px] bg-p-3" />
              <Panel minSize={5}>
                <div className="w-full h-full flex flex-col">
                  <h3 className="uppercase font-semibold bg-black text-w px-3">
                    css
                  </h3>
                  <Editor len="css" />
                </div>
              </Panel>
              <PanelResizeHandle className="mx-1 w-[2px] bg-p-3" />
              <Panel minSize={5}>
                <div className="w-full h-full flex flex-col">
                  <h3 className="uppercase font-semibold bg-black text-w px-3">
                    javascript
                  </h3>
                  <Editor len="javascript" />
                </div>
              </Panel>
            </PanelGroup>
          </Panel>
          <PanelResizeHandle className="my-px h-[2px] bg-p-3" />
          <Panel maxSize={75}>
            <div className="w-full h-full flex flex-col">
              <h3 className="uppercase font-semibold bg-black text-w px-3">
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
              <h3 className="uppercase font-semibold bg-black text-w px-3">
                Output
              </h3>
              <OutputSection />
            </div>
          </Panel>
          <PanelResizeHandle className="my-px h-[2px] bg-p-3" />
          <Panel>
            <PanelGroup direction="horizontal">
              <Panel minSize={5}>
                <div className="w-full h-full flex flex-col">
                  <h3 className="uppercase font-semibold bg-black text-w px-3">
                    html
                  </h3>
                  <Editor len="html" />
                </div>
              </Panel>
              <PanelResizeHandle className="mx-1 w-[2px] bg-p-3" />
              <Panel minSize={5}>
                <div className="w-full h-full flex flex-col">
                  <h3 className="uppercase font-semibold bg-black text-w px-3">
                    css
                  </h3>
                  <Editor len="css" />
                </div>
              </Panel>
              <PanelResizeHandle className="mx-1 w-[2px] bg-p-3" />
              <Panel minSize={5}>
                <div className="w-full h-full flex flex-col">
                  <h3 className="uppercase font-semibold bg-black text-w px-3">
                    javascript
                  </h3>
                  <Editor len="javascript" />
                </div>
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      )
  }
}

export default Layout
