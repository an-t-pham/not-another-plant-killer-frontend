import React from "react";
import { Redirect } from "react-router";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import teal from "@material-ui/core/colors/teal";
import pink from "@material-ui/core/colors/pink";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import PetsIcon from "@material-ui/icons/Pets";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import OpacityIcon from "@material-ui/icons/Opacity";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

const useStyles = makeStyles({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: 2,
		margin: "auto",
		maxWidth: 500
	},
	image: {
		width: 500,
		height: 500
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "100%",
		maxHeight: "100%"
	}
});
const Plant = ( {plant} ) => {
	const classes = useStyles();
	if(!plant) return null && <Redirect to="/plants" />;

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<Grid container spacing={2} style={{ backgroundColor: pink[50] }}>
					<Grid item>
						<ButtonBase className={classes.image}>
							<img className={classes.img} alt={plant.attributes.name} src={plant.attributes.image_url} />
						</ButtonBase>
					</Grid>
					<Grid item xl container>
						<Grid item  container direction="column" style={{ paddingLeft: "5px", color: teal[700] }} >
							<Grid item >
								<Typography variant="subtitle1">
									{plant.attributes.formatted_name} 
								</Typography>
								<Typography gutterBottom variant="body2" style={{ color: teal[300] }}>
                  AKA: {plant.attributes.aka}
								</Typography>
								<Typography  >
									{plant.attributes.description}
								</Typography>
								<Typography variant="body2" >
                Recomended pot size: {plant.attributes.size_pot} in
								</Typography>
							</Grid>
							<Grid item>
								<Typography variant="body2" >
									<PetsIcon /> {plant.attributes.pet_friendly ?  <CheckIcon style={{ color: green[500] }}/> : <CloseIcon style={{ color: red[500] }}/>}
								</Typography>
								<Typography variant="body2" >
									<OpacityIcon /> <br />
                  - Level {plant.attributes.water.level}: {plant.attributes.water.description}
								</Typography>
								<Typography variant="body2">
									<WbSunnyIcon /><br />
                  - Level {plant.attributes.light.level}: {plant.attributes.light.description} <br />
                  - Ideal Location: {plant.attributes.light.ideal_location}
								</Typography>
                
							</Grid>
						</Grid>
           
					</Grid>
				</Grid>
			</Paper>
		</div>



	);
};
export default Plant;