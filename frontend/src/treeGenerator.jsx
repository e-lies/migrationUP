import React, { useState, useEffect } from 'react';
import { TextField, IconButton, FormControlLabel, Switch } from '@material-ui/core';
import { TreeView, TreeItem } from '@material-ui/lab';

const Node = (props) => {
  const { index, jsn, onChange, toggleChild } = props;

  const valChange = (e) =>{
    onChange(index,e.target.getAttribute('key'),e.target.value)
  }
  return (
    <TreeItem key={`node${index.split(',')}`} nodeId={`node${index.split('')}`}
      labe={<FormControlLabel
        control={
          <Switch
            checked={jsn.children && Array.isArray(jsn.children)}
            onChange={handleChange('checkedB')}
            value={"checkedB"}
            color="primary"
          />
        }
        label="arete"
      />
      <TextField 
        key="id"
        label="id"
        value={jsn.id || null}
        onChange={(e) => valChange(e)} 
      />
      <TextField
        key="label"
        label="label"
        value={jsn.label || null}
        onChange={(e) => valChange(e)}
      />
      <IconButton key="icon" color="primary" onClick={(e) => iconDialog}>
        <Icon fontSize="large"> picture </Icon>
      </IconButton>
      <TextField
        key="description"
        label="description"
        value={jsn.description || null}
        onChange={(e) => valChange(e)}
      />
      <TextField
        key="cond"
        label="condition"
        value={jsn.condition || null}
        onChange={(e) => valChange(e)}
      />
      <IconButton key="icon" color="primary" onClick={(e) => iconDialog}>
        <input key="children" type="file" webkitdirectory={jsn.children && Array.isArray(jsn.children)} onChange={e=>valChange(e)} />
      </IconButton>}
    >
      {jsn.children && jsn.children.map((ch,i)=>{
        return( <Node index={index.push(i)} jsn={ch} {...onChange, toggleChild}/> )
      })}
    </TreeItem>
  );
};

export default function Generator() {
  const [state, setState] = useState([]);
  const valChange = (index, key, value) =>{
    let st = [...state]
    let target = st[index[0]]
    for (let i = 1; i < index.lengt; i++) {
      if(target.children) { target = target.children[index[i]] }
    }
    target[key] = value
    setState(st)
  }
  const valAdd = index =>{
    let st = [...state]
    let target = st[index[0]]
    for (let i = 1; i < index.lengt; i++) {
      if(target.children) { target = target.children[index[i]] }
    }
    if(target.children ) {
      target.children.push({})
    }
    else{
      target.children = [{}]
    }
    setState(st)
  }

  const lineRender = jsn =>{
    if( jsn.children ){ 
      jsn.children.map(node=>{
        return( <TreeItem
            nodeId={node.index.split('')}
            label={
              <Node index={node.index} jsn={jsn} onChange={valChange} toggleChild={valAdd} />
            }
          >
            { lineRender(jsn.children) }
        </TreeItem>
      })
      
    )} 
  }
  return(
    <TreeView
      //className={classes.root}
      defaultExpanded={['3']}
      defaultCollapseIcon={<Icon>ArrowDropDown</Icon>}
      defaultExpandIcon={<Icon>ArrowRight</Icon>}
    >
      {
     
      }
    </TreeView>
  )
}
