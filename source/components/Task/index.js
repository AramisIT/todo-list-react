// Core
import React, { PureComponent } from 'react';
import Checkbox from '../../theme/assets/Checkbox';
import Star from '../../theme/assets/Star';
import Edit from '../../theme/assets/Edit';
import Remove from '../../theme/assets/Remove';

// Instruments
import Styles from './styles.m.css';

export default class Task extends PureComponent {
  _getTaskShape = ({
    id = this.props.id,
    completed = this.props.completed,
    favorite = this.props.favorite,
    message = this.props.message,
  }) => ({
    id,
    completed,
    favorite,
    message,
  });

  constructor(props) {
    super(props);

    this.taskInput = React.createRef();
    this.state = {
      newMessage: 'Выполнить важную задачу.',
      isTaskEditing: true,
    };
  }

  _updateTaskMessageOnClick = () => {
    // const { isTaskEditing } = this.state;
    this.uuu();
    this._updateTask();

    //if (isTaskEditing) return null;

    return (null);
  }

  uuu = () => {

  }

  _cancelUpdatingTaskMessage = () => {

  }

  _toggleTaskCompletedState = () => {

  }

  _toggleTaskFavoriteState = () => {
    const { _updateTaskAsync, favorite } = this.props;

    const taskToUpdate = this._getTaskShape({ favorite: !favorite });
    _updateTaskAsync(taskToUpdate);
  }

  _removeTask = () => {
    const { _removeTaskAsync, id } = this.props;
    _removeTaskAsync(id);
  }

  _updateTaskMessageOnKeyDown = (e) => {
    if (e.keyCode === 13 || e.keyCode === 27) {
      e.preventDefault();
    }
  }

  _setTaskEditingState = (isTaskEditing) => {
    this.setState(() => ({ isTaskEditing }));
  }

  _updateNewTaskMessage = (e) => {
    this.setState(() => ({ newMessage: e.target.value }));
  }

  _updateTask = () => {
    const { _updateTaskAsync } = this.props;

    _updateTaskAsync();
    this._setTaskEditingState(false);
  }

  render() {
    const { newMessage } = this.state;

    return (
      <li className={Styles.task}>
        <div className={Styles.content}>
          <Checkbox
            className={Styles.toggleTaskCompletedState}
            onClick={this._toggleTaskCompletedState}
            checked={false}
            inlineBlock={true}
            color1="#3B8EF3"
            color2="#FFF"
          />

          <input
            disabled={true}
            maxLength={50}
            onChange={this._updateNewTaskMessage}
            onKeyDown={this._updateTaskMessageOnKeyDown}
            type="text"
            ref={this.taskInput}
            value={newMessage}
          />
        </div>

        <div className={Styles.actions}>
          <Star
            className={Styles.toggleTaskFavoriteState}
            inlineBlock={true}
            color1="#3B8EF3"
            checked={false}
            onClick={this._toggleTaskFavoriteState}
            color2="#000"
          />
          {/* Broken test */}
          <Edit
            onClick={() => this._updateTaskMessageOnClick()}
            checked={false}
            color1="#3B8EF3"
            color2="#000"
            inlineBlock={true}
          />
          <Remove
            onClick={this._removeTask}
            className={Styles.removeTask}
            color1="#3B8EF3"
            color2="#000"
            inlineBlock={true}
          />
        </div>
      </li>
    );
  }
}