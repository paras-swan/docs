"use client";

import { MDXRemote } from "next-mdx-remote";
import { components } from "./Components";

export default function MDX({ mdxSource }) {
  return <MDXRemote {...mdxSource} components={components} />;
}
