import React, { useCallback } from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../hooks/useTypedSelector"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"
import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import { ListItem, ListItemText } from "@material-ui/core"
import { setSelectedJob } from "../store/reducers/jobsReducer"

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
}))

interface InavigationProps {
  loading: boolean
  services: any
  title: string
}

export const Navigation: React.FC<InavigationProps> = ({
  loading,
  services,
  title = "",
}: InavigationProps) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const selectedJob = useTypedSelector((state) => state.jobs.selectedJob)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(!mobileOpen)
  }, [mobileOpen])

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {loading || !services ? (
          <Grid container justify="center">
            <CircularProgress />
          </Grid>
        ) : (
          services.map(({ id, jobId, title }: any) => (
            <ListItem
              button
              key={id}
              onClick={() => dispatch(setSelectedJob(id))}
              selected={ id === selectedJob }
            >
              <ListItemText primary={title} />
            </ListItem>
          ))
        )}
      </List>
      <Divider />
    </div>
  )

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={() => document.body}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </>
  )
}
