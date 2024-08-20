"use client";
import React from "react";
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import styled from "@emotion/styled";
export default function Header({ showBackgroundColor }) {
  return (
    <>
      <DesktopNavbar showBackgroundColor={showBackgroundColor} />
      <MobileNavbar />
    </>
  );
}
