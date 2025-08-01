import React from "react"
import { Meta } from "@storybook/nextjs-vite"
import Header from "./Header"

export default {
  title: "Components/Layout/Header",
  component: Header,
} as Meta<typeof Header>

export const Generated = () => {
  return <Header />
}
