import { Box, Button, Link, useColorMode } from "theme-ui"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ColorButton = ({ mode, ...props }) => (
  <Button
    {...props}
    title="Cycle Color Mode"
    sx={{
      display: "inline-block",
      appearance: "none",
      bg: "transparent",
      color: "inherit",
      p: 1,
      m: 0,
      border: 0,
      borderRadius: 9999,
      ":hover,:focus": {
        color: "primary",
        boxShadow: "0 0 0 3px",
        outline: "none",
      },
    }}
  >
    <svg
      viewBox="0 0 32 32"
      width="24"
      height="24"
      fill="currentcolor"
      style={{ display: "block" }}
    >
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="none"
        stroke="currentcolor"
        strokeWidth="4"
      />
      <path
        d={`
          M 16 0
          A 16 16 0 0 0 16 32
          z
        `}
      />
    </svg>
  </Button>
)

const Header = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <>
      <Link
        href="/"
        sx={{
          variant: "styles.navlink",
          p: 0,
          color: "text",
          textDecoration: "none",
        }}
      >
        Home
      </Link>
      <Box sx={{ mx: "auto" }} />
      <ColorButton
        mode={colorMode}
        onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
      />
    </>
  )
}

export default Header
