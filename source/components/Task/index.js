// Core
import React, { PureComponent } from 'react';
import Checkbox from '../../theme/assets/Checkbox';
import Start from '../../theme/assets/Star';
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

  state = {
    newMessage: 'to do text...',
    isTaskEditing: true,
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
    _setTaskEditingState(false);
  }

  render() {
    const { newMessage } = this.state;

    return (
      <li className={Styles.task}>
        <div className={Styles.content}>
          <Checkbox color2="white" color1="#3b8ef3" />

          <input
            disabled={true}
            maxLength={50}
            onChange={this._updateNewTaskMessage}
            onKeyDown={this._updateTaskMessageOnKeyDown}
            type="text"
            value={newMessage}
          />
        </div>

        <div className={Styles.actions}>
          <Start className={Styles.toggleTaskFavoriteState} inlineBlock={true}/>
          <Edit className={Styles.updateTaskMessageOnClick} inlineBlock={true}/>
          <Remove inlineBlock={true}/>
        </div>
      </li>
    );
  }
}


// <li class="styles-m__task---2dTfq" style="">
// <div class="styles-m__content---39-vZ">
// <div class="styles-m__toggleTaskCompletedState---12Gjf" style="width: 25px; height: 25px; display: inline-block;">
// <svg version="1.1" viewBox="0 0 27 27" style="width: 25px; height: 25px; display: block;">
// <g><rect fill="#FFF" height="25" rx="5" ry="5" stroke="#3B8EF3" width="25" x="1" y="1" style="stroke-width: 2;"></rect>
// <path d="M22.12 6c-3.12 3.16-6.84 6.36-10.23 9.64l-5.42-4.05L4 14.84l6.78 5.08L12.23 21l1.25-1.25C17 16.2 21.29 12.6 25 8.89z" fill="#FFF"></path></g></svg></div>
// <input disabled="" maxlength="50" type="text" value="sd"></div>
// <div class="styles-m__actions---1VV1u">
// <div class="styles-m__toggleTaskFavoriteState---cX_vG" style="width: 19px; height: 19px; display: inline-block;"><svg version="1.1" viewBox="0 0 90 85.8" style="width: 19px; height: 19px; display: block;"><g><path d="M88 31.3L59.9 28l-13-26.6C46.6.5 45.8 0 45 0s-1.6.5-1.9 1.4L30.1 28 2 31.3c-1.9 0-2.7 2.4-1.2 3.5L23 53.3l-6.4 29.9c-.4 1.4.6 2.6 1.9 2.6.4 0 .8-.1 1.1-.4L45 70.2l25.4 15.2c.4.3.8.4 1.1.4 1.2 0 2.3-1.2 1.9-2.6L67 53.3l22.2-18.5c1.5-1.1.7-3.5-1.2-3.5z" fill="#3B8EF3"></path></g></svg></div><div class="styles-m__updateTaskMessageOnClick---1O57l" style="width: 19px; height: 19px; display: inline-block;"><svg version="1.1" viewBox="0 0 21 21" style="width: 19px; height: 19px; display: block;"><g><path d="M19.4 3.1L18 1.7 8.6 11l1.4 1.4 9.4-9.3zM19.3.3l1.4 1.4c.4.4.4 1 0 1.4L10.5 13.3c-.1.1-.2.2-.3.2l-2.9 1c-.3.1-.7-.1-.8-.4v-.4l1-2.9c0-.1.1-.2.2-.3L17.9.3c.4-.4 1-.4 1.4 0zM17 9h1v9.5c0 1.4-1.1 2.5-2.5 2.5h-13C1.1 21 0 19.9 0 18.5v-13C0 4.1 1.1 3 2.5 3H12v1H2.5C1.7 4 1 4.7 1 5.5v13c0 .8.7 1.5 1.5 1.5h13c.8 0 1.5-.7 1.5-1.5V9z" fill="#000"></path></g></svg></div><div style="width: 17px; height: 17px; display: inline-block;"><svg version="1.1" viewBox="0 0 53.8 53.8" style="width: 17px; height: 17px; display: block;"><g><path d="M53 49.5c1 1 1 2.6 0 3.5-.5.5-1.1.7-1.8.7-.6 0-1.3-.2-1.8-.7L26.9 30.4 4.3 53c-.5.5-1.1.7-1.8.7-.6 0-1.3-.2-1.8-.7-1-1-1-2.6 0-3.5l22.6-22.6L.7 4.3c-1-1-1-2.6 0-3.5 1-1 2.6-1 3.5 0l22.6 22.6L49.5.7c1-1 2.6-1 3.5 0 1 1 1 2.6 0 3.5L30.4 26.9 53 49.5z" fill="#000"></path></g></svg></div></div></li>