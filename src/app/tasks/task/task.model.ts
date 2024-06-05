export interface Task{
    id: String;
    userId: String;
    title: String;
    summary:String;
    dueDate: String;
  }

export interface NewTaskData{
  title:string;
  summary:string;
  date:string;
}