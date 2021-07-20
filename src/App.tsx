import { createStyles, makeStyles, Theme } from "@material-ui/core"
import React from "react"
import Emps from "./components/Emps/Emps"
import Jobs from "./components/Jobs/Jobs"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
)

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Jobs />
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <Emps />
      </main>
    </div>
  )
}

export default App
