import useLocalStorage from "./localStorage";
import "./theme.css";

const LightDarkMode = () => {

    const [theme, setTheme] = useLocalStorage("theme", "dark");

    const handleToggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    console.log(theme)

    return (
        <section className="light-dark-mode" data-theme={theme}>
            <div className="container">
                <p>Hello world!</p>
                <button onClick={handleToggleTheme}>Change Theme</button>
            </div>
        </section>
    )
}

export default LightDarkMode