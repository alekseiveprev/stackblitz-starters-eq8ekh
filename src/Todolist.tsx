type PropsType = {
  title: string;
  tasks: Array<PropsTasksType>;
  removeTask: (id: string) => void;
  filterTask:(value: string) => void;
  
};

type PropsTasksType = {
  id: string;
  title: string;
  isDone: boolean;
};

export function Todolist(props: PropsType) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {props.tasks.map((t) => {
          return (
            <li key={t.id}>
              {' '}
              <input type="checkbox" checked={t.isDone} />{' '}
              <span>{t.title}</span>{' '}
              <button onClick={() => props.removeTask(t.id)}>+</button>{' '}
            </li>
          );
        })}
      </ul>

      <div>
        <button onClick={()=>props.removeTask('All')} value={'All'} >All</button>
        <button value={'Active'} >Active</button>
        <button value={'Completed'}  >Completed</button>
      </div>
    </div>
  );
}
