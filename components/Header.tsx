import { Button, useColorMode } from "theme-ui"

const Header = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <header>
      <Button
        onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        sx={{
          appearance: "none",
          fontFamily: "inherit",
          fontSize: 1,
          fontWeight: "bold",
          m: 0,
          px: 2,
          py: 2,
          color: "text",
          bg: "muted",
          border: 0,
          borderRadius: 2,
          cursor: "pointer",
        }}
      >
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </header>
  )
}

export default Header
