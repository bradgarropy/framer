import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import {FC, useState} from "react"

const IndexPage: FC = () => {
    const [isShown, setIsShown] = useState(true)

    const onClick = () => {
        setIsShown(!isShown)
    }

    return (
        <Layout>
            <SEO title="next starter" />

            <button onClick={onClick}>{isShown ? "Hide" : "Show"}</button>
            {isShown && <div className="box"></div>}
        </Layout>
    )
}

export default IndexPage
