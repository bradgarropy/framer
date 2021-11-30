import {FC} from "react"

import styles from "./Layout.module.css"

const Layout: FC = ({children}) => {
    return <div className={styles.layout}>{children}</div>
}

export default Layout
