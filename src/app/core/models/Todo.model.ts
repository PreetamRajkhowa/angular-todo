export class Todo{
  public id:number;
  public todoName: string;
  public status: number;

  constructor(id:number,todoName:string,status:number){
    this.id=id;
    this.todoName=todoName;
    this.status=status;
  }


}

