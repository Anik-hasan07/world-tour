import { makeStyles } from '@mui/styles';

const useStyles  = makeStyles((theme) =>({

    cardGrid:{
        padding: "20px 20px"
    },
    Card:{
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardMedia:{
        paddingTop:"56.25%"
    },
    cardContent:{
        flexGrow:1,
    },

    tourPrice:{
     display: "flex",
     justifyContent: "spaceBetween"
      },
     




    

}));
export default useStyles;
