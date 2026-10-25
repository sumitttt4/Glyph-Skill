"use client";
import { useState } from "react";
import { FileCode2, Folder } from "lucide-react";
import { CopyCode } from "./controls";
export function FileExplorer({
  files,
}: {
  files: { name: string; text: string }[];
}) {
  const [selected, setSelected] = useState(files[0]?.name);
  const file = files.find((x) => x.name === selected);
  return (
    <div className="file-explorer">
      <div className="file-explorer-title">
        <Folder size={15} /> skills/glyph <span>{files.length} files</span>
      </div>
      <div className="file-explorer-grid">
        <div className="file-list" role="group" aria-label="Skill files">
          {files.map((f) => (
            <button
              key={f.name}
              aria-label={f.name}
              aria-pressed={selected === f.name}
              onClick={() => setSelected(f.name)}
            >
              <FileCode2 size={14} />
              <span>{f.name.split("/").pop()}</span>
            </button>
          ))}
        </div>
        <div className="file-content">
          {file ? (
            <CopyCode key={file.name} label={file.name} text={file.text} />
          ) : (
            <p>No source files available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
