import {connect} from 'react-redux';
import {push} from 'react-router-redux'; //追加
import TodoApp from '..components/TodoApp';
import {inputTask,addTask} from '../actions/tasks';

function mapStateToProps({tasks}){
    return {
        task:tasks.task,
        tasks:tasks.tasks
    };
}

function mapDispatchToProps(dispatch){
    return {
        addTask(task){
            dispatch(addTask(task));
        },
        inputTask(task){
            dispatch(inputTask(task))
        },
        redirectToError(){
            dispatch(push('/error'));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);