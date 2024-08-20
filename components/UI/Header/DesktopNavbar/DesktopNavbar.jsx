"use client";
import React, { useState, useEffect, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "next/link";
import Image from "next/image";
import { headerLinks } from "@/utlis/headerLinks";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import styled from "@emotion/styled";
import { usePathname } from "next/navigation";

function DesktopNavbar({ showBackgroundColor }) {
  const [showMenu, setShowMenu] = useState(-1);
  const menuRef = useRef(null);
  const pathname = usePathname();
  // state to handle the navbar visibility on scroll
  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to handle the scroll event
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to check if the path matches the current page
  const isActive = (path) => {
    return pathname === path;
  };
  // drop down logic
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(-1);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const showDropdown = (event, index) => {
    event.preventDefault();
    setTimeout(() => {
      setShowMenu(index);
    }, 200); // Delay in milliseconds
  };
  const hideDropdown = (event, index) => {
    event.preventDefault();

    setTimeout(() => {
      setShowMenu(-1);
    }, 200); // Del
  };

  const toggleDropdown = (event, index) => {
    event.preventDefault();
    // setShowMenu(index === showMenu ? -1 : index);
  };

  // render menu items
  const menuItems = headerLinks.map((item, index) => {
    return (
      <div
        className="list-item"
        key={index}
        sx={{ color: "white", display: "block", position: "relative" }}
        onMouseLeave={
          item.subLinks ? (event) => hideDropdown(event, index) : null
        }
        onMouseEnter={
          item.subLinks ? (event) => showDropdown(event, index) : null
        }
      >
        <Link
          className={isActive(item.url) ? "active parent-link" : "parent-link"}
          href={item.url}
          onClick={
            item.subLinks ? (event) => toggleDropdown(event, index) : null
          }
        >
          <Typography
            component="span"
            variant="button"
            align="center"
            sx={{ fontWeight: "400" }}
          >
            {item.label}
          </Typography>
          {item.subLinks && (
            <KeyboardArrowDownRoundedIcon
              className={`${showMenu === index && "arrow-up"} arrow `}
            />
          )}
        </Link>

        {item.subLinks && (
          <div
            className={`${
              showMenu === index ? "block" : "hidden"
            } sublinks-container`}
            sx={{
              position: "absolute",
              left: "-16px",
              width: "250px",
              paddingLeft: 0,
              display: `${showMenu === index ? "block" : "none"} `,
            }}
          >
            <Paper sx={{ background: "white" }} component="div">
              {item.subLinks.map((subLink, subIndex) => (
                <Box component="li" key={subIndex} className="text-left">
                  <Link
                    href={subLink.url}
                    className={
                      isActive(subLink.url) ? "active child-link" : "child-link"
                    }
                  >
                    <Typography
                      className="subLink"
                      component="span"
                      variant="body1"
                      sx={{
                        display: "block",
                        color: "black",
                        py: 2,
                        pr: 4,
                        pl: 4,
                        "&:hover": {
                          color: "var(--material-theme-sys-light-on-surface)",
                        },
                      }}
                    >
                      {subLink.label}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Paper>
          </div>
        )}
      </div>
    );
  });
  return (
    <>
      <AppBarContainer
        scrollposition={scrollPosition}
        position="static"
        showbackgroundcolor={showBackgroundColor}
        sx={{
          display: { xs: "none", lg: "block" },
          background: "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* logo  */}
            <Link href="/">
              <Image
                src={"/logo.png"}
                width={48 * 3}
                height={13 * 3}
                quality={70}
                alt="Logo"
                style={{ objectFit: "cover" }}
              />
            </Link>
            {/* menu */}
            <Box
              component="div"
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                margin: 0,
              }}
            >
              {menuItems}
            </Box>
          </Toolbar>
        </Container>
      </AppBarContainer>
    </>
  );
}
export default DesktopNavbar;
const AppBarContainer = styled(AppBar)`
  box-shadow: none;
  padding: 4px 0;
  transition: transform 0.3s ease-in-out;
  position: ${({ scrollposition }) => {
    if (scrollposition < 300) {
      return "absolute";
    } else if (scrollposition < 600) {
      return "absolute";
    } else {
      return "fixed";
    }
  }};
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;

  background: ${({ scrollposition, showbackgroundcolor }) => {
    if (showbackgroundcolor) {
      return "var(--dark-surface-container-high)";
    } else if (scrollposition < 300) {
      return "none";
    } else if (scrollposition < 600) {
      return "none";
    } else {
      return "var(--dark-surface-container-high)";
    }
  }};

  transform: ${({ scrollposition }) => {
    if (scrollposition < 300) {
      return "translateY(0)";
    } else if (scrollposition < 600) {
      return "translateY(-100%)";
    } else {
      return "translateY(0)";
    }
  }};

  .MuiButtonBase-root:hover {
    border-radius: 50px;
  }

  .list-item {
    padding-left: 16px;
    padding-right: 16px;
    > .parent-link {
      display: flex;
      align-items: center;
      padding: 8px 4px;
      color: var(--white);
    }
    .parent-link.active {
      border-bottom: 2px solid var(--white);
    }
  }

  .sublinks-container {
    li {
      .child-link {
        span {
          color: var(--white);
        }
      }
      .child-link.active {
        span {
          color: var(--material-theme-sys-light-primary-container, #aff66e);
          background: var(--white);
        }
      }
      &:hover {
        span {
          color: var(--material-theme-sys-light-primary);
        }
      }
    }
  }
`;
