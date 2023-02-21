import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Icon, IconButton, Menu, MenuItem } from '@material-ui/core';
import { globalType } from '../reducers/Functions';
import Inputs from './Inputs';
//import { RecognizerContext } from '../context/recognizerContext';

const useStyles = makeStyles((theme) => ({
    form: { marginTop: '10px', marginBottom: '10px', padding: '8px' },
    grid: {
      margin: 12,
      display: 'flex',
      flexWrap: 'wrap',
    },
    group: {
      padding: '4px',
    },
    unique: {
      display: 'flex',
      justifyContent: 'flex-around',
      minWidth: '200px',
    },
  }));

export default function FilterElement(props){
    const { ind, label, column, value, onChange, disabled, errors, extension, speech } = props;
    const classes = useStyles()
    //const reco = React.useContext(RecognizerContext)
    const [actionsDisplayed, setActionsDisplayed] = React.useState(null);
    const handleChange = (e, op) =>{
        let val;
        if (e === null) {
          // cas du vidage d'un <Select
          val = null;
        } 
        else if (column.type.includes('date') || column.type.includes('time')) {
          val = column.type === 'time' ? `${e.getHours()}:${e.getMinutes()}:${e.getSeconds()}` : e;
        }
        else if (column.type === 'foreign'){
          val = e.value
        }
        else if (column.type === 'foreigns') {
          val = e.map((m) => m.value);
        }
        else if (column.type.includes('set(')){
          let row = value.find(v=>v.label===label)
          if(row){
            row.value = row.value.split(';')
            val = row.value.includes(e.target.value) ? row.value.filter(r=>r!==e.target.value).join(';') : [...row.value,e.target.value].join(';')
          }
          else{
            val = e.target.value
          }          
        }
        else {
          val = e.value || e.target.value;
        }
        onChange(val ? [...value.filter(v=>v.operator!==op),...[{label,operator:op,value:val}]] : value.filter(v=>v.operator!==op))
    }  
    const displayActions = (e) => {
      setActionsDisplayed(e.currentTarget);
    };
    if (['text','foreign'].includes(globalType(column.type))) { 
        const op = column.type.includes('foreign') /*|| column.type.includes("set(")*/ ? 'in' : 'like';
        const exp = 'contient';
        return (
          <Grid id={`grid${label}`} item className={classes.unique}>
            <Inputs
              autoFocus={ind === 0}
              key={`${column.label || label}(${exp})`}
              id={`inp_${ind}`}
             // widthCoef={width}
              filtre
              disabled={disabled}
              type={['address','geo','enum'].includes(column.type) ? "varchar" : column.type}
              possibles={column.possibles || []}
              icon={column.icon || null}
              value={value && value[0] && value[0]['value'] ? value[0]['value'] : ''}
              label={`${column.label || label}(${exp})`}
              error={errors}
              onChange={(e) => handleChange(e, op)}
            />
            <div>
            { extension(label,column,value) }
            {/* speech && ( <div style={{display:'flex',justifyContent:'center'}}>
                <IconButton key="speak" onClick={e=>{console.log(reco.oneRecognize(label))}}>
                  <Icon size="large"> mic </Icon>
                </IconButton>
                <IconButton 
                  onClick={(e)=>reco.savedModelList.some(mod=>mod.includes(label.toLowerCase())) ? reco.modifyModel(label.toLowerCase()) : reco.createModel(label)}
                 // onClick={e=>reco.modifyModel(label)}
                >
                  <Icon size="large"> settings_voice </Icon>
                </IconButton>
              </div>
        )*/}
            </div>
            <Menu
              elevation={0}
              getContentAnchorEl={null}
              open={Boolean(actionsDisplayed)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              anchorEl={actionsDisplayed}
              onClose={(e) => {
                setActionsDisplayed(null);
              }}
            >
              <MenuItem 
                divider
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              >
                <IconButton key="speak" onClick={e=>console.log(e)}>
                  <Icon size="large"> edit </Icon>
                </IconButton>
                <select>
                  <option value={null}> </option>
                </select>
              </MenuItem>
            </Menu>
          </Grid>
        );
    } else if (["number","date","time"].includes(globalType(column.type))) {
        return (
          <Grid id={`grid${label}`} item className={classes.unique}>
            <div className={classes.group}>
            {(!column.filterable || column.filterable.includes('min')) && (<Inputs
              key={`${column.label}(>=)`}
              id={`inp_${ind}`}
              autoFocus={ind === 0}
             // widthCoef={width}
              filtre
              disabled={disabled}
              type={column.type}
              possibles={column.possibles || []}
              icon={column.icon || null}
              value={value && value.filter(v=>v.operator==='>=').length > 0 ? value.filter(v=>v.operator==='>=')[0]['value'] : ''}
              label={`${column.label || label}(>=)`}
              error={errors}
              onChange={(e) => handleChange(e, '>=')}
            />)}
            {(!column.filterable || column.filterable.includes('max')) && (<Inputs
              key={`${column.label || label}(<=)`}
              id={`inp_${ind}f`}
             // widthCoef={width}
              filtre
              disabled={disabled}
              type={column.type}
              possibles={column.possibles || []}
              icon={column.icon || null}
              value={value && value.filter(v=>v.operator==='<=').length > 0 ? value.filter(v=>v.operator==='<=')[0]['value'] : ''}
              label={`${column.label || label}(<=)`}
              error={errors}
              onChange={(e) => handleChange(e, '<=')}
            />)}
            </div>
            { extension(label,column,value) }
          </Grid>
        );
    }
    else{
      return (<h5>Filtre indisponible</h5>)
    }  
}
FilterElement.propTypes = {
    
}
FilterElement.defaultProps = {
    value: [],
    ind: -1,
    extension: null,
}