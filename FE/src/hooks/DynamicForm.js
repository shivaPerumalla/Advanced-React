import React,{useState,useRef,useEffect} from 'react';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
// import { initialState } from '../containers/App/meta/reducer';

const useStyles = makeStyles({
    container: {
        display: 'grid',
        gridColumnGap: '10px',
        gridRowGap: '15px',
        gridTemplateColumns: '2fr 2fr 2fr',
        margin: '30px',
    },
});

const getFieldElements = (fields)=>{
    return fields.map((field,index) => <TextField key = {field + index}
        id={field}
        label={field}
        variant="outlined"
        color="secondary"
    />);

 }

const DynamicForm = ({ labels ,isExtendedForm}) => {
       const [fields,setFields] = useState(labels);
       const [fieldsElements,setFieldsElemments] = useState(getFieldElements(labels));
       const containerRef =  useRef(null);
       useEffect(()=>{
        
            console.log("component  mounted");
        
       },[]);

       useEffect(()=>{

       if(isExtendedForm || fields.length < 3) { 
        setFieldsElemments(getFieldElements(fields));  
        }else{
            setFieldsElemments(getFieldElements(fields.slice(0,3)))
        }

    },[isExtendedForm,fields]);
           
    const classes = useStyles();
    const handleNewField = ()=> setFields([...fields,'New Field']); 
     const getHeight = ()=>{
         if(containerRef &&containerRef.current && containerRef.current.offsetHeight){
             return containerRef.current.offsetHeight;
         }
         return ''
     }
    return (
        <>
            <div ref = {containerRef} className={classes.container}>
            {fieldsElements}
             {console.log(fieldsElements + "-----")}
            </div>
            <div>{getHeight()}</div>
            <Fab  onClick = {handleNewField} color="secondary" aria-label="add">
                <AddIcon />
            </Fab>
        </>
    );
};

DynamicForm.propTypes = {
    labels: PropTypes.array,
};

export default DynamicForm;
