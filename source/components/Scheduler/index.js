// Core
import React, { Component } from 'react';

import Task from '../Task';
import Spinner from '../Spinner';
import Checkbox from '../../theme/assets/Checkbox';

// Instruments
import Styles from './styles.m.css';
import { api } from '../../REST'; // ! Импорт модуля API должен иметь именно такой вид (import { api } from '../../REST')

export default class Scheduler extends Component {
  state = {
    tasksFilter: '',
  }

  _updateTasksFilter = (e) => {
    const { value: tasksFilter } = e.target;

    this.setState(() => ({ tasksFilter }));
  }

  _updateNewTaskMessage = (e) => {
    const { value: newTaskMessage } = e.target;

    this.setState(() => ({ newTaskMessage }));
  }

  _createTaskAsync = (e) => {

  }

  render() {
    const tasksData = [
      {
        "id": "5a7f136131a5d90001271636",
        "message": "Hello",
        "completed": false,
        "favorite": false,
        "created": "2018-02-10T15:44:33.675Z",
        },
      ];

      const tasksJsx = tasksData.map(task =>  {
        return (
          <Task key={task.id}/>
        );
      });

      const { tasksFilter, newTaskMessage } = this.state;

      return (
        <section className={Styles.scheduler}>
          <main>
            <header>
              <h1>Планировщик задач</h1>
              <input
                onChange={this._updateTasksFilter}
                placeholder="Поиск"
                type="search"
                value={tasksFilter}
              />
            </header>
            <section>
              <form
                onSubmit={this._createTaskAsync}
              >
                <input
                  className="createTask"
                  maxLength={50}
                  onChange={this._updateNewTaskMessage}
                  placeholder="Описaние моей новой задачи"
                  type="text"
                  value={newTaskMessage}
                />
                <button>
                  Добавить задачу
                </button>
              </form>
              <div className={Styles.overlay}>
                <ul>
                {tasksJsx}
                </ul>
              </div>
            </section>
            <footer>
              <Checkbox color2="white" color1="black" />
              <span className={Styles.completeAllTasks}>
                Все задачи выполнены
              </span>
            </footer>
            </main>
        </section>
      );
    }
}
