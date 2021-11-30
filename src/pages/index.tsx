import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import {FC, useState} from "react"
import styles from "styles/Box.module.css"

const IndexPage: FC = () => {
    const [isShown, setIsShown] = useState(false)

    const onClick = () => {
        setIsShown(!isShown)
    }

    return (
        <Layout>
            <SEO title="next starter" />

            <button onClick={onClick}>{isShown ? "Hide" : "Show"}</button>
            {isShown && <div className={styles.box}></div>}
        </Layout>
    )
}

export default IndexPage
