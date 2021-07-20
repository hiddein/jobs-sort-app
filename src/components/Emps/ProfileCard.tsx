import React from "react"
import Avatar from "@material-ui/core/Avatar"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "4px 24px",
  },
  avatar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

interface ICardProps {
    src: string,
    title: string,
    subSpecialties: string,
}

export const ProfileCard: React.FC<ICardProps> = ({ src, title, subSpecialties }:ICardProps) => {
  const classes = useStyles()

  return (
    <div>
      <Card className={classes.root}>
        <div className={classes.avatar}>
          <Avatar alt={title} src={src} />
        </div>
        <div>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {subSpecialties && subSpecialties.length > 0
                ? subSpecialties
                : " – "}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}
