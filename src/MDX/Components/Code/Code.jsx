import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./Code.module.scss";
import { Icons } from "../../../../public/Icons";
import Copy from "../../../../public/Icons/Copy";

export default function Code({ children,type }) {
  function copyToClipboard() {
    navigator.clipboard.writeText(children);
  }

  return (
    <div className={styles.container}>
      <SyntaxHighlighter language="javascript" wrapLines={true} style={theme}>
        {children}
      </SyntaxHighlighter>
      <div className={styles.copyButtonMain}>
      <div>{type==="response" && "Response:"}{type ==="request" &&  "Example Request"}</div>
      <button className={styles.copyButton} onClick={copyToClipboard}>
        {/* <Icons.Models fill="var(--primary)" /> */}
        <Copy size={20} fill="var(--primary)"/>
      </button>
      </div>
    </div>
  );
}
