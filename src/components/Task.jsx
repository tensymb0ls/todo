import React, { useRef, useState } from "react";
export class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit:false,
        }
        this.newTxt = React.createRef();
    }
    handleClickEdit = () => {
        this.setState({ isEdit: true });
    }
    handleClickSave = () => {
        const value = this.newTxt.current.value;
        console.log(value);
        this.props.updateTask(this.props.index, value);
        this.setState({ isEdit: false });
    }
    handelClickRemove = () => {
        this.props.removeTask(this.props.index);
    }
    renderNorm = () => {    
        return (
            <div className="flex">
            <div className="box">
                <div className="taskBody">{this.props.children}</div>
                <button onClick={this.handleClickEdit} className="btn light">Edit task</button>
                <button onClick={this.handelClickRemove} className="btn red">Remove</button>
                </div>
                </div>
        )
    }
    renderEdit = () => {
        return (
            <div className="flex">
                <div className="box">
                    <textarea
                        ref={this.newTxt}
                        defaultValue={this.props.children}
                        name="" id="" cols="30" rows="10">
                       
                    </textarea>
                <button onClick={this.handleClickSave} className="btn success">Save</button>
        </div>
            </div>
    )
    }
     render() {
        if (this.state.isEdit) {
            return this.renderEdit();
        } else {
            return this.renderNorm();
        }
    }
}

export const TaskFunc = ({ children, removeTask, index, updateTask}) => {
    // hook
    const [state, setState] = useState({ isEdit: false }); // использование хука
    const newTxt = useRef(); // создание ссылки 
    const handleClickEdit = () => {
        setState({ isEdit: true });
    }
    // const { isEdit } = state;
   const handelClickRemove = () => {
        removeTask(index);
    }
    const handleClickSave = () => {
        const value = newTxt.current.value;
        updateTask(index, value);
        setState({ isEdit: false });
    }
        // boolean ? true : false;
    if (!state.isEdit) {
        return (
            <div className="flex">
                <div className="box">
                    <div className="taskBody">{children}</div>
                    <button onClick={handleClickEdit} className="btn light">Edit task</button>
                    <button onClick={handelClickRemove} className="btn red">Remove</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex">
                <div className="box">
                    <textarea
                        ref={newTxt}
                        defaultValue={children}
                        name="" id="" cols="30" rows="10">
                       
                    </textarea>
                    <button onClick={handleClickSave} className="btn success">Save</button>
                </div>
            </div>
        );
    }
}